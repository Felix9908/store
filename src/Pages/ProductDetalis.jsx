import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import Car from "../components/shared/ContentProducts/Car";
import CommentBox from "../components/shared/ContentProducts/CommentBox";

function ProductDetalis() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  const imagePath = product.imagePath.replace(/\\/g, "/");
  const { productName, price, description } = product;

  return (
    <div>
      <div>
        <h5 className="text-5xl text-white ml-[260px] pt-[50px]">
          Product Detalis
        </h5>
        <Car />
      </div>
      <section className="pt-[100px] md:pt-32 pb-[400px] ml-[100px] md:pb-12 lg:py-32 h-screen flex items-center flex-col">
        <div className="border-b border-gray-300 p-10 container mx-auto ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-xs"
                src={`http://localhost:9999/${imagePath}`}
                alt={productName}
              />
            </div>
            <div className="flex-1 text-center text-white lg:text-left">
              <h1 className="text-[26px]  font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                Name: {productName}
              </h1>
              <div className="text-2xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8">Description: {description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg- py-4 px-8 bg-[#ec7c6a] text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <CommentBox productId={id} />
      </section>
    </div>
  );
}

export default ProductDetalis;
