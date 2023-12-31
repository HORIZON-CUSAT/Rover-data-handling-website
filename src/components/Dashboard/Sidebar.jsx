import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const sidebarOptions = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Mapping",
      href: "/mapping",
    },
    {
      title: "ROS Topic",
      href: "/ros",
    },
  ];

  return (
    <div className="fixed z-10 w-64 bg-gray-950 h-screen bg-opacity-50 shadow-md rounded-r-2xl border-r border-gray-800">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl text-white font-semibold ml-2 mt-4">
            Horizon Cusat
          </h2>
          <button className="text-white p-2 rounded-md">
            <i className="mdi mdi-close"></i>
          </button>
        </div>
        <ul className="mt-10">
          {sidebarOptions.map((option, index) => (
            <li
              key={option.title}
              className={`${
                location.pathname === option.href ? "bg-gray-900" : "bg-gray-950  bg-opacity-30"
              } p-5 border-b-2 border-black`}
            >
              <NavLink
                to={option.href}
                className="text-white hover:text-gray-500 transition-colors duration-300"
              >
                {option.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
