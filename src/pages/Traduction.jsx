import React from "react";
import MainSection from "../components/MainSection";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import Button from "../components/Button";
// import moduleName from '../assets/images/';
import traduction from "../assets/icons/traduction.png";
import tra1 from "../assets/images/traduction/tra1.png";
import tra2 from "../assets/images/traduction/tra2.png";
import tra3 from "../assets/images/traduction/tra3.png";

const service = {
  id: 5,
  title: "Transcription et Traduction",
  description: `Nous sommes spécialisés dans la fourniture de solutions linguistiques précises et fiables. Que ce soit pour des besoins de transcription ou de traduction, notre équipe d'experts linguistiques s'engage à délivrer des services de haute qualité en Anglais, Français et Arabe. Explorez comment notre processus rigoureux garantit des résultats exceptionnels, adaptés à vos besoins spécifiques.`,
  imageAlt: "Transcription et Traduction",
  icon: traduction,
};

const sections = [
  {
    id: 1,
    title: "Analyse et Préparation",
    description: `<strong>Évaluation des besoins :</strong> Collaborons étroitement pour comprendre vos exigences spécifiques, le contexte de vos documents et le public cible.
<br><strong>Sélection des linguistes :</strong> Choisissons les traducteurs et transcripteurs les plus adaptés à votre projet, en fonction de leur expertise linguistique et sectorielle.
<br><strong>Planification de projet :</strong> Établissons un plan détaillé, incluant les échéances et les étapes clés, pour assurer une gestion efficace et une livraison ponctuelle de vos projets.`,
    imageUrl: tra1,
    imageAlt: "Analyse et Préparation",
  },
  {
    id: 2,
    title: "Transcription et Traduction",
    description: `<strong>Transcription Précise :</strong> Nos experts transcripteurs convertissent vos fichiers audio ou vidéo en textes précis, en respectant
 les nuances linguistiques et culturelles.
<br><strong>Traduction de Qualité :</strong> Nos traducteurs certifiés travaillent avec soin pour traduire vos documents, en préservant le sens,
 le ton et le style originaux.
<br><strong>Relecture et Révision :</strong> Chaque transcription et traduction passe par un processus rigoureux de relecture et de révision pour 
garantir l'exactitude et la cohérence.`,
    imageUrl: tra2,
    imageAlt: "Transcription et Traduction",
  },
  {
    id: 3,
    title: "Livraison et Suivi",
    description: `<strong>Livraison Ponctuelle :</strong> Nous respectons les délais convenus, en vous fournissant des
 transcriptions et des traductions prêtes à l'emploi dans les formats souhaités.
<br><strong>Support Continu :</strong> Offrons un support après livraison pour répondre à vos questions, effectuer des ajustements si nécessaire, et assurer votre satisfaction complète.
<br><strong>Évolutivité et Croissance :</strong> À mesure que vos besoins évoluent, nous vous accompagnons pour adapter nos services et continuer à répondre à vos attentes.`,
    imageUrl: tra3,
    imageAlt: "Livraison et Suivi",
  },
];

function Traduction() {
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
    </>
  );
}

export default Traduction;
