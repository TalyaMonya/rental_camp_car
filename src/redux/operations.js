import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://654b86185b38a59f28ef3c4e.mockapi.io";

export const getAllCampers = createAsyncThunk(
    "get/campers",
    async (campersCount, thunkAPI) => {
        try {
            const response = await axios.get(`/adverts?page=1&limit=${campersCount}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);