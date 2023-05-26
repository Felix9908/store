  import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri";
  import { useContext } from "react";
  import { Link } from "react-router-dom";
  import { SidebarContext } from "../../Context/SidebarContext";
  import { CartContext } from "../../Context/CartContext";
  import Tabs from "./ContentProducts/Tabs";
  import { ProductContext } from "../../Context/ProductContext";

  function Header({ title }) {
    const { grill, coldDishes, hotDishes, soup, setData, products } =
      useContext(ProductContext);
    const { setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    const { logged } = useContext(ProductContext);

    return (
      <div>
        <header>
          {/* Title and serch */}
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
                to={`createUser`}
              >
                Creae Account
              </Link>
            </div>

            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className={`absolute ${
                logged && title !== "Settings" ? "" : "hidden"
              } right-0 top-14 p-2 mr-6 box-content text-gray-300 bg-[#1F1D2B] rounded-full text-xl`}
            >
              <RiShoppingCart2Line />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </button>
          </div>
          {/* tabs */}
          <nav
            className={`${
              title == "Settings" ? "hidden" : ""
            } text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6`}
          >
            <Tabs to={products} name="All dishes" />
            <Tabs to={hotDishes} name="Hot dishes" />
            <Tabs to={coldDishes} name="Cold dishes" />
            <Tabs to={soup} name="Soup" />
            <Tabs to={grill} name="Grill" />
          </nav>
        </header>
      </div>
    );
  }

  export default Header;
