import React from "react";
import MainSection from "../components/MainSection";
// import moduleName from '../assets/images/';
import nfc from "../assets/icons/nfc.png";
import nfc1 from "../assets/images/nfc/nfc1.png";
import nfc2 from "../assets/images/nfc/nfc2.png";
import nfc3 from "../assets/images/nfc/nfc3.png";

import link1 from "../assets/images/Link1.png";
import link2 from "../assets/images/Link.png";

import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import Button from "../components/Button";
import ProjectShowcase from "../components/ProjectShowCase";

const service = {
  id: 6,
  title: "Cartes NFC ",
  description: `Chez FeizhouCom, nous révolutionnons la manière dont vous partagez vos informations de contact grâce à des cartes de visite NFC innovantes et élégantes. Nos solutions technologiques avancées permettent une transmission instantanée de vos coordonnées et informations professionnelles, offrant une expérience moderne et pratique pour vous et vos contacts. Découvrez comment notre processus méticuleux assure des cartes de visite NFC de haute qualité, parfaitement adaptées à vos besoins professionnels.`,
  imageAlt: "Cartes NFC ",
  icon: nfc,
};

const sections = [
  {
    id: 1,
    title: "Conception et Personnalisation",
    description: `<strong>Consultation Personnalisée :</strong> Collaborons pour comprendre vos besoins spécifiques, votre
 marque et vos préférences de design.
<br><strong>Design sur Mesure :</strong> Créez des designs uniques et attrayants pour vos cartes de visite NFC,
 en intégrant votre logo, vos couleurs de marque et les informations souhaitées.
<br><strong>Sélection des Matériaux :</strong> Choisissons les matériaux et finitions de haute qualité pour vos
 cartes de visite, garantissant durabilité et élégance.`,
    imageUrl: nfc1,
    imageAlt: "Conception et Personnalisation",
  },
  {
    id: 2,
    title: "Programmation et Intégration",
    description: `<strong>Encodage des Données :</strong> Nos experts programment les puces NFC avec vos informations de contact, liens vers des réseaux sociaux, sites web ou tout autre contenu numérique pertinent.
<br><strong>Tests de Fonctionnalité :</strong> Testons rigoureusement chaque carte pour garantir une transmission fluide et fiable des données lorsque les cartes sont scannées.
<br><strong>Intégration Sécurisée :</strong> Assurons que toutes les données encodées sont sécurisées et protégées contre toute modification non autorisée.`,
    imageUrl: nfc2,
    imageAlt: "Programmation et Intégration",
  },
  {
    id: 3,
    title: "Livraison et Support",
    description: `<strong>Livraison Ponctuelle :</strong> Nous respectons les délais convenus, en vous fournissant des
 transcriptions et des traductions prêtes à l'emploi dans les formats souhaités.
<br><strong>Support Continu :</strong> Offrons un support après livraison pour répondre à vos questions, effectuer des ajustements si nécessaire, et assurer votre satisfaction complète.
<br><strong>Évolutivité et Croissance :</strong> À mesure que vos besoins évoluent, nous vous accompagnons pour adapter nos services et continuer à répondre à vos attentes.`,
    imageUrl: nfc3,
    imageAlt: "Livraison et Support",
  },
];

const projects = [
  {
    image: link1,
    title: "",
    description: "",
    link: "/projects/snatch",
  },
  {
    image: link2,
    title: ``,
    description: ``,
    link: "/projects/lms",
  },
];

function NFC() {
  return (
    <>
      <ServicesComponent serviceTitle={service.title} id={service.id} />
      <MainSection
        title={service.title}
        description={service.description}
        icon={service.icon}
      />
      <div className="container mx-auto p-4">
        {sections.map((section, index) => (
          <SectionComponent
            id={section.id}
            key={section.id}
            title={section.title}
            description={section.description}
            imageUrl={section.imageUrl}
            imageAlt={section.imageAlt}
            reverse={index % 2 != 1}
          />
        ))}
      </div>
      <Button />
      <ProjectShowcase
        title="Extrair de nos Réalisations en matière d’NFC"
        subtitle="Découvrez quelques exemples d'entreprises qui ont fait appel à nos services."
        projects={projects}
      />
    </>
  );
}

export default NFC;
