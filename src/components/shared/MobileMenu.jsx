import {
  RiUser3Line,
  RiCloseLine,
  RiMenu3Fill,
  RiStore2Line,
} from "react-icons/ri";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Car from "../../components/shared/ContentProducts/Car";
import { Link } from "react-router-dom";
var menuMovile = "menuMovile";

function MobileMenu(props) {
  const { showMenu } = props;
  const { toggleMenu } = props;
  const { logged } = useContext(ProductContext);
  return (
    <div className={`${logged ? "" : "hidden"}`}>
      <nav className="z-10 bg-[#1F1D2B] lg:hidden fixed w-full left-0 bottom-0 text-3xl text-white py-4 px-8 flex item-center justify-between rounded-tl-xl rounded-tr-xl ">
        {/* <button className="p-2">
          <RiUser3Line />
        </button> */}

        <button className="p-2  mb-[30px]">
          <Car type={menuMovile} />
        </button>

        <Link to={"/"} className="p-2 ml-5">
          <RiStore2Line />
        </Link>

        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;
