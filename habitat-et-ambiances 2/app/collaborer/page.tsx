import { SurveyPage } from "@/components/survey-page";

export default function CollaborerPage() {
  return (
    <SurveyPage
      kind="collaboration"
      tone="lime"
      eyebrow="Collaborer · espace ouvert"
      headline="Mettre les disciplines en relation."
      introduction="Vous souhaitez proposer un projet ? Vous avez une idée en lien avec les ambiances intérieures et l’habitat ? Écrivez-nous."
      title="Proposer une collaboration"
      submitLabel="Envoyer la proposition"
      successMessage="Merci. Votre proposition a bien été reçue et pourra faire l’objet d’une réponse."
      consentText="J’accepte que mon message et mon adresse e-mail soient conservés afin d’examiner ma demande et de pouvoir me répondre. Rien n’est publié automatiquement."
      fields={[
        { name: "primaryText", label: "Votre projet ou votre idée", placeholder: "En une phrase : que souhaitez-vous proposer ?", required: true },
        { name: "secondaryText", label: "Votre proposition", placeholder: "Contexte, personnes concernées, besoin identifié, résultat espéré…", textarea: true, required: true },
        { name: "contextText", label: "Votre profil ou votre pratique", placeholder: "Présentez-vous librement" },
        { name: "email", label: "Votre e-mail", placeholder: "Pour pouvoir vous répondre", required: true },
      ]}
      asideTitle="Un espace ouvert aux projets, aux idées et aux besoins émergents."
      asideItems={[
        "Comprendre votre idée sans l’enfermer dans une catégorie.",
        "Identifier les personnes et les compétences utiles.",
        "Envisager une suite concrète et partageable.",
      ]}
    />
  );
}
