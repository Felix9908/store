import React from "react";
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
  const { showMenu } = props;
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
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiHome6Line className="text-2xl text-white" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiPercentLine className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiPieChartLine className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiMailLine className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiNotificationLine className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiSettings4Line className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group trancition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl"
            >
              <RiLogoutBoxLine className="text-2xl text-[#ec7c6a] group-hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
