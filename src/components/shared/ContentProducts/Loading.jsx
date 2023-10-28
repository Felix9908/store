import React, { useState, useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

const AlertModal = () => {
  const { loading } = useContext(ProductContext);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center h-50 z-50 ${
        loading ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center text-white">
        <h6 className="text-xl">Cargando...</h6>
      </div>
    </div>
  );
};

export default AlertModal;
