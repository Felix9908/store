import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import Car from "../components/shared/ContentProducts/Car";
import CommentBox from "../components/shared/ContentProducts/CommentBox";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function ProductDetalis() {
  const { addToCart } = useContext(CartContext);
  const { products, logged, uptateAvailable, changeMode } =
    useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const privUser1 = sessionStorage.getItem("privUser");
  const [newAvailable, setNewAvailable] = useState(product.available);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  const imagePath = product.imagePath.replace(/\\/g, "/");
  const { productName, price, description } = product;

  return (
    <div className={`${changeMode ?`bg-[#262837]`:``}`}>
      <div className="flex items-center justify-center">
        <h5
          className={`text-3xl ${
            changeMode ? `text-white` : `text-black`
          } pt-[50px]`}
        >
          Detalles del producto
        </h5>
        <div className="hidden lg:inline">
          <Car />
        </div>
      </div>
      <section className="md:pb-12 lg:py-32 h-screen flex items-center flex-col">
        <div className="border-b border-gray-300 p-10 container mx-auto ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[500px] lg:max-w-xs"
                src={`http://localhost:9999/${imagePath}`}
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
              <div className="text-2xl text-green-500 font-medium mb-6">
                $ {price}
              </div>
              <p className={`mb-8 ${changeMode ? `text-white` : `text-black`}`}>
                Descripción: {description}
              </p>
              <button
                onClick={() => addToCart(product, product.id)}
                className={` ${
                  logged ? "" : "hidden"
                } bg- py-2 px-4 rounded-lg bg-[#ec7c6a] text-white`}
              >
                Añadir al carrito
              </button>
            </div>
            {/* emelent to add products aviable to database */}
            <div
              className={`flex flex-col items-center justify-center  ${
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
                      changeMode ? `bg-[#1F1D2B]` : `bg-gray-400 text-black`
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
                  className={`bg-[#1F1D2B] p-1 mt-1 rounded-lg ${
                    newAvailable == product.available ? "hidden" : ""
                  }`}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
        <CommentBox productId={id} />
      </section>
    </div>
  );
}

export default ProductDetalis;
