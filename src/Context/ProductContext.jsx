import React, { createContext, useState, useEffect } from "react";
import { data } from "../components/shared/data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  

  useEffect(()=>{
    setProducts(data)
    setLoading(false)
  },[])

  return (
    <ProductContext.Provider value={{ products,loading}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
