import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "E-Profil",
      price: "200",
      period: "/ 2 weeks",
      features: [
        { name: "Choix parmi une variété de templates", included: true },
        { name: "Intégration de vos contenus, textes, images", included: true },
        { name: "Tech stack", included: true },
        { name: "Création de UI personnalisé", included: false },
        { name: "Design concept", included: false },
        { name: "Mise à jour facile autonome", included: false },
        { name: "gestion de domaine name", included: false },
      ],
    },
    {
      name: "E-Portfolio",
      price: "500",
      period: "/ 3 weeks",
      features: [
        { name: "Choix parmi une variété de templates", included: true },
        { name: "Intégration de vos contenus, textes, images", included: true },
        { name: "Tech stack", included: true },
        { name: "Création de UI personnalisé", included: true },
        { name: "Design concept", included: true },
        { name: "Mise à jour facile autonome", included: true },
        { name: "gestion de domaine name", included: false },
      ],
    },
    {
      name: "E-Portfolio+",
      price: "Sur demande",
      period: "",
      features: [
        { name: "Choix parmi une variété de templates", included: true },
        { name: "Intégration de vos contenus, textes, images", included: true },
        { name: "Tech stack", included: true },
        { name: "Création de UI personnalisé", included: true },
        { name: "Design concept", included: true },
        { name: "Mise à jour facile autonome", included: true },
        { name: "gestion de domaine name", included: true },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">
        Choisissez le plan adapté à vos besoins
      </h1>
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
            {plans[0].features.map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{feature.name}</td>
                {plans.map((plan) => (
                  <td key={`${plan.name}-${index}`} className="p-4">
                    {plan.features[index].included ? (
                      <svg
                        className="w-6 h-6 text-green-500"
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
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
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
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
          Planifier un appel
        </button>
      </div>
    </div>
  );
};

export default Pricing;
