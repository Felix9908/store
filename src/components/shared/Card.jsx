import {RiAddFill} from "react-icons/ri"
import {CartContext} from "../../Context/CartContext";
import { useContext } from "react";

function Card({ data }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div>
      <div className=" z-0 relative bg-[#1F1D2B] w-[280px] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center group">
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(data, data.id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-[#ec7c6a]">
              <RiAddFill className="text-3xl" />
            </div>
          </button>
        </div>
        <img
          src={data.img}
          className="w-40 h-40 -mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl">{data.description}</p>
        <span className="text-gray-400">{data.price}</span>
        <p text-gray-600>{data.available}</p>
      </div>
    </div>
  );
}

export default Card;
