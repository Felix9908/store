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
import ContactForm from "../Pages/ContactForm";
import BuysPage from "../Pages/BuysPage";
import BuyList from "../Pages/BuyList";
import InsertEmail from "../Pages/recoverPassword/InsertEmail";
import InsertCode from "../Pages/recoverPassword/InsertCode";
import NewPassword from "../Pages/recoverPassword/NewPassword";
import ProtectedNewPassword from "./ProtectedNewPassword";

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
          <Route path="/insertEmail" element={<InsertEmail />} />
          <Route path="/insertCode" element={<InsertCode />} />
          <Route
            path="/newPassword"
            element={
              <ProtectedNewPassword>
                <NewPassword />
              </ProtectedNewPassword>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoutes>
                <Settings />
              </ProtectedRoutes>
            }
          />
          <Route path="/detalles/:id" element={<ProductDetalis />} />
          <Route
            path="/mail"
            element={
              <ProtectedRoutes>
                <ContactForm />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/buyPage"
            element={
              <ProtectedRoutes>
                <BuysPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/buyList"
            element={
              <ProtectedRoutes>
                <BuyList />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
