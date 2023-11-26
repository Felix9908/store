import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import Car from "../components/shared/ContentProducts/Car";
import CommentBox from "../components/shared/ContentProducts/CommentBox";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function ProductDetalis() {
  const { addToCart } = useContext(CartContext);
  const { products, logged, uptateAvailable, changeMode, dataDiscount } =
    useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const privUser1 = sessionStorage.getItem("privUser");
  const [newAvailable, setNewAvailable] = useState(product.available);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  const imagePath = product.imagePath.replace(/\\/g, "/");
  const { productName, price, description } = product;

  return (
    <div className={`${changeMode ? `bg-[#262837]` : ``} w-full `}>
      <div className="flex items-center justify-center">
        <h5 className={`text-3xl ${changeMode ? `text-white` : `text-black`}`}>
          Detalles del producto
        </h5>
        <div className="hidden lg:inline">
          <Car />
        </div>
      </div>
      <section className="md:pb-12 lg:py-32 flex items-center flex-col">
        <div className="border-b border-gray-300 p-10 container mx-auto ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1  h-[250px] justify-center items-center mb-8 lg:mb-0">
              <img
                className="w-[300px] h-[240px] border border-[1px] border-[black] lg:max-w-xs"
                src={`https://back-endstore-production.up.railway.app/${imagePath}`}
                alt={productName}
              />
            </div>
            <div className="flex-1 text-center text-white lg:text-left">
              <h1
                className={`text-[26px]  font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ${
                  changeMode ? `` : `text-black`
                }`}
              >
                Nombre: {productName}
              </h1>
              <div
                className={`flex text-2xl text-green-500 ${
                  dataDiscount.estadoDescuento == "Activated"
                    ? "text-red-400"
                    : "ml-7"
                } font-medium mb-6`}
              >
                $ {price}
                <div
                  className={`ml-1 flex  ${
                    dataDiscount.estadoDescuento == "Activated" ? "" : "hidden"
                  } text-blue-400`}
                >
                  -{numberValue}%={" "}
                  <p className="text-green-400 ml-1">
                    ${price - price * numeroConvertido}
                  </p>
                </div>
              </div>
              <p className={`mb-8 ${changeMode ? `text-white` : `text-black`}`}>
                Descripción: {description}
              </p>
              <button
                onClick={() => addToCart(product, product.id)}
                className={` ${logged ? "" : "hidden"} py-2 px-4 rounded-lg ${
                  changeMode ? "bg-[#ec7c6a] text-white" : "bg-blue-500"
                }`}
              >
                Añadir al carrito
              </button>
            </div>
            {/* emelent to add products aviable to database */}
            <div
              className={`pt-5 flex flex-col items-center justify-center  ${
                logged && privUser1 == "Admin" ? "" : "hidden"
              }`}
            >
              <div
                className={`grup flex items-center ${
                  changeMode ? `bg-[#1F1D2B]` : `bg-gray-400 text-black`
                } h-[50px] w-[80px] mx-5 rounded-lg`}
              >
                <div
                  onClick={() => {
                    setNewAvailable(newAvailable - 1);
                  }}
                  className="h-full flex-1 flex justify-center items-center cursor-pointer"
                >
                  <RiSubtractLine />
                </div>
                <div>
                  <span
                    className={`${
                      changeMode ? `bg-[#1F1D2B]` : `bg-gray-400 text-white `
                    } p-3 border w-[5px] rounded-lg`}
                  >
                    {newAvailable}
                  </span>
                </div>
                <div
                  onClick={() => {
                    setNewAvailable(newAvailable + 1);
                  }}
                  className="h-full flex flex-1 justify-center items-center cursor-pointer"
                >
                  <RiAddLine />
                </div>
              </div>
              <div>
                <button
                  onClick={() =>
                    uptateAvailable({ newAvailable, id: product.id })
                  }
                  className={`${
                    changeMode ? "bg-[#1F1D2B] text-white" : "bg-gray-300"
                  } p-1 mt-1 rounded-lg ${
                    newAvailable == product.available ? "hidden" : ""
                  }`}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-full w-[360px] g:ml-20 pb-[100px] lg:pb-[50px] pt-[20px]">
          <CommentBox productId={id} />
        </div>
      </section>
    </div>
  );
}

export default ProductDetalis;
