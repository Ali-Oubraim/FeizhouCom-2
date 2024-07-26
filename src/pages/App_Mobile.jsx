import React from "react";
import MainSection from "../components/MainSection";
// import moduleName from '../assets/images/';
import mb1 from "../assets/images/app mobile/mb1.png";
import mb2 from "../assets/images/app mobile/mb2.png";
import mb3 from "../assets/images/app mobile/mb3.png";

import app_mobile from "../assets/icons/app_mobile.png";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import Button from "../components/Button";

const service = {
  id: 3,
  title: "Mobile App Development Services",
  description: `Notre équipe de développement commence en créant des fonctionnalités à forte valeur ajoutée pour valider
 l'idée et recueillir des commentaires. Chaque livrable est minutieusement testé pour s'assurer que tout fonctionne comme prévu. Notre processus s'étend de la conceptualisation au déploiement, en utilisant des technologies et des méthodologies de pointe pour créer des solutions mobiles personnalisées qui s'alignent parfaitement sur vos objectifs institutionnels. Notre équipe utilise des bibliothèques partagées internes et des modules communs réutilisables tels que l'authentification, les chats, les analyses, etc. pour accélérer le développement. Nous disposons également d'une architecture préparée pour différents types de projets, exploitons les services cloud pour réduire le temps de configuration et de gestion de l'infrastructure et nous nous appuyons sur des intégrations SDK tierces matures.`,
  imageAlt: "Mobile App Development Services",
  icon: app_mobile,
};

const sections = [
  {
    id: 1,
    title: "Planning and Design",
    description: `Notre équipe est composée d’ingénieur qui travaillent de manière autonome à la création
 de votre produit numérique et s’occupe de choisir la bonne pile technologique, y compris
 les plateformes (iOS, Android). Nous nous tenons au courant des dernières tendances
 en matière de conception, de la dynamique du marché et des principales réglementations 
du secteur.`,
    imageUrl: mb1,
    imageAlt: "Planning and Design",
  },
  {
    id: 2,
    title: "App Development and Testing",
    description: `<strong>Phase de développement :</strong> Phase de développement : Nos développeurs qualifiés donnent vie à l'application, écrivent un code efficace et propre tout en suivant les meilleures pratiques du secteur.
<br><strong>Test approfondis :</strong> Tests approfondis : Testez rigoureusement l'application, y compris les tests unitaires, les tests d'intégration et les tests d'acceptation des utilisateurs, pour garantir son bon fonctionnement.
<br><strong>Support de déploiement :</strong> Une fois que l'application a réussi tous les tests, nous vous aidons à la déployer sur les plateformes souhaitées, en fournissant un support pendant la transition.`,
    imageUrl: mb2,
    imageAlt: "App Development and Testing",
  },
  {
    id: 3,
    title: "Maintenance and Growth",
    description: `<strong>Continuous Support :</strong> Our commitment extends beyond deployment. We offer ongoing maintenance and support to address issues, release updates, and enhance app functionality.
<br><strong>Performance Optimization :</strong> Continuously monitor the app's performance, making optimizations for improved efficiency and a better user experience.
<br><strong>Scalability :</strong> As your business expands, we help you scale the app to meet increased
demands, ensuring it remains a valuable asset.`,
    imageUrl: mb3,
    imageAlt: "Maintenance and Growth",
  },
];

function App_Mobile() {
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
    </>
  );
}

export default App_Mobile;
