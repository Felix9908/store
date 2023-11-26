import { RiAddFill, RiSubtractLine, RiEyeLine } from "react-icons/ri";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

function Card({ data, type }) {
  const { addToCart } = useContext(CartContext);
  const { logged, deleteProduct, dataDiscount, changeMode } =
    useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;
  const imagePath = data.imagePath.replace(/\\/g, "/");
  const privUser = sessionStorage.getItem("privUser");
  return (
    <div>
      <div
        className={`z-0 relative ${
          changeMode ? `bg-[#1F1D2B]` : `bg-gray-400`
        }  w-[170px] h-[230px] md:w-[280px] md:h-[280px] rounded-xl overflow-hidden flex flex-col items-center text-gray-300 text-center group`}
      >
        <div
          className={`${
            type == "BuyPage" ? "hidden" : ""
          } absolute  top-6 ml-[125px] md:ml-[220px]  lg:-right-11 md:group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 lg:opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <button
            className={`${logged ? "" : "hidden"}`}
            onClick={() => addToCart(data, data.id)}
          >
            <div className="flex justify-center items-center text-white md:w-12 md:h-12 bg-[#ec7c6a]">
              <RiAddFill className="text-3xl" />
            </div>
          </button>
          <Link to={`/detalles/${data.id}`}>
            <div className="flex justify-center items-center text-white md:w-12 md:h-12 bg-[#ec7c6a]">
              <RiEyeLine className="text-3xl" />
            </div>
          </Link>
          <button
            className={`${privUser == "Admin" ? "" : "hidden"}`}
            onClick={() => deleteProduct(data.id)}
          >
            <div className="flex justify-center items-center text-white md:w-12 md:h-12 bg-red-500">
              <RiSubtractLine className="text-3xl" />
            </div>
          </button>
        </div>

        <div>
          <img
            src={`https://back-endstore-production.up.railway.app/${imagePath}`}
            alt={data.nameImg}
            className="w-[280px] h-[140px] md:h-[200px]  shadow-2xl"
          />
        </div>
        <div>
          <p className="text-xl">{data.productName}</p>
          <span
            className={`flex text-green-400 ${
              dataDiscount.estadoDescuento == "Activated"
                ? "text-red-400"
                : "ml-7"
            }`}
          >
            ${data.price}{" "}
            <div
              className={`ml-1 flex  ${
                dataDiscount.estadoDescuento == "Activated" ? "" : "hidden"
              } text-blue-500`}
            >
              -{numberValue}%={" "}
              <p className="text-green-400 ml-1">
                ${data.price - data.price * numeroConvertido}
              </p>
            </div>
          </span>
          <p className="text-gray-600">Disponible: {data.available}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
