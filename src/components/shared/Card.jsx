import { RiAddFill, RiSubtractLine } from "react-icons/ri";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

function Card({ data }) {
  const { addToCart } = useContext(CartContext);
  const { logged, deleteProduct, userData } = useContext(ProductContext);
  const imagePath = data.imagePath.replace(/\\/g, "/");
  const privUser = sessionStorage.getItem("privUser")
  return (
    <div>
      <div className="z-0 relative bg-[#1F1D2B] w-[280px] p-8 rounded-xl overflow-hidden flex flex-col items-center text-gray-300 text-center group">
        <div
          className={`absolute ${
            logged ? "" : "hidden"
          } top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <button onClick={() => addToCart(data, data.id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-[#ec7c6a]">
              <RiAddFill className="text-3xl" />
            </div>
          </button>
          <button className={`${
            privUser == "Admin" ? "" : "hidden"
          }`} onClick={() => deleteProduct(data.id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <RiSubtractLine className="text-3xl" />
            </div>
          </button>
        </div>

        <img
          src={`http://localhost:9999/${imagePath}`}
          alt={data.nameImg}
          className="w-40 h-40 -mt-20 shadow-2xl rounded-full over"
        />
        <p className="text-xl">Name: {data.productName}</p>
        <span className="text-gray-400">Price: {data.price}</span>
        <p className="text-gray-600">Available: {data.available}</p>
      </div>
    </div>
  );
}

export default Card;
