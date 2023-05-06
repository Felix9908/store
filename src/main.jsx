import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SidebarProvider from "./Context/SidebarContext";
import ProductProvider from "./Context/ProductContext";
import CartProvider from './Context/CartContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <SidebarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SidebarProvider>
    </ProductProvider>
  </CartProvider>
);
