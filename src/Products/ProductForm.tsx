import React, { useState } from "react";
import { Product } from "./products.slice";

const ProductForm: React.FC = ({}) => {
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    console.log({ product });
  };
  const { title, price, id } = product;
  return (
    <>
      <h2>Add Game to the Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Id"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <button type="submit">Add Price</button>
      </form>
    </>
  );
};

export default ProductForm;
