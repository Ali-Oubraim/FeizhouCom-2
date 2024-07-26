import React from "react";

const PricingUxUi = () => {
  const plans = [
    { name: "Mini", price: "850", period: "1 week-1page" },
    { name: "Midi", price: "1.500", period: "3 weeks-3 pages" },
    { name: "Maxi", price: "Sur demande", period: "" },
    { name: "Full", price: "Sur demande", period: "" },
  ];

  const features = [
    "plan de site",
    "Liste des fonctionnalités avec priorité",
    "User flow",
    "Wireframes",
    "Design concept",
    "Tech stack",
    "Devis de développement",
    `Timeline et composition de l'équipe`,
    "Business Model Canva",
    "Clickable prototype",
    "Benchmarking Compétitive",
    "User personas",
    "User testing",
    "stratégie de monétisation",
    "Architecture",
    "Configuration logicielle avec spécifications",
  ];

  const featureAvailability = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, false, true, true],
    [false, false, true, true],
    [false, false, true, true],
    [false, false, false, true],
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">
        Choisissez le plan adapté à vos besoins
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Découvrez lequel de nos modèles d'engagement vous convient le mieux
      </p>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left"></th>
              {plans.map((plan) => (
                <th key={plan.name} className="p-4 text-left">
                  <div className="font-bold">{plan.name}</div>
                  <div className="text-2xl font-bold mt-2">{plan.price}</div>
                  <div className="text-sm text-gray-600">{plan.period}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center">
                  {feature}
                  <span
                    className="ml-2 text-gray-400 cursor-help"
                    title="Plus d'informations"
                  >
                    ⓘ
                  </span>
                </td>
                {featureAvailability[index].map((available, planIndex) => (
                  <td key={`${index}-${planIndex}`} className="p-4">
                    {available ? (
                      <svg
                        className="w-6 h-6 text-[#0FB9B6]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-gray-400 font-bold">_</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-8 mb-4">
        Discutons de ce à quoi devrait ressembler votre configuration.
      </p>
      <div className="text-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Planifier un appel
        </button>
      </div>
    </div>
  );
};

export default PricingUxUi;
