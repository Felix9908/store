import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [privUser, setPrivUser] = useState("Cliente");
  const {
    createUser,
    setAlertMessage,
    setShowAlert,
    setColorAlert,
    setAlertTitulo,
    changeMode,
  } = useContext(ProductContext);

  const privUser1 = sessionStorage.getItem("privUser");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user = {
      username,
      fullName,
      email,
      password,
      privUser,
    };
    if (password !== repeatPassword) {
      setShowAlert(true);
      setAlertMessage("Las contraseñas no coinciden");
      setColorAlert("bg-red-500");
      setAlertTitulo("Error");
    } else {
      try {
        createUser({ user });
        setUsername("");
        setFullName("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setPrivUser("Cliente");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className={`rounded-xl ${
          changeMode ? `bg-[#161827]` : `bg-gray-200`
        } mb-10 p-10 `}
      >
        <div className="flex items-center justify-center">
          <h6
            className={`${
              changeMode ? `text-[#ec7c6a]` : `text-blue-500`
            } text-4xl font-bold mb-5`}
          >
            Crea tu cuenta
          </h6>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Nombre de usuario
          </label>
          <input
            className={`w-full ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``} px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="fullName"
          >
            Nombre completo
          </label>
          <input
            className={`w-full ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``} px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            className={`w-full ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``}  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`w-full ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``}  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="RepeatPassword"
          >
            Repeat password
          </label>
          <input
            className={`w-full ${changeMode ?`bg-[#1F1D2B] border-[2px] border-[#ec7c6a] text-white` :``}  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            type="password"
            id="RepeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <div
          className={`${privUser1 == "Admin" ? "" : "hidden"} flex flex-row`}
        >
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="checkbox"
          >
            Admin
          </label>
          <input
            className="ml-[10px] mb-[5px]"
            type="checkbox"
            id="checkbox"
            checked={privUser === "Admin"}
            onChange={(e) => setPrivUser(e.target.checked ? "Admin" : "Client")}
          />
        </div>
        <button
          className={`w-full py-2 px-4 ${
            changeMode
              ? `bg-[#ec7c6a]  hover:bg-[#fe9e8c]`
              : `bg-blue-700 hover:bg-blue-500`
          } text-xl text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
