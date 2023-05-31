import Home from "../Pages/Home";
import LoginForm from "../Pages/LoginForm";
import CreateUser from "../Pages/CreateUser";
import Settings from "../Pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../components/shared/SideBar";
import MobileMenu from "../components/shared/MobileMenu";
import { useState } from "react";
import ProductDetalis from "../Pages/ProductDetalis";
import ProtectedRoutes from "./ProtectedRoutes";
import ContactForm from '../Pages/ContactForm'

function Router() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <BrowserRouter>
        <SideBar showMenu={showMenu} />
        <MobileMenu toggleMenu={toggleMenu} showMenu={showMenu} />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/settings"
            element={
              <ProtectedRoutes>
                <Settings />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/detalles/:id"
            element={
              <ProtectedRoutes>
                <ProductDetalis />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/mail"
            element={
              <ProtectedRoutes>
                <ContactForm />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
