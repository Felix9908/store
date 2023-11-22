import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import axios from "axios";

function InsertCode() {
  const {
    emailUser,
    setVerifiAcount,
    setShowAlert,
    setAlertMessage,
    setColorAlert,
    setAlertTitulo,
    changeMode,
  } = useContext(ProductContext);
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const getCode = async (emailUser) => {
    try {
      const response = await axios.post("http://localhost:9999/getCode", {
        emailUser,
      });
      console.log(response.data);
      if (response.data[0].code === code) {
        setShowAlert(true);
        setAlertMessage("Su cuenta ha sido verificada");
        setColorAlert("bg-green-500");
        setAlertTitulo("Exito");
        sessionStorage.setItem("dataUserLogin", response.data[0].id);
        setVerifiAcount(true);
        navigate("/newPassword");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCode(emailUser);
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className={`flex items-center flex-col ${changeMode ? `bg-gray-500` : `bg-[#161827]`} shadow-md rounded rounded-xl w-[450px] px-8 pt-4 pb-8 mb-4`}
      >
        <div>
          <h6 className="text-white">
            Le enviamos un codigo de verificacion de 6 digitos al correo{" "}
            {emailUser},<br /> a continuacion escriba la clave para verificar su
            cuenta
          </h6>
        </div>
        <input
          className="shadow appearance-none border rounded w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="trxt"
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="inserte el codigo"
          maxlength="6"
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

export default InsertCode;
