import axios from "axios";
import { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    setAlertMessage,
    setShowAlert,
    setColorAlert,
    setAlertTitulo,
    changeMode,
  } = useContext(ProductContext);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setShowAlert(true);
      setAlertMessage("Tienes que poner tu nombre.");
      setColorAlert("bg-green-500");
      setAlertTitulo("Exito");
    } else if (!email) {
      setShowAlert(true);
      setAlertMessage("Es necesario tener su email.");
      setColorAlert("bg-green-500");
      setAlertTitulo("Exito");
    } else if (!message) {
      setShowAlert(true);
      setAlertMessage("Tiene que añadir un comentario.");
      setColorAlert("bg-green-500");
      setAlertTitulo("Exito");
    } else {
      const data = {
        name,
        email,
        message,
      };
      try {
        await axios
          .post("https://back-endstore-production.up.railway.app/contactUs", data)
          .then((res) => {
            if (res.status === 200) {
              setShowAlert(true);
              setAlertMessage(
                res.data +
                  "Le daremos respuesta por correo electronico lo antes posible"
              );
              setColorAlert("bg-green-500");
              setAlertTitulo("Exito")
              navigate("/")
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto p-10">
      <h2
        className={`text-2xl font-bold mb-4 ${
          changeMode ? "text-white" : "text-black"
        }`}
      >
        Contact Us
      </h2>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`block mb-2 font-medium ${
              changeMode ? "text-white" : "text-black"
            }`}
          >
            Nombre del Cliente
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`shadow ${
              changeMode
                ? `bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white`
                : ``
            }  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block mb-2 font-medium ${
              changeMode ? "text-white" : "text-black"
            }`}
          >
            Correo
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow ${
              changeMode
                ? `bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white`
                : ``
            }  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className={`block mb-2 font-medium ${
              changeMode ? "text-white" : "text-black"
            }`}
          >
            Mensaje
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`shadow ${
              changeMode
                ? `bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white`
                : ``
            }  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${
            changeMode
              ? `bg-[#ec7c6a]  hover:bg-[#fe9e8c]`
              : `bg-blue-700 hover:bg-blue-500`
          } w-[150px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
