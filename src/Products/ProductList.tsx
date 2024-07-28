import React from "react";
import { useSelector } from "react-redux";
import { getproductsSelector, removeProduct } from "./products.slice";
import { useAppDispatch } from "../store";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {
  const products = useSelector(getproductsSelector);
  const dispatch = useAppDispatch();
  const removeFromStore = (id: string) => {
    dispatch(removeProduct(id));
  };
  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
          <button onClick={() => removeFromStore(product.id)}>
            Remove fron the store
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
