 import { create } from "zustand";
import axios from "axios";
export const useBookingStore = create((set) => ({
   bookings: [],
   getBooking: async () => {
    // try catch block can be added for error handling
    try {
       const response = await axios.get("http://localhost:5000/api/bookings/get-bookings/68d292e08b19d2074beb4142");
       const data = response.data;
       set({ bookings: data });
       console.log("Fetched bookings:", data);
    //    return data;
    } catch (error) {
       console.error("Error fetching bookings:", error);
       throw error;
    }
   },
}));
export default useBookingStore;
