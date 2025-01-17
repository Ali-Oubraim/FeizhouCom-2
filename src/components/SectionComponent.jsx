import React from "react";

const SectionComponent = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt,
  reverse,
}) => (
  <div
    className={`flex font-Saira flex-col-reverse${
      reverse ? " md:flex-row-reverse " : " md:flex-row "
    } items-center my-8`}
  >
    <div className="md:w-1/2 p-4">
      <div className="items-center justify-start gap-2 hidden md:flex">
        <h1 className="text-[3rem] font-bold pb-4 text-[#0FB9B6]">0{id}</h1>
        <h2
          className={`text-2xl text-gray-700 font-normal mb-4 uppercase border-b-2 border-b-[#0FB9B6] w-fit px-1`}
        >
          {title}
        </h2>
      </div>
      <p
        className="lg:text-xl text-sm font-extralight text-gray-800"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
    <div className="md:w-1/2 p-6">
      <img src={imageUrl} alt={imageAlt} className="w-full rounded-lg" />
    </div>
    <div className="w-full items-center justify-start px-5 gap-2 flex md:hidden">
      <h1 className="text-3xl text-[#0FB9B6] font-bold pb-4">0{id}</h1>
      <h2
        className={`text-xl text-gray-700 uppercase border-b-2 border-b-[#0FB9B6] font-bold mb-4`}
      >
        {title}
      </h2>
    </div>
  </div>
);

export default SectionComponent;
