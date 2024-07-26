import React from "react";
import MainSection from "../components/MainSection";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
// import moduleName from '../assets/images/';
import site_web_eco from "../assets/icons/site_web_eco.png";
import eco_icon from "../assets/icons/eco icon.png";
import man_2 from "../assets/images/site web eco/man_2.png";
import man_1 from "../assets/images/site web eco/man_1.png";
import man_3 from "../assets/images/site web eco/man_3.png";
import eco_2 from "../assets/images/site web eco/eco_2.png";
import eco_1 from "../assets/images/site web eco/eco_1.png";
import eco_3 from "../assets/images/site web eco/eco_3.png";
import Button from "../components/Button";

const service = {
  id: 1,
  title: "Processus de site web",
  description:
    "Création de sites web institutionnels en utilisant les dernières technologie pour une présence en ligne professionnelle et sur mesure. Depuis la phase d’idée jusqu’au déploiement, nous utilisons des technologies et des méthodologies de pointe pour élaborer des solutions logicielles sur mesure qui correspondent à vos objectifs de marque. En exploitant des langages tels que Java, JavaScript et python et des Frameworks avancées et des bibliothèques modernes, nous créons des site web robustes. Notre équipe de développeurs expérimentés assure une intégration transparente des bases de données, des API et des interfaces utilisateur, garantissant ainsi une expérience utilisateur optimisée. Nous ² engageons à fournir des logiciels conformes aux best practices, garantissant ainsi à votre entreprise de rester à jour sur le monde digital.",
  imageAlt: "Processus de site web",
  icon: site_web_eco,
};
const serviceEco = {
  id: 1,
  title: "Site web ecologique",
  description:
    "Vous croyez en la préservation de l'environnement et en la construction d'un avenir durable. En offrant en option des sites web écologiques, votre entreprise démontre son engagement envers la protection de la planète. Vous vous efforcez d'intégrer des pratiques respectueuses de l'environnement dans toutes vos activités.",
  imageAlt: "Site web ecologique",
  icon: eco_icon,
};

const sectionsEco = [
  {
    id: 1,
    title: "Développement et mise en œuvre",
    description: `<strong>Conception Energitique Efficace :</strong> Nos sites sont conçus pour être légers et optimisés, ce qui réduit le temps
de chargement et la consommation d'énergie. Nous utilisons des techniques avancées pour optimiser les images,
 minimiser le code et garantir une performance optimale.
<br><strong>Contenu et Design Responsables :</strong> Nous privilégions des designs épurés et des contenus pertinents, réduisant 
ainsi la quantité de données à charger et améliorant l'expérience utilisateur tout en étant plus respectueux de
 l'environnement.
<br><strong>Hébergement Vert :</strong> Nous collaborons avec des fournisseurs d'hébergement utilisant des énergies renouvelables
 pour garantir que votre site web minimise son empreinte carbone.
`,
    imageUrl: eco_2,
    imageAlt: "Développement et mise en œuvre",
  },
  {
    id: 2,
    title: "Maintenance et support",
    description: `<strong>Support Maintenance Ecologique :</strong> Notre service de maintenance assure non seulement le bon fonctionnement de votre site,
 mais veille également à ce qu'il reste éco-responsable avec des mises à jour régulières et des optimisations 
continues.
<br><strong>Conseil et Audit Ecologique :</strong> Nous offrons des services de conseil pour vous aider à rendre votre site web 
existant plus écologique. Nos audits détaillés identifient les domaines où des améliorations peuvent être
 apportées pour réduire l'impact environnemental.`,
    imageUrl: eco_3,
    imageAlt: "Maintenance et support",
  },
];

const sections = [
  {
    id: 1,
    title: "Stratégie, étude et analyse ",
    description:
      "<strong>Analyse : </strong>approfondie des sites web existants pour évaluer leur visibilité sur les moteurs de recherche, et pour vérifier s'ils respectent les normes et les bonnes pratiques en matière de référencement.<br><strong>Collecte des besoins :</strong> nous travaillons en étroite collaboration avec vous pour comprendre vos besoins, objectifs et contraintes spécifiques. Cette phase implique des discussions approfondies et la documentation des exigences du projet.<br><strong>Étude de faisabilité :</strong> nous réalisons une étude de faisabilité pour évaluer la faisabilité du projet, en tenant compte des aspects techniques, financiers et opérationnels.<br><strong>Planification du projet :</strong> notre équipe crée un plan de projet détaillé décrivant les échéanciers, l'allocation des ressources et les livrables. Nous définissons la portée du projet et identifions les risques potentiels.",
    imageUrl: man_1,
    imageAlt: "Stratégie, étude et analyse ",
  },
  {
    id: 2,
    title: "Développement et mise en œuvre",
    description: ` 
<strong>Conception : </strong> nos concepteurs expérimentés développent l’UX et créent un plan de l'interface utilisateur (UI).
Nous nous concentrons sur la convivialité, l’ergonomie et la performance.
<br><strong>Codage :</strong> Nos développeurs donnent vie à la conception en écrivant un code propre, efficace et maintenable. 
Nous suivons les meilleures pratiques et les normes de codage.
<br><strong>Tests :</strong> Nous effectuons des tests rigoureux, notamment des tests unitaires, des tests d'intégration et des tests 
d'acceptation des utilisateurs, pour garantir le fonctionnement parfait du site web.
<br><strong>Déploiement :</strong> Une fois que le logiciel a réussi tous les tests, nous le déployons sur votre serveur soit sur un 
serveur adapté à vos besoins. Nous fournissons un Benshmarking des serveurs et un accompagnement 
pendant la phase de déploiement pour assurer une transition en douceur.
`,
    imageUrl: man_2,
    imageAlt: "Développement et mise en œuvre",
  },
  {
    id: 3,
    title: "Maintenance et support",
    description: `<strong>Support post-déploiement : </strong> notre engagement ne s'arrête pas avec le déploiement. Nous
proposons des services de maintenance et de support continus pour résoudre les problèmes,
publier des mises à jour et améliorer les fonctionnalités du site web.
<br><strong>Optimisation et Sécurité : </strong> nous surveillons en permanence la performance du site web et
 effectuons des optimisations pour améliorer l'efficacité, la sécurité et l'expérience utilisateur.
<br><strong>Evolutivité :</strong> Nous vous aidons à faire évoluer le site web, gérer ses flux pour répondre aux 
demandes croissantes.`,
    imageUrl: man_3,
    imageAlt: "Maintenance et support",
  },
];

function Site_Web_Eco() {
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
      <Button/>
      <MainSection
        title={serviceEco.title}
        description={serviceEco.description}
        icon={serviceEco.icon}
        img={eco_1}
      />
      <div className="container mx-auto p-4">
        {sectionsEco.map((section, index) => (
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
    </>
  );
}

export default Site_Web_Eco;
