import { configureStore } from "@reduxjs/toolkit";
import products from "./Products/products.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
