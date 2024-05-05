import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./Slice/jobSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer, // Add the jobs reducer to the store
  },
});

export default store;
