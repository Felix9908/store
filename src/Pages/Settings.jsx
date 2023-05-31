import React, { useState } from "react";
import Header from "../components/shared/Header";
import CreateProduct from "../components/shared/ContentProducts/CreateProduct";
import UsersList from "../components/shared/ContentProducts/UsersList";
import CreateUser from "./CreateUser";

function Settings() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState("CreateProduct");

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
    } else {
      return null;
    }
  };

  return (
    <div>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-8 md:p-8">
          <Header title="Settings" />
          <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
            <button
              onClick={() => setShowSettings("CreateProduct")}
              className={`relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all ${
                showSettings === "CreateProduct"
                  ? "text-[#ec7c6a] before:bg-[#ec7c6a]"
                  : ""
              }`}
            >
              Create product
            </button>
            <button
              onClick={() => setShowSettings("UsersList")}
              className={`relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all ${
                showSettings === "UsersList"
                  ? "text-[#ec7c6a] before:bg-[#ec7c6a]"
                  : ""
              }`}
            >
              Users list
            </button>
            <button
              onClick={() => setShowSettings("CreateUser")}
              className={`relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute hover:before:bg-[#ec7c6a] before:left-0 before:rounded-full before:bottom-[-2px] hover:text-[#ec7c6a] transition-all ${
                showSettings === "CreateUser"
                  ? "text-[#ec7c6a] before:bg-[#ec7c6a]"
                  : ""
              }`}
            >
              Create user
            </button>
          </nav>
          {renderSettingsContent()}
        </div>
      </main>
    </div>
  );
}

export default Settings;
