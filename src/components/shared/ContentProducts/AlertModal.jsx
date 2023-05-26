import React, { useState, useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

const AlertModal = ({ message }) => {
  const { showAlert, setShowAlert, alertMessage, colorAlert } =
    useContext(ProductContext);

  const closeModal = () => {
    setShowAlert(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center h-40 z-50 ${
        showAlert ? "" : "hidden"
      }`}
    >
      <div className={`${colorAlert} mt-[5px] rounded-lg p-4 shadow-lg`}>
        <p className="text-gray-800">{alertMessage}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
