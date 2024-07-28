import React from "react";
import { useSelector } from "react-redux";
import { getproductsSelector } from "./products.slice";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {
  const products = useSelector(getproductsSelector);
  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
