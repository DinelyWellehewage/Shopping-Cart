import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import validateProduct from "../fake.api";

export interface Product {
  title: string;
  price: number;
  id: string;
}
export enum ValidationState {
  Fulfilled,
  Pending,
  Rejected,
}
interface ProductsSliceState {
  products: Product[];
  validationState?: ValidationState;
  errorMessage?: string;
}
const initialProducts: Product[] = [
  { title: "Escape from tarkov", price: 60, id: "eft" },
  { title: "Hunt:Showdown", price: 50, id: "hunt" },
  { title: "Hell left loose", price: 60, id: "hll" },
];
export const addProductAsync = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);
const initialState: ProductsSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      //   return [action.payload, ...state];
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => {});
  },
});
export const { addProduct, removeProduct } = productsSlice.actions;
export const getproductsSelector = (state: RootState) =>
  state.products.products;
export const getErrorMessage = (state: RootState) =>
  state.products.errorMessage;
export default productsSlice.reducer;
