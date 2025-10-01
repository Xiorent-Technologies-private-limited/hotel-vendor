import axios from "axios";
import { create } from "zustand";
export const useRoomStore = create((set) => ({
   rooms: [],
   getRooms: async () => {
    // try catch block can be added for error handling
    try {
       const response = await axios.get("http://localhost:5000/api/room/get-all-rooms");
       const data = response.data;
       set({ rooms: data });
       console.log("Fetched rooms:", data);
    //    return data;
    } catch (error) {
       console.error("Error fetching rooms:", error);
       throw error;
    }
   },
}));
export default useRoomStore;
