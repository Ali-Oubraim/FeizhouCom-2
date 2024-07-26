import React from "react";
import MainSection from "../components/MainSection";
import SectionComponent from "../components/SectionComponent";
import ServicesComponent from "../components/ServicesComponent";
import communication from "../assets/icons/communication.png";
import img_1 from "../assets/images/communication/img-1.png";
import img_2 from "../assets/images/communication/img-2.png";
import img_3 from "../assets/images/communication/img-3.png";
import img_4 from "../assets/images/communication/img-4.png";
import img_5 from "../assets/images/communication/img-5.png";
import img_6 from "../assets/images/communication/img-6.png";
import Button from "../components/Button";




const service = {
  id: 7,
  title: "Communicationa Institutionnelle",
  description:
    "Dans un monde économique et social en perpétuelle évolution, la communication institutionnelle joue un rôle majeur dans le développement et la pérennité des organisations. Que ce soit pour renforcer son image de marque, asseoir sa crédibilité ou encore engager efficacement avec ses parties prenantes. Notre équipe d'experts en communication d'entreprise vous accompagne dans l'élaboration et la mise en œuvre de stratégies de communication internes et externes qui reflètent vos valeurs et renforcent votre image de marque. Découvrez comment notre approche méthodique et personnalisée peut transformer votre communication d'entreprise.",
  imageAlt: "Communicationa Institutionnelle",
  icon: communication,
};

const sections = [
  {
    id: 1,
    title: "Community Management Institutionnelle",
    description:
      "Nous améliorons la visibilité de votre institution sur le web grâce à des techniques avancées de référencement SEO. En optimisant vos contenus pour les moteurs de recherche, nous augmentons votre visibilité et attirons un public ciblé. Gestion Complète de la Présence en Ligne de la création de contenu à la modération des interactions, nous offrons une gestion complète de votre présence en ligne. Notre expertise garantit une image professionnelle et cohérente, adaptée aux besoins spécifiques de votre institution.",
    imageUrl: img_1,
    imageAlt: "Community Management Institutionnelle",
  },
  {
    id: 2,
    title: "Services de Relations Publiques (Presse)",
    description:
      "Expertise approfondie du paysage médiatique Marocain, assurant une stratégie de communication adaptée et efficace. Rédaction et diffusion de communiqués de presse percutants pour mettre en avant vos actualités et événements importants. Préparation de dossiers de presse complets pour fournir aux médias des informations détaillées sur vos activités et vos réalisations. Mise en place de rencontres avec des journalistes pour favoriser une couverture édiatique positive.",
    imageUrl: img_2,
    imageAlt: "Services de Relations Publiques (Presse)",
  },
  {
    id: 3,
    title: "Assistance complète en Mécénat et Sponsoring",
    description:
      "Proposition de stratégies de mécénat et de sponsoring efficaces pour maximiser l'impact institutionnel. Accompagnement dès la conception jusqu'au suivi après l'événement. Garantie de qualité et de confidentialité pour répondre aux exigences professionnelles les plus élevées.",
    imageUrl: img_3,
    imageAlt: "Assistance complète en Mécénat et Sponsoring",
  },
  {
    id: 4,
    title: "Communication Interne et Engagement des Employés ",
    description:
      "Élaboration d'une stratégie de communication interne personnalisée pour renforcer la cohésion et l'engagement au sein de votre entreprise. Motivation et mobilisation des employés grâce à des initiatives de communication efficaces et adaptées à votre culture d'entreprise. Création d'intranet sur mesure pour faciliter la collaboration et le partage d'informations au sein de votre équipe. Formations personnalisées dispensées par nos experts en communication interne pour renforcer les compétences de votre équipe dans ce domaine. Organisation de séances de team building dynamiques et engageantes pour favoriser la coopération et la solidarité entre les membres de votre entreprise.",
    imageUrl: img_4,
    imageAlt: "Communication Interne et Engagement des Employés ",
  },
  {
    id: 5,
    title: "Formation en Communication Institutionnelle et Digitale",
    description:
      "Offre de formations complètes couvrant divers aspects de la communication institutionnelle, adaptées aux besoins spécifiques de votre organisation. Contenu pédagogique élaboré par des experts en communication institutionnelle pour garantir des connaissances approfondies et actualisées. Programme flexible, permettant de choisir les modules pertinents pour votre équipe, allant de la stratégie de communication à la gestion de crise, en passant par les médias sociaux et la communication interne. Accompagnement personnalisé tout au long du processus de formation, avec des conseils et un suivi pour assurer une mise en pratique efficace des apprentissages.",
    imageUrl: img_5,
    imageAlt: "Formation en Communication Institutionnelle et Digitale",
  },
  {
    id: 6,
    title: "Création et communication d'événements institutionnels",
    description:
      "Conception et organisation sur mesure d'événements institutionnels percutants (conférence, séminaire, journée thématique). Gestion complète, de la planification à l'exécution, pour des événements mémorables. Expertise en événementiel pour renforcer votre présence et votre image institutionnelle.",
    imageUrl: img_6,
    imageAlt: "Création et communication d'événements institutionnels",
  },
];

function Communication() {
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
      <Button/>
    </>
  );
}

export default Communication;
