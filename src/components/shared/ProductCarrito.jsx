import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductContext } from "../../Context/ProductContext";

function ProductCarrito({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { dataDiscount, changeMode } = useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;

  const imagePath = item.imagePath.replace(/\\/g, "/");

  return (
    <div>
      <div className="md:w-[330px] w-[310px]">
        <div className={`${changeMode ?`bg-[#262837] border border-black `:`bg-gray-300 border`} p-4 rounded-xl mb-4`}>
          <div className="grid grid-cols-6">
            <div className="col-span-3 pb-3 flex items-center gap-x-4">
              <img
                src={`https://back-endstore-production.up.railway.app/${imagePath}`}
                alt={item.nameImg}
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h5 className={`text-sm ${changeMode ?``:`text-black`}`}>{item.productName}</h5>
                <h6
                  className={`text-md text-gray-500 flex ${
                    dataDiscount.estadoDescuento == "Activated"
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  ${item.price}{" "}
                  <p
                    className={`ml-1 ${
                      dataDiscount.estadoDescuento == "Activated"
                        ? ""
                        : "hidden"
                    } text-blue-500`}
                  >
                    -{numberValue}%
                  </p>
                </h6>
              </div>
            </div>
            {/* Qty */}

            <div className={`grup flex items-center ${changeMode ?`bg-[#1F1D2B]`:`bg-gray-400 text-black`} h-[50px] w-[80px] mx-5 rounded-lg`}>
              <div
                onClick={() => decreaseAmount(item.id)}
                className="h-full flex-1 flex justify-center items-center cursor-pointer"
              >
                <RiSubtractLine />
              </div>
              <div>
                <span className={`${changeMode ?`bg-[#1F1D2B]`:`bg-gray-400 text-black`}  p-3 border w-[5px] rounded-lg`}>
                  {item.amount}
                </span>
              </div>
              <div
                onClick={() => increaseAmount(item.id)}
                className="h-full flex flex-1 justify-center items-center cursor-pointer"
              >
                <RiAddLine />
              </div>
            </div>

            <div className="ml-14 mt-4 w-[70px] text-green-400 h-[20px]">
              <span>{`$ ${dataDiscount.estadoDescuento == "Activated" ? 
                parseFloat(item.price * item.amount).toFixed(2) -
                parseFloat(item.price * item.amount).toFixed(2) *
                  numeroConvertido
               : parseFloat(item.price * item.amount).toFixed(2) }`}</span>
            </div>
          </div>
          <div className="grid grid-cols-7 items-center gap-2">
            {/* <form className="col-span-5">
              <input
                type="text"
                className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                placeholder="Order note..."
              />
            </form> */}
            <div className="col-span-1 text-center">
              <button
                onClick={() => removeFromCart(item.id)}
                className="border border-red-500 p-2 rounded-lg"
              >
                <RiDeleteBin6Line className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarrito;
