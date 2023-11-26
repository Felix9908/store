import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import ProductCarrito from "./ProductCarrito";
import { useContext } from "react";
import { SidebarContext } from "../../Context/SidebarContext";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

function Carrito() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total } = useContext(CartContext);
  const { dataDiscount, changeMode } = useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;

  return (
    <div
      className={`w-[380px] lg:w-[400px] z-20 fixed ${
        isOpen ? "right-0" : "-right-full"
      } top-0 ${
        changeMode
          ? "bg-opacity-20 backdrop-blur-md border border-black border-opacity-50 rounded-lg shadow-md text-[#000]"
          : "bg-opacity-20 backdrop-blur-md border border-white border-opacity-50 rounded-lg shadow-md"
      } h-full transition-all`}
    >
      <div className="relative py-16 text-gray-300 p-8 h-full">
        <button onClick={handleClose}>
          <RiCloseLine className="absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
        </button>
        <h1
          className={`text-2xl my-4 ${
            changeMode ? `text-whitw` : `text-black`
          }`}
        >
          Nueva orden
        </h1>
        {/* Card */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5
              className={`col-span-4 ${
                changeMode ? `text-whitw` : `text-black`
              }`}
            >
              item
            </h5>
            <h5 className={`${changeMode ?`text-whitw`:`text-black`}`}>Cant</h5>
            <h5 className={`${changeMode ?`text-whitw`:`text-black`}`}>Precio</h5>
          </div>
          <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
            {cart.map((item) => {
              return <ProductCarrito item={item} key={item.id} />;
            })}
          </div>
        </div>
        {/* Submit Payment */}
        <div className={`${changeMode ?"bg-[#262837]":"bg-gray-200"} absolute w-full bottom-0 left-0 p-4`}>
          <div
            className={` ${
              dataDiscount.estadoDescuento == "Activated" ? "" : "hidden"
            } felx items-center justify-between mb-4`}
          >
            <span className={`${changeMode ? "text-gray-400" : "text-black"}`}>Discount:</span>
            <span className="text-blue-500">${(parseFloat(total) * numeroConvertido).toFixed(2)}</span>
          </div>
          <div className="felx items-center justify-between mb-6">
            <span className={`${changeMode ? "text-gray-400" : "text-black"}`}>Subtotal:</span>
            <span className="text-green-500">
              $
              {parseFloat(total).toFixed(2) -
                parseFloat(total).toFixed(2) * numeroConvertido}
            </span>
          </div>
          <div>
            <Link
              to="/buyPage"
              className={`${changeMode ? "bg-[#ec7c6a]" : "bg-blue-500"} w-full py-2 px-4 rounded-lg`}
            >
              Continue to payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
