import React from "react";
import MainSection from "../components/MainSection";
import VideosComponent from "../components/VideosComponent";
import Pricing from "../components/Pricing";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import Button from "../components/Button";
// import moduleName from '../assets/images/';
import e_portfolio from "../assets/icons/e_portfolio.png";
import por1 from "../assets/images/e-portfolio/por1.png";
import por2 from "../assets/images/e-portfolio/por2.png";
import por3 from "../assets/images/e-portfolio/por3.png";



const service = {
  id: 4,
  title: "E-Portfolio",
  description: `Nous offrons également des services de création d'e-portfolios professionnels pour mettre en valeur vos compétences, réalisations et projets, nous nous engageons à transformer vos visions en expériences numériques exceptionnelles.`,
  imageAlt: "E-Portfolio",
  icon: e_portfolio,
};

const sections = [
  {
    id: 1,
    title: "Conception",
    description: `<strong>Exploration Créative : </strong>Collaborons étroitement pour explorer votre vision
 et comprendre vos besoins spécifiques en matière de design UX/UI.<br>
<strong>Conception de Wireframes :</strong> Créons des wireframes initiaux pour visualiser la structure et la navigation de votre interface, en mettant l'accent sur l'ergonomie et l'expérience utilisateur.<br>
<strong>Choix de Technologie :</strong> Sélectionnons les technologies appropriées et les meilleures pratiques de conception pour assurer une intégration fluide et une expérience utilisateur optimale.,`,
    imageUrl: por1,
    imageAlt: "Conception",
  },
  {
    id: 2,
    title: "Développement et Implémentation",
    description:
      "<strong>Phase de Développement:</strong> Nos experts donnent vie à votre design, en utilisant des technologies modernes et en suivant des normes de qualité rigoureuses.<br><strong>Tests Rigoureux :</strong>  Nous effectuons des tests complets pour garantir la fonctionnalité et la performance de votre interface, assurant une expérience utilisateur sans faille. Support et Déploiement : Nous vous accompagnons à chaque étape du déploiement, assurant une transition fluide vers votre nouvelle interface.",
    imageUrl: por2,
    imageAlt: "Développement et Implémentation",
  },
  {
    id: 3,
    title: "Croissance",
    description: `<strong>Mise à jour Facile :</strong> Solutions qui permettent des mises à jour faciles et rapides de votre portfolio, vous permettant de le maintenir toujours à jour.
<strong>Évolutivité :</strong> Nous vous aidons à faire évoluer votre interface pour répondre aux nouvelles exigences et aux opportunités de croissance, en assurant sa pertinence continue.`,
    imageUrl: por3,
    imageAlt: "Croissance",
  },
];

function E_Portfolio() {
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
      <VideosComponent/>
      <Pricing/>
    </>
  );
}

export default E_Portfolio;
