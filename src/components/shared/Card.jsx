import { RiAddFill, RiSubtractLine, RiEyeLine } from "react-icons/ri";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { addToCart } = useContext(CartContext);
  const { logged, deleteProduct, dataDiscount } = useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;
  const imagePath = data.imagePath.replace(/\\/g, "/");
  const privUser = sessionStorage.getItem("privUser");
  return (
    <div>
      <div className="z-0 relative bg-[#1F1D2B] w-[280px] h-[280px] rounded-xl overflow-hidden flex flex-col items-center text-gray-300 text-center group">
        <div
          className={`absolute  top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <button
            className={`${logged ? "" : "hidden"}`}
            onClick={() => addToCart(data, data.id)}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-[#ec7c6a]">
              <RiAddFill className="text-3xl" />
            </div>
          </button>
          <Link to={`/detalles/${data.id}`}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-[#ec7c6a]">
              <RiEyeLine className="text-3xl" />
            </div>
          </Link>
          <button
            className={`${privUser == "Admin" ? "" : "hidden"}`}
            onClick={() => deleteProduct(data.id)}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <RiSubtractLine className="text-3xl" />
            </div>
          </button>
        </div>

        <div>
          <img
            src={`http://localhost:9999/${imagePath}`}
            alt={data.nameImg}
            className="w-[280px] h-[200px]  shadow-2xl"
          />
        </div>
        <div>
          <p className="text-xl">{data.productName}</p>
          <span
            className={`flex text-green-400 ${
              dataDiscount.estadoDescuento == "Activated" ? "text-red-400" : "ml-7"
            }`}
          >
            ${data.price}{" "}
            <div
              className={`ml-1 flex  ${
                dataDiscount.estadoDescuento == "Activated" ? "" : "hidden"
              } text-blue-400`}
            >
              -{numberValue}%= <p className="text-green-400 ml-1">${data.price - (data.price * numeroConvertido)}</p>
            </div>
          </span>
          <p className="text-gray-600">Disponible: {data.available}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
