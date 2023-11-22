import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";

function ButtonSettings({ name, type, setShowSettings, showSettings }) {
  const { changeMode } = useContext(ProductContext);
  return (
    <div>
      <button
        onClick={() => setShowSettings(type)}
        className={`relative py-2 pr-4 before:w-1/2 ${changeMode ? `hover:before:bg-[#ec7c6a] hover:text-[#ec7c6a]` :`hover:before:bg-blue-500 hover:text-blue-500`} before:h-[2px] before:absolute  before:left-0 before:rounded-full before:bottom-[-2px]  transition-all ${
          changeMode ? `${
            showSettings === type ? "text-[#ec7c6a] before:bg-[#ec7c6a]" : ""
          }` : `${
            showSettings === type ? "text-blue-500 before:bg-blue-500" : ""
          }`
        }`}
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonSettings;
