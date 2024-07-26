import React from "react";
import contactNous from "../assets/images/contactez-nous.jpeg";

function MainSection({ title, description, icon, img }) {
  return (
    <div className="flex font-Saira flex-col-reverse justify-center border-b-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row items-center mt-48 mx-6">
      <div className="md:w-1/2 p-4">
        <div className="hidden justify-start items-center gap-4 text-3xl md:flex">
          <figure className="">
            <img src={icon} alt="" />
          </figure>
          <h2 className={`text-[2rem] text-[#0FB9B6] font-bold mb-4`}>
            {title}
          </h2>
        </div>
        <p className="lg:text-xl text-gray-700 text-pretty px-8 py-4 capitalize font-normal">
          {description}
        </p>
      </div>
      <div className="md:w-1/3 p-6">
        <img
          src={img ? img : contactNous}
          alt={contactNous}
          className="w-full rounded-lg"
        />
      </div>
      <div className="md:hidden justify-start items-center gap-4 text-3xl flex">
        <figure className="">
          <img src={icon} alt="" />
        </figure>
        <h2 className={`text-[2rem] text-[#0FB9B6] font-bold mb-4`}>{title}</h2>
      </div>
    </div>
  );
}

export default MainSection;
