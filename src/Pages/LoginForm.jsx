import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, logged, changeMode } = useContext(ProductContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (logged == true) {
      navigate("/");
    }
  }, [logged]);

  const handleEmailChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userName, password });
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        className={`${
          changeMode ? `bg-[#161827]` : `bg-gray-200`
        } shadow-md rounded rounded-xl w-[350px] md:w-[400] px-8 pt-4 pb-8 mb-4`}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <h6
            className={`${
              changeMode ? `text-[#ec7c6a]` : `text-blue-500`
            } text-4xl font-bold m-4`}
          >
            Login
          </h6>
        </div>
        <div className="mb-4">
          <input
            className={`shadow ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``}  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="userName"
            type="text"
            placeholder="Nombre de usuario"
            value={userName}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <input
            className={`shadow ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``}  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-center pt-3">
          <button
            className={`${
              changeMode
                ? `bg-[#ec7c6a]  hover:bg-[#fe9e8c]`
                : `bg-blue-700 hover:bg-blue-500`
            } w-[310px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
        <div
          className={`flex flex-col items-center justify-center ${
            changeMode ? `text-[#ec7c6a]` : `text-blue-700`
          } pt-5`}
        >
          <Link
            to="/createUser"
            className={`${
              changeMode ? `hover:text-[#fe9e8c]` : `hover:text-blue-500`
            }`}
          >
            ¿No tienes Cuenta? Registrate
          </Link>
          <Link
            to="/insertEmail"
            className={`${
              changeMode ? `hover:text-[#fe9e8c]` : `hover:text-blue-500`
            }`}
          >
            ¿Perdiste tu contraseña?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
