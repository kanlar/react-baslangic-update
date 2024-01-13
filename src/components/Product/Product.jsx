import Header from "../Header/Header";
import ProductItem from "./ProductItem/ProductItem";
import data from "../../data.json";
import React, { useState } from "react";
import "../Product/Product.css";

function Product() {
  const [products] = useState(data);

  return (
    <>
      <Header />
      <div className="container">
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Product;
