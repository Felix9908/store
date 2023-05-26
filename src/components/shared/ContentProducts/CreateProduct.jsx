import React, { useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../Context/ProductContext";

const CreateProduct = () => {
  const { addProduct, setAlertMessage, setShowAlert,setColorAlert  } = useContext(ProductContext);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");
  const [image, setImage] = useState(null);
  

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "productName":
        setProductName(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "type":
        setType(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "available":
        setAvailable(e.target.value);
        break;
      case "image":
        setImage(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      productName,
      description,
      type,
      price,
      available,
      image,
    };

    if (!image) {
      setAlertMessage("The photo is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else if(!productName){
      setAlertMessage("The product name is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else if (!type) {
      setAlertMessage("The type is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else if (!description) {
      setAlertMessage("The description is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else if (!price) {
      setAlertMessage("The price is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else if (!available) {
      setAlertMessage("The available is missing on the form");
      setShowAlert(true);
      setColorAlert("bg-red-500")
    } else {
      try {
        addProduct({ formData });
        setProductName("");
        setDescription("");
        setType("");
        setPrice("");
        setAvailable("");
        setImage(null);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[450px] flex-col">
      <h3 className="text-white text-5xl mb-10">Add product to page</h3>
      <form
        className="flex flex-col w-[300px]"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="productName"
          placeholder="Product name"
          className="m-[5px]"
          value={productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="m-[5px]"
          value={description}
          onChange={handleInputChange}
        />
        <select
          name="type"
          value={type}
          onChange={handleInputChange}
          className="m-[5px]"
        >
          <option value="grill">grill</option>
          <option value="coldDishes">coldDishes</option>
          <option value="hotDishes">hotDishes</option>
          <option value="soup">soup</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="m-[5px]"
          value={price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="available"
          placeholder="Available"
          className="m-[5px]"
          value={available}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          className="m-[5px]"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
