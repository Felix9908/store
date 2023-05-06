import {RiUser3Line, RiAddLine, RiLightbulbLine, RiCloseLine, RiMenu3Fill} from "react-icons/ri";

function MobileMenu(props) {
    const {showMenu} = props
    const {toggleMenu} = props
  return (
    <div >
      <nav className="z-10 bg-[#1F1D2B] lg:hidden fixed w-full left-0 bottom-0 text-3xl text-white py-4 px-8 flex item-center justify-between rounded-tl-xl rounded-tr-xl ">
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button className="p-2">
          <RiLightbulbLine />
        </button>

        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </div>
  );
}

export default MobileMenu;
