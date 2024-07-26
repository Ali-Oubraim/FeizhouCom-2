import React from "react";
import link1 from "../assets/images/Link1.png";
import link2 from "../assets/images/Link.png";

const VideosComponent = () => {
  const portfolioItems = [
    {
      image: link1,
      title: "Application bancaire",
      link: "#",
    },
    {
      image: link2,
      title: "Application médicale",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Extrait de nos Réalisations en matière de Portfolio
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href={item.link}
                  className="text-white text-lg font-semibold flex items-center"
                >
                  Découvrir plus
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosComponent;
