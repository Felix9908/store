import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotificationLine,
  RiSettings4Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

function SideBar(props) {
  const { logout, logged } = useContext(ProductContext);
  const { showMenu } = props;
  const [activeItem, setActiveItem] = useState("");
  const privUser1 = sessionStorage.getItem("privUser");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`z-20 bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              logo
            </h1>
          </li>
          <li
            className={`${
              activeItem === "home"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <Link
              to={`/`}
              className={`${
                activeItem === "home"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("home")}
            >
              <RiHome6Line
                className={`text-2xl ${
                  activeItem === "home"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </Link>
          </li>

          <li
            className={`${logged && privUser1 === "Admin" ? "" : "hidden"} ${
              activeItem === "percent"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <a
              href="#"
              className={`${
                activeItem === "percent"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("percent")}
            >
              <RiPercentLine
                className={`text-2xl ${
                  activeItem === "percent"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </a>
          </li>

          <li
            className={`${logged && privUser1 === "Admin" ? "" : "hidden"} ${
              activeItem === "pieChart"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <a
              href="#"
              className={`${
                activeItem === "pieChart"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("pieChart")}
            >
              <RiPieChartLine
                className={`text-2xl ${
                  activeItem === "pieChart"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </a>
          </li>

          <li
            className={`${logged && privUser1 !== "Admin"? "" : "hidden"} ${
              activeItem === "mail"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <Link
              to={`/mail`}
              className={`${
                activeItem === "mail"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("mail")}
            >
              <RiMailLine
                className={`text-2xl ${
                  activeItem === "mail"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </Link>
          </li>

          <li
            className={`${logged ? "" : "hidden"} ${
              activeItem === "notification"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <a
              href="#"
              className={`${
                activeItem === "notification"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("notification")}
            >
              <RiNotificationLine
                className={`text-2xl ${
                  activeItem === "notification"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </a>
          </li>

          <li
            className={`${logged && privUser1 === "Admin" ? "" : "hidden"} ${
              activeItem === "settings"
                ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl"
                : "p-4 rounded-tl-xl rounded-bl-xl group trancition-colors"
            }`}
          >
            <Link
              to={`/Settings`}
              className={`${
                activeItem === "settings"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
              onClick={() => handleItemClick("settings")}
            >
              <RiSettings4Line
                className={`text-2xl ${
                  activeItem === "settings"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <button
            className={`${
              logged ? "" : "hidden"
            } p-4 rounded-tl-xl rounded-bl-xl group trancition-colors`}
          >
            <a
              onClick={() => {
                logout();
                handleItemClick("logout");
              }}
              className={`${
                activeItem === "logout"
                  ? "bg-[#ec7c6a]"
                  : "hover:bg-[#262837] group-hover:bg-[#ec7c6a]"
              } p-4 flex justify-center rounded-xl`}
            >
              <RiLogoutBoxLine
                className={`text-2xl ${
                  activeItem === "logout"
                    ? "text-white"
                    : "text-[#ec7c6a] group-hover:text-white"
                }`}
              />
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
