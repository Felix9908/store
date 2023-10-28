import { useContext } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { ProductContext } from "../../../Context/ProductContext";
import { CartContext } from "../../../Context/CartContext";
import { SidebarContext } from "../../../Context/SidebarContext";

function Car(title) {
  const { logged } = useContext(ProductContext);
  const { itemAmount } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={`absolute ${
          logged && title !== "Settings" ? "" : "hidden"
        } right-0 top-14 p-2 mr-6 box-content text-gray-300 bg-[#1F1D2B] rounded-full text-xl`}
      >
        <RiShoppingCart2Line />
        <div
          className={` ${
            itemAmount == 0 ? "hidden text-[#262837]" : ""
          }bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center`}
        >
          {itemAmount}
        </div>
      </button>
    </div>
  );
}

export default Car;
