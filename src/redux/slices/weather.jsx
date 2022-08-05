import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
