import { useContext } from "react";
import { Link } from "react-router-dom";
import Tabs from "./ContentProducts/Tabs";
import { ProductContext } from "../../Context/ProductContext";
import Car from "./ContentProducts/Car";
import { useState } from "react";

function Header({ title }) {
  const { UtilesDelHogar, products, Perfumeria, Zapatos, Ropa, Aceo } =
    useContext(ProductContext);
  const { logged } = useContext(ProductContext);
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <header>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl mb-3 text-gray-300">App name</h1>
            <h2 className="text-2xl text-gray-300">{title}</h2>
          </div>
          <div className="flex justify-center">
            <Link
              className={`bg-[#ec7c6a] ${
                logged ? "hidden" : ""
              } text-white w-[60px] h-10 mr-[20px] p-1 pl-3 rounded-xl`}
              to={`/login`}
            >
              Login
            </Link>
            <Link
              className={`bg-[#ec7c6a] ${
                logged ? "hidden" : ""
              } text-white w-[130px] h-10 mr-[100px] p-1 pl-3 rounded-xl`}
              to={`/createUser`}
            >
              Creae Account
            </Link>
          </div>
          <Car title={title} />
        </div>
        <nav
          className={`${
            title == "Settings" ? "hidden" : ""
          } text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6`}
        >
          <Tabs
            to={products}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="Todos"
          />
          <Tabs
            to={UtilesDelHogar}
            name="Utiles del hogar"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            to={Zapatos}
            name="Calzado"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            to={Ropa}
            name="Ropa"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            to={Aceo}
            name="Aceo"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Tabs
            to={Perfumeria}
            name="Perfumería"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;
