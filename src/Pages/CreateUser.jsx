import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [privUser, setPrivUser] = useState("Client");
  const { createUser, setAlertMessage, setShowAlert, setColorAlert } =
    useContext(ProductContext);

  const privUser1 = sessionStorage.getItem("privUser");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user = {
      username,
      fullName,
      email,
      phoneNumber,
      address,
      password,
      privUser,
    };
    if (password !== repeatPassword) {
      setShowAlert(true);
      setAlertMessage("incorrect password");
      setColorAlert("bg-red-500");
    } else {
      try {
        console.log({ user });
        createUser({ user });
        setUsername("");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setPassword("");
        setRepeatPassword("");
        setPrivUser("Client");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 bg-[#161827] p-10 "
    >
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor="username"
        >
          Nombre de usuario
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          htmlFor="phoneNumber"
        >
          Número de teléfono
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor="address"
        >
          Dirección particular
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="password"
          id="RepeatPassword"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
      </div>
      <div className={`${privUser1 == 'Admin' ? "" : "hidden" } flex flex-row`}>
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
        className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="submit"
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default CreateUser;
