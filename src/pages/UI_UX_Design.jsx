import React from "react";
import MainSection from "../components/MainSection";
// import moduleName from '../assets/images/';
import uiux_icon from "../assets/icons/ui-ux icon.png";
import ux from "../assets/images/ui-ux strategy.jpeg";
import ui from "../assets/images/UI Design.png";
import link1 from "../assets/images/Link1.png";
import link2 from "../assets/images/Link.png";
import Prototyping from "../assets/images/Prototyping.png";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import Button from "../components/Button";
import PricingUxUi from "../components/Ux_Ui_Pricing";
import ProjectShowcase from "../components/ProjectShowCase";


const projects = [
  {
    image: link1,
    title:
      "Découvrez comment nous avons conçu une interface intuitive UX/UI de Snatch",
    description: "Une interface bancaire moderne et facile à utiliser.",
    link: "/projects/snatch",
  },
  {
    image: link2,
    title: `Explorez notre travail sur une plateforme LMS, mettant en avant une expérience utilisateur optimisée pour l'apprentissage en ligne.`,
    description: `Une plateforme d'apprentissage en ligne intuitive et engageante.`,
    link: "/projects/lms",
  },
];

const service = {
  id: 2,
  title: "UI/UX Design",
  description:
    "Notre agence met en œuvre des interfaces utilisateur attrayantes et simples à utiliser. Les utilisateurs s'attendent désormais à une interface utilisateur agréable à utiliser. Une scène d'utilisation et un accès facile aux outils dont ils ont besoin, quand ils en ont besoin. Une utilisation intuitive de l'ergonomie, une belle typographie et une conception simple et professionnelle permettent de répondre aux objectifs commerciaux quantifiables grâce à des résultats qui captivent le client et les distinguent de la concurrence.",
  imageAlt: "UI/UX Design",
  icon: uiux_icon,
};

const sections = [
  {
    id: 1,
    title: "UX Strategy",
    description:
      "Chez l'Agence, nous commençons chaque projet par une analyse approfondie de l'expérience utilisateur (UX). Cette étape cruciale consiste à comprendre les besoins et les attentes des utilisateurs finaux. Nous réalisons des recherches utilisateur, des analyses de marché, et des tests d'usabilité pour définir des parcours utilisateurs optimisés. Grâce à ces recherches, nous identifions les points de friction et élaborons des solutions innovantes et efficaces pour améliorer l'engagement et la satisfaction des utilisateurs.",
    imageUrl: ux,
    imageAlt: "UX Strategy",
  },
  {
    id: 2,
    title: "UI Design",
    description:
      "Notre équipe de designers crée avec talent des interfaces visuellement attrayantes et cohérentes qui reflètent l'identité de votre marque. Nous nous concentrons sur l'esthétique, motion design sur demande, la couleur et la disposition pour créer des designs modernes et engageants. Chaque élément est soigneusement pensé pour offrir une expérience utilisateur harmonieuse et agréable.",
    imageUrl: ui,
    imageAlt: "UX Strategy",
  },
  {
    id: 3,
    title: "Prototyping",
    description:
      "Ce prototype vous permettant de visualiser et de tester les interactions et les flux avant le développement final, ainsi vous permet à expliquer visuellement votre idée. Nous utilisons des outils de pointe pour créer des prototypes réalistes qui imitent l'apparence et le comportement du produit final. Cette étape permet de recueillir des feedbacks précieux et d'apporter les ajustements nécessaires pour garantir que le produit final répond parfaitement aux attentes des utilisateurs.",
    imageUrl: Prototyping,
    imageAlt: "UX Strategy",
  },
];

function UI_UX_Design() {
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
            reverse={index % 2 == 1}
          />
        ))}
      </div>
      <Button />
      <PricingUxUi />
      <ProjectShowcase
        title="Extrait de nos Réalisations en UX/UI"
        subtitle="Découvrez quelques exemples d'entreprises qui ont fait appel à nos services."
        projects={projects}
      />
    </>
  );
}

export default UI_UX_Design;
