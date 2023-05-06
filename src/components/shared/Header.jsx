import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../Context/SidebarContext";
import { CartContext } from "../../Context/CartContext";

function Header() {
  const { setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { setsearchItem } = useContext(CartContext);

  return (
    <div>
      <header>
        {/* Title and serch */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl text-gray-300">App name</h1>
          </div>
          
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="absolute right-0 top-14 p-2 mr-6 box-content text-gray-300 bg-[#1F1D2B] rounded-full text-xl"
          >
            <RiShoppingCart2Line />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </button>
        </div>
        {/* tabs */}
        <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
          <Link
            to={`/`}
            className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all"
          >
            Hot dishes
          </Link>
          <Link
            to={`/ColdDishes`}
            className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all"
          >
            Cold dishes
          </Link>
          <Link
            to={`/soup`}
            className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all"
          >
            Soup
          </Link>
          <Link
            to={`/Grill`}
            className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all"
          >
            Grill
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
