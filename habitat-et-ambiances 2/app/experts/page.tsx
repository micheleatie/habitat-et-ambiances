import { SurveyPage } from "@/components/survey-page";

export default function ExpertsPage() {
  return (
    <SurveyPage
      kind="expert"
      tone="blue"
      eyebrow="Projet 02 · experts de l’habitat"
      headline="Quels outils manquent aux métiers de l’habitat&nbsp;?"
      introduction="Architectes, ingénieurs, bureaux d’études, enseignants, chercheurs et autres experts de l’habitat sont invités à partager leurs besoins d’étude et d’analyse."
      title="Décrire un besoin professionnel"
      submitLabel="Envoyer ce besoin"
      successMessage="Merci. Votre contribution rejoint le corpus consacré aux besoins des experts de l’habitat."
      fields={[
        { name: "primaryText", label: "Votre métier ou expertise", placeholder: "Ex. : architecte, thermicien·ne, acousticien·ne, enseignant·e…", required: true },
        { name: "secondaryText", label: "Le problème ou le besoin", placeholder: "Quelle étude, analyse, donnée ou méthode vous manque aujourd’hui ?", textarea: true, required: true },
        { name: "contextText", label: "Le contexte d’utilisation", placeholder: "Type de projet, phase de conception, public concerné, outils actuels…", textarea: true },
        { name: "email", label: "Votre e-mail", placeholder: "Pour pouvoir approfondir ce besoin avec vous", required: true },
      ]}
      options={["Confort thermique", "Lumière", "Acoustique", "Qualité de l’air", "Usages", "Mesure et simulation", "Pédagogie", "Autre"]}
      asideTitle="Faire émerger des problématiques professionnelles et des solutions utiles."
      asideItems={[
        "Identifier les limites des méthodes et outils actuels.",
        "Rapprocher les besoins de terrain et les capacités de recherche.",
        "Faire naître de nouveaux outils, études ou collaborations.",
      ]}
    />
  );
}
