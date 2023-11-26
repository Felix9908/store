import { ProductContext } from "../../../Context/ProductContext";
import { useContext } from "react";

function Tabs({ to, name, activeTab, setActiveTab, icon }) {
  const { setData, changeMode } = useContext(ProductContext);

  return (
    <div>
      <button
        onClick={() => {
          setData(to);
          setActiveTab(name);
        }}
        className={`${
          activeTab == name
            ? `${changeMode ? "text-red-500" : "text-blue-500"}`
            : ""
        } ${
          changeMode ? "hover:text-red-500" : "text-[#000] hover:text-blue-500"
        } flex relative py-2 pr-4 transition duration-300 ease-in-out transform  hover:scale-110`}
      >
        {icon}
        <span className="hidden md:inline">{name}</span>
      </button>
    </div>
  );
}

export default Tabs;
