import React, { createContext, useState, useEffect } from "react";
import { data } from "../components/shared/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const grill = products.filter((data1) => data1.tipe === "grill");

  const coldDishes = products.filter((data1) => data1.tipe === "coldDishes");

  const hotDishes = products.filter((data1) => data1.tipe === "hotDishes");

  const soup = products.filter((data1) => data1.tipe === "soup");

  useEffect(() => {
    setProducts(data);
    setLoading(false);
  }, []);

  return (
    <ProductContext.Provider
      value={{ loading, grill, coldDishes, hotDishes, soup }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
