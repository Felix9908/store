import SideBar from "../components/shared/SideBar";
import ProductCarrito from "../components/shared/ProductCarrito";
import ProductList from "../components/shared/ContentProducts/ProductList";
import Carrito from "../components/shared/Carrito";
import { useContext, useState } from "react";
import MobileMenu from "../components/shared/MobileMenu";
import Header from "../components/shared/Header";
import { ProductContext } from "../Context/ProductContext";

function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOlder, setShowOlder] = useState(false);
  const { data } = useContext(ProductContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <SideBar showMenu={showMenu} />
      {/* menu Movil */}
      <MobileMenu toggleMenu={toggleMenu} showMenu={showMenu} />
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-8 md:p-8">
        <Header title="Main menu" />
          <ProductList data1={data} />
        </div>
      </main>
      <Carrito />
    </div>
  );
}

export default Home;
