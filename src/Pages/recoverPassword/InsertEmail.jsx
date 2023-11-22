import React, { useContext, useState } from "react";
import axios from "axios";

import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";

function InsertEmail() {
  const {
    setShowAlert,
    setAlertMessage,
    setColorAlert,
    setEmailUser,
    setAlertTitulo,
    changeMode,
  } = useContext(ProductContext);
  const navigate = useNavigate();
  const [emailRP, setEmailRP] = useState("");

  const sendEmail = async (email) => {
    try {
      const response = await axios.post("http://localhost:9999/sendEmail", {
        email,
      });
      if (response.status === 200) {
        setShowAlert(true);
        setAlertMessage(response.data);
        setColorAlert("bg-green-500");
        setAlertTitulo("Exito");
        navigate("/insertCode");
        setEmailUser(email);
      }
    } catch (err) {
      setShowAlert(true);
      setAlertMessage(err.response.data);
      setColorAlert("bg-red-500");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(emailRP);
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        className={`flex items-center flex-col ${
          changeMode ? `bg-gray-500` : `bg-[#161827]`
        } shadow-md rounded rounded-xl w-[450px] px-8 pt-4 pb-8 mb-4`}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <h6 className="text-white text-4xl font-bold m-4">
            Recuperar contraseña
          </h6>
        </div>
        <input
          type="email"
          placeholder="inserte su correo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setEmailRP(e.target.value);
          }}
        />
        <div className="flex items-center justify-center pt-3">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default InsertEmail;
