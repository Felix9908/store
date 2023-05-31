import { ProductContext } from "../../../Context/ProductContext";
import { useContext } from "react";

function Tabs({ to, name, activeTab, setActiveTab }) {
  const { setData } = useContext(ProductContext);
  return (
    <div>
      <button
        onClick={() => {setData(to); setActiveTab(name)} }
        className={`${
          activeTab == name? "text-[#ec7c6a] " : ""
        }relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all`}
      >
        {name}
      </button>
    </div>
  );
}

export default Tabs;
