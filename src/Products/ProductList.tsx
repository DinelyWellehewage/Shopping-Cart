import React, { useState } from "react";

interface ProductListProps {}

const initialProducts = [
  { title: "Escape from tarkov", price: 60, id: "eft" },
  { title: "Hunt:Showdown", price: 50, id: "hunt" },
  { title: "Hell left loose", price: 60, id: "hll" },
];
interface Product {
  title: string;
  price: number;
  id: string;
}
const ProductList: React.FC<ProductListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  return (
    <div>
      <h2>Game List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>{`${product.title} : ${product.price}`}</span>
        </div>
      ))}

      <button
        onClick={() =>
          setProducts((prevProducts) => [
            { title: "Half life", price: 100, id: "hl" },
            ...prevProducts,
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductList;
