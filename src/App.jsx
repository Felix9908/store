import SideBar from "./components/shared/SideBar";
import ProductCarrito from "./components/shared/ProductCarrito";
import Soup from "./components/shared/ContentProducts/Soup";
import HotDishes from "./components/shared/ContentProducts/HotDishes";
import ColdDishes from "./components/shared/ContentProducts/ColdDishes";
import Grill from "./components/shared/ContentProducts/Grill";
import Carrito from "./components/shared/Carrito";

import MobileMenu from "./components/shared/MobileMenu";
import Header from "./components/shared/Header";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiLightbulbLine,
} from "react-icons/ri";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
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
              <Route path="/soup" element={<Soup/>} />
              <Route path="/" element={<HotDishes />} />
              <Route path="/ColdDishes" element={<ColdDishes />} />
              <Route path="/Grill" element={<Grill />} />
            </Routes>
          </div>
        </main>
        <Carrito />
      </Router>
    </div>
  );
}

export default App;
