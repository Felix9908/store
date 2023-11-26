import { useContext } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Tabs from "./ContentProducts/Tabs";
import { ProductContext } from "../../Context/ProductContext";
import Car from "./ContentProducts/Car";
import { useState } from "react";
import IcoAll from "../../assets/IcoAll";
import IcoAseo from "../../assets/IcoAseo";
import IcoPerfume from "../../assets/IcoPerfume";
import IcoRopa from "../../assets/IcoRopa";
import IcoUtiles from "../../assets/IcoUtiles";
import IcoCalzado from "../../assets/IcoCalzado";

function Header({ title }) {
  const {
    UtilesDelHogar,
    products,
    Perfumeria,
    Zapatos,
    Ropa,
    Aceo,
    setchangeMode,
    changeMode,
    logged,
    changeModeApp,
  } = useContext(ProductContext);
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <header>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex items-center ">
            <div className={`${changeMode ? "text-[#ec7c6a]" : "text-[#000]"}`}>
              <h1 className="text-4xl mb-3">TiendaEnCasa</h1>
              <h2 className="text-2xl ">{title}</h2>
            </div>
            {/* modo oscuro y claro */}
            <div className={`${logged ? "" : "hidden"} ml-10`}>
              <button
                onClick={async() => {
                 await setchangeMode(!changeMode);
                 changeModeApp();
                }}
                className={`flex rounded-3xl w-20 ${
                  changeMode ? "bg-[#ec7c6a]" : "bg-gray-200"
                } p-1`}
              >
                <div
                  className={`transition-all bg-gray-500 p-1 rounded-full right-full ${
                    changeMode ? "ml-[40px]" : ""
                  }`}
                >
                  {changeMode ? (
                    <RiMoonLine className="text-2xl" />
                  ) : (
                    <RiSunLine className="text-2xl text-white" />
                  )}
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              className={`${
                changeMode
                  ? "border-orange-500 text-orange-500"
                  : "border-blue-500 text-blue-500 "
              } text-2xl ${
                logged ? "hidden" : ""
              } border-[3px]  p-1 mr-2 rounded-xl`}
              to={`/login`}
            >
              Entrar
            </Link>
            <Link
              className={`${
                changeMode
                  ? "border-orange-500 text-orange-500"
                  : "border-blue-500 text-blue-500 "
              } text-2xl ${
                logged ? "hidden" : ""
              } text-center border-[3px]  p-1 rounded-xl`}
              to={`/createUser`}
            >
              Crear cuenta
            </Link>
          </div>

          <div className="hidden lg:inline">
            <Car title={title} />
          </div>
        </div>
        <nav
          className={`${
            title == "Settings" ? "hidden" : ""
          } text-gray-300 grid grid-cols-6  items-center justify-between md:justify-start md:gap-8 border-b ${
            changeMode ? "" : "border-[#000]"
          } mb-6`}
        >
          <Tabs
            to={products}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Todos"
            icon={<IcoAll />}
          />
          <Tabs
            to={UtilesDelHogar}
            name="Utiles del hogar"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<IcoUtiles />}
          />
          <Tabs
            to={Zapatos}
            name="Calzado"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<IcoCalzado />}
          />
          <Tabs
            to={Ropa}
            name="Ropa"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<IcoRopa />}
          />
          <Tabs
            to={Aceo}
            name="Aseo"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<IcoAseo />}
          />
          <Tabs
            to={Perfumeria}
            name="Perfumería"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<IcoPerfume />}
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;
