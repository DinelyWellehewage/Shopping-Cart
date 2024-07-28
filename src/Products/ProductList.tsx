import React from "react";
import { useSelector } from "react-redux";
import { getproductsSelector, Product, removeProduct } from "./products.slice";
import { useAppDispatch } from "../store";
import { addToCart } from "../Cart/cart.slice";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {
  const products = useSelector(getproductsSelector);
  const dispatch = useAppDispatch();
  const removeFromStore = (id: string) => dispatch(removeProduct(id));

  const addToCartHandler = (product: Product) => dispatch(addToCart(product));
  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
          <button onClick={() => removeFromStore(product.id)}>
            Remove fron the store
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
