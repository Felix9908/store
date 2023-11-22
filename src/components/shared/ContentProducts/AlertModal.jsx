import React, { useState, useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

const AlertModal = () => {
  const { showAlert, setShowAlert, alertMessage, colorAlert, alertTitulo } =
    useContext(ProductContext);

  const closeModal = () => {
    setShowAlert(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center h-50 z-50 ${
        showAlert ? "" : "hidden"
      }`}
    >
      <div
        className={`mt-[5px] rounded-3xl shadow-lg w-[500px] h-[250px] bg-white overflow-hidden`}
        style={{ position: "relative" }}
      >
        <div
          className={`flex items-center justify-center w-[500px] h-[50px] ${colorAlert}`}
        >
          <h6>{alertTitulo}</h6>
        </div>
        <div className="p-5">
          <p className="text-gray-800">{alertMessage}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-200">
          <button
            className={`w-full ${colorAlert} ${colorAlert == 'bg-red-500'?"hover:bg-red-400": "hover:bg-green-400"} text-white font-bold py-2 px-4 rounded`}
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
