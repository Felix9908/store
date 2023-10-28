import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, logged} =
    useContext(ProductContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (logged == true) {
      navigate("/");
    }
  }, [logged]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <form
        className="bg-[#161827] shadow-md rounded rounded-xl w-[400px] px-8 pt-4 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <h6 className="text-white text-4xl font-bold m-4">Login</h6>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-center pt-3">
          <button
            className="bg-blue-500 w-[310px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-blue-500 pt-5">
          <Link to="/createUser" className="hover:text-blue-700">¿No tienes Cuenta? Registrate</Link>
          <Link to="/insertEmail" className="hover:text-blue-700">¿Perdiste tu contraseña?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
