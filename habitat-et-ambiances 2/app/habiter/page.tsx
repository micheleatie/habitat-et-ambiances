import { SurveyPage } from "@/components/survey-page";

export default function HabiterPage() {
  return (
    <SurveyPage
      kind="habitat"
      tone="coral"
      eyebrow="Projet 01 · habitants"
      headline="Raconter le logement tel qu’il est vécu."
      introduction="Un espace d’expression libre pour évoquer un problème, une envie ou une opinion sur le logement actuel : ensoleillement, confort thermique, nuisances sonores ou lumineuses, usages, région…"
      title="Partager une expérience de logement"
      submitLabel="Envoyer cette réponse"
      successMessage="Merci. Votre réponse a été reçue et restera privée."
      fields={[
        { name: "primaryText", label: "Le problème, le besoin ou l’envie", placeholder: "Décrivez librement ce qui vous gêne, vous manque ou devrait changer", textarea: true, required: true },
        { name: "secondaryText", label: "La situation vécue", placeholder: "Quand et comment cela se manifeste-t-il dans votre logement ?", textarea: true, required: true },
        { name: "contextText", label: "Région et type de logement", placeholder: "Ex. : appartement ancien à Lille, maison récente en Provence…", required: true },
        { name: "email", label: "Adresse e-mail de validation", placeholder: "Utilisée uniquement pour éviter les réponses en double", required: true },
      ]}
      options={["Confort thermique", "Ensoleillement", "Bruit", "Lumière", "Qualité de l’air", "Usages", "Espace", "Autre"]}
      asideTitle="Des expériences concrètes pour identifier les problèmes prioritaires."
      asideItems={[
        "Recueillir librement les difficultés et les attentes des habitants.",
        "Observer les variations selon les régions et les types de logement.",
        "Transmettre les problématiques fortes à des experts pour chercher des solutions.",
      ]}
      privacyNote="L’adresse e-mail est transformée en empreinte non lisible afin d’éviter les doublons. Elle n’est ni publiée ni conservée sous sa forme originale."
    />
  );
}
