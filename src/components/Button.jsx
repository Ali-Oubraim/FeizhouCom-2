import React from "react";

function Button() {
  return (
    <>
      <div className="w-full flex justify-center items-center my-6">
        <a
          className="inline-block rounded w-1/3 text-center bg-black px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-gray-200"
          href="#"
        >
          Commencer Votre Project
        </a>
      </div>
    </>
  );
}

export default Button;
