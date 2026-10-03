"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { saveContribution } from "@/lib/contributions-client";

export function ParticipantSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("Inscription en cours…");

    try {
      await saveContribution({
          kind: "participant",
          primaryText: "Recevoir les invitations aux questionnaires",
          secondaryText: "",
          contextText: "",
          email,
          tags: ["Questionnaires"],
          consent,
      });

      setStatus("success");
      setMessage("Inscription enregistrée. Merci.");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "L’inscription n’a pas pu être enregistrée.");
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="participant-email">Votre adresse e-mail</label>
      <div className="signup-line">
        <input
          id="participant-email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="nom@exemple.fr"
          required
        />
        <button type="submit" disabled={status === "saving" || !consent}>
          {status === "saving" ? "Envoi…" : "S’inscrire"}
          {status === "success" ? <Check /> : <ArrowRight />}
        </button>
      </div>
      <label className="signup-consent" htmlFor="participant-consent">
        <input
          id="participant-consent"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>J’accepte de recevoir les invitations du laboratoire. Cette adresse ne sera pas publiée.</span>
      </label>
      <p className="signup-policy"><a href="/donnees">Consulter la politique des données</a></p>
      <output className={`signup-status status-${status}`} aria-live="polite">{message}</output>
    </form>
  );
}
