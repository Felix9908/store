import { useContext, useState } from "react";
import Header from "../components/shared/Header";
import CreateProduct from "../components/shared/ContentProducts/CreateProduct";
import UsersList from "../components/shared/ContentProducts/UsersList";
import CreateUser from "./CreateUser";
import ContactUsList from "../components/shared/ContentProducts/ContactUsList";
import ButtonSettings from "../components/shared/ContentProducts/ButtonSettings";
import ChangeDiscount from "../components//shared/ContentProducts/ChangeDiscount";
import { ProductContext } from "../Context/ProductContext";

function Settings() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState("CreateProduct");
  const {changeMode} = useContext(ProductContext)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderSettingsContent = () => {
    if (showSettings === "CreateProduct") {
      return <CreateProduct />;
    } else if (showSettings === "UsersList") {
      return <UsersList />;
    } else if (showSettings === "CreateUser") {
      return <CreateUser />;
    } else if (showSettings === "ContactUsList") {
      return <ContactUsList />;
    } else if(showSettings === "changeDiscount"){
      return <ChangeDiscount/>;
    }else {
      return null;
    }
  };

  return (
    <div className={`${changeMode ? "bg-[#262837]" : ""}`}>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-8 md:p-8">
          <Header title="Settings" />
          <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
            <ButtonSettings
              name="Create product"
              type="CreateProduct"
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            <ButtonSettings
              name="Users list"
              type="UsersList"
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            <ButtonSettings
              name="Create user"
              type="CreateUser"
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            <ButtonSettings
              name="Client messages"
              type="ContactUsList"
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            <ButtonSettings
              name="Activar descuento"
              type="changeDiscount"
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
          </nav>
          {renderSettingsContent()}
        </div>
      </main>
    </div>
  );
}

export default Settings;
