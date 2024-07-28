import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Products/ProductList";
import ProductForm from "./Products/ProductForm";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <ProductForm />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
