import { useContext, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";

function ChangeDiscount() {
  const { dataDiscount, changeDiscount } = useContext(ProductContext);
  const [select, setSelect] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeDiscount({ select, discount, id: dataDiscount.id });
  };
  return (
    <div className="max-w-[400px] mx-auto shadow-md rounded-md p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold mb-4">
            Control de descuentos
          </p>
          <select
            onChange={(e) => {
              setSelect(e.target.value);
            }}
            className="mb-3"
          >
            <option value={""}>Seleccionar estado</option>
            <option value={"Activated"}>Activar</option>
            <option value={"Disabled"}>Desactivar</option>
          </select>
          <input
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            type="number"
            placeholder="Cantidad de descuento"
          />
          <button className="rounded-md bg-blue-500 mt-3 p-1">Change</button>
        </div>
      </form>
    </div>
  );
}

export default ChangeDiscount;
