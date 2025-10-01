import axios from "axios";
import { create } from "zustand";

const useAvailabilityStore = create((set) => ({
  availability: [],
  roomRates: [],

  // Fetch availability for specific hotel
  getAvailability: async () => {
    // if (!hotelId) {
    //   console.warn("HotelId is required for fetching availability");
    //   return;
    // }
    try {
      const res = await axios.get(
        `http://localhost:5000/api/room/get-roomtypes/68d292e08b19d2074beb4142`,
        { withCredentials: true } // since route is protected
      );
      set({ availability: res.data });
    } catch (err) {
      console.error("Error fetching availability", err);
    }
  },

  // Fetch room rates for specific hotel
  getRoomRates: async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/room/get-all-rooms`,
        { withCredentials: true }
      );
      set({ roomRates: res.data });
    } catch (err) {
      console.error("Error fetching room rates", err);
    }
  },
}));

export default useAvailabilityStore;
