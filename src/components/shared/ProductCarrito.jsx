import { RiDeleteBin6Line, RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function ProductCarrito({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div>
      {/* Product */}
      <div className="">
        <div className="bg-[#262837] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6">
            {/* Description product*/}
            <div className="col-span-3 pb-3 flex items-center gap-x-4">
              <img
                src={item.img}
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h5 className="text-sm">{item.description}</h5>
                <p className="text-md text-gray-500">${item.price}</p>
              </div>
            </div>
            {/* Qty */}

            <div className="grup flex items-center bg-[#1F1D2B] h-[50px] w-[80px] mx-5 rounded-lg">
              <div
                onClick={() => decreaseAmount(item.id)}
                className="h-full flex-1 flex justify-center items-center cursor-pointer"
              >
                <RiSubtractLine />
              </div>
              <div>
                <span className="bg-[#1F1D2B] p-3 border w-[5px] rounded-lg">
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

            {/* Price */}
            <div className="ml-14 mt-4 w-[70px] h-[20px]">
              <span>{`$ ${parseFloat(item.price * item.amount).toFixed(
                2
              )}`}</span>
            </div>
          </div>
          {/* Note */}
          <div className="grid grid-cols-7 items-center gap-2">
            <form className="col-span-5">
              <input
                type="text"
                className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                placeholder="Order note..."
              />
            </form>
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
