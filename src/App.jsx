import SideBar from "./components/shared/SideBar";
import ProductCarrito from "./components/shared/ProductCarrito";
import ProductList from "./components/shared/ContentProducts/ProductList";
import Carrito from "./components/shared/Carrito";
import { useContext,useState } from "react";
import MobileMenu from "./components/shared/MobileMenu";
import Header from "./components/shared/Header";
import { ProductContext } from "./Context/ProductContext";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiLightbulbLine,
} from "react-icons/ri";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { loading, grill, coldDishes, hotDishes, soup } = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showOlder, setShowOlder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=" w-full min-h-screen">
      <Router>
        <SideBar showMenu={showMenu} />
        {/* menu Movil */}
        <MobileMenu toggleMenu={toggleMenu} showMenu={showMenu} />
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
          <div className="lg:col-span-8 md:p-8">
            <Header  />
            <Routes>
              <Route path="/soup" element={<ProductList data1={soup}/>} />
              <Route path="/" element={<ProductList data1={hotDishes}/>} />
              <Route path="/ColdDishes" element={<ProductList data1={coldDishes}/>} />
              <Route path="/Grill" element={<ProductList data1={grill}/>} />
            </Routes>
          </div>
        </main>
        <Carrito />
      </Router>
    </div>
  );
}

export default App;
