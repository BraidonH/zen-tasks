import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/task";
import weatherReducer from "./slices/weather";
export const store = configureStore({
  reducer: {
    task: taskReducer,
    weather: weatherReducer,
  },
});
