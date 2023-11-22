import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const {
    setShowAlert,
    setAlertMessage,
    setColorAlert,
    setAlertTitulo,
    changeMode,
  } = useContext(ProductContext);
  const navigate = useNavigate();
  const resetPassword = async ({ password, id }) => {
    try {
      const response = await axios.post("http://localhost:9999/resetPassword", {
        password,
        id,
      });
      if (response.status == 200) {
        setShowAlert(true);
        setAlertMessage(response.data);
        setColorAlert("bg-green-500");
        setAlertTitulo("Exito");
        sessionStorage.removeItem("dataUserLogin");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = sessionStorage.getItem("dataUserLogin");
    if (password === repeatPassword) {
      resetPassword({ password, id });
    } else {
      setShowAlert(true);
      setAlertMessage("Las contraseñas no coinciden");
      setColorAlert("bg-red-500");
    }
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className={` flex items-center flex-col ${
          changeMode ? `bg-gray-500` : `bg-[#161827]`
        }  shadow-md rounded rounded-xl w-[450px] px-8 pt-4 pb-8 mb-4`}
      >
        <div className="flex items-center justify-center">
          <h6 className="text-white text-4xl font-bold m-4">
            Contraseña nueva
          </h6>
        </div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="nueva contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 m-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Repita su contraseña"
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
        />
        <div className="flex items-center justify-center pt-3">
          <button
            className="bg-blue-500 w-[310px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPassword;
