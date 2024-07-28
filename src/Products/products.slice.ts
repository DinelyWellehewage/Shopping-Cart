import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "Escape from tarkov", price: 60, id: "eft" },
  { title: "Hunt:Showdown", price: 50, id: "hunt" },
  { title: "Hell left loose", price: 60, id: "hll" },
];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});
export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
