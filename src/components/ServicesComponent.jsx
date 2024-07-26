// ServicesComponent.jsx
import React from "react";
import NosServices from "./NosServices";

const ServicesComponent = ({serviceTitle , id}) => {
  return (
    <div className="bg-bg-hero font-Saira flex justify-center items-center text-white py-8 h-48 mb-10">
      <div className="container lg:mx-auto md:mx-auto mx-4">
        <div className="flex flex-col justify-start self-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mb-4">
            {serviceTitle}
          </h1>
          <nav className="text-gray-400 text-sm md:text-lg lg:text-xl flex gap-2 mb-4">
            <a href="#" className="text-orange-500">
              Accueil
            </a>
            &gt; <a href="#">Service Details</a>
          </nav>
        </div>
        <NosServices id={id} />
      </div>
    </div>
  );
};

export default ServicesComponent;
