import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

function Futter() {
  const {changeMode} = useContext(ProductContext)
  return (
    <div className={`fixed bottom-0 w-full ${changeMode ? "bg-gray-800":"bg-gray-500"} text-white text-center py-2`}>
      <h6 className="text-sm">Desarrollado por XtremeDeveloper</h6>
    </div>
  );
}

export default Futter;

