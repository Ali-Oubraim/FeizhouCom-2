import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Développement du site web",
    href: "/site-web-eco",
  },
  {
    id: 2,
    title: "UI/UX Design",
    href: "/ui-ux-design",
  },
  {
    id: 3,
    title: "Création d’Applications Mobiles",
    href: "/mobile-app",
  },
  {
    id: 4,
    title: "E-Portfolios",
    href: "/e-portfolio",
  },
  {
    id: 5,
    title: "Service de traduction",
    href: "/traduction",
  },
  {
    id: 6,
    title: "Cartes NFC",
    href: "/nfc",
  },
  {
    id: 7,
    title: "Communication Institutionnelle",
    href: "/communication",
  },
];
function NosServices({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className="absolute font-Saira right-6 top-[15%] shadow-lg bg-white text-black rounded-lg p-4 w-64">
    //   <h2 className="text-sm font-bold text-gray-900 border-b-2 border-b-gray-200 py-2 px-1 w-fit mb-2">
    //     NOS SERVICES
    //   </h2>
    //   <ul className="font-semibold text-gray-700">
    //     {services.map((service, index) => (
    //       <li
    //         key={index}
    //         className={`group flex justify-between items-center mb-1 ${
    //           service.id == id ? "text-orange-600" : ""
    //         }`}
    //       >
    //         <Link
    //           to={service.href}
    //           className="group-hover:text-orange-600 group-hover:underline text-xs"
    //         >
    //           {service.title}
    //         </Link>
    //         <span className="group-hover:text-orange-600">&rarr;</span>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="absolute font-Saira top-[27%] w-[90%] lg:right-6 lg:top-[15%] shadow-lg bg-white text-black rounded-lg p-4 sm:w-48 md:w-64 lg:w-80">
      <div className="flex lg:flex-row flex-row-reverse justify-between gap-10 lg:justify-between md:justify-between items-center mb-2 ">
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-900 p-2 text-end"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h2 className="text-sm font-bold text-gray-900 border-b-2 border-b-gray-200 py-2 px-1 w-fit sm:block">
          NOS SERVICES
        </h2>
      </div>
      <ul
        className={`font-semibold text-gray-700 ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        {services.map((service, index) => (
          <li
            key={index}
            className={`group flex justify-between items-center mb-1 ${
              service.id == id ? "text-orange-600" : ""
            }`}
          >
            <Link
              to={service.href}
              className="group-hover:text-orange-600 group-hover:underline text-xs"
            >
              {service.title}
            </Link>
            <span className="group-hover:text-orange-600">&rarr;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NosServices;
