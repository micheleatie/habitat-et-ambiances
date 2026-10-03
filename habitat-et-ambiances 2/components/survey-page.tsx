import { ArrowLeft } from "lucide-react";
import { ResearchHeader } from "@/components/research-header";
import { ContributionForm } from "@/components/contribution-form";

type SurveyPageProps = React.ComponentProps<typeof ContributionForm> & {
  eyebrow: string;
  headline: string;
  introduction: string;
  asideTitle: string;
  asideItems: string[];
  privacyNote?: string;
  tone: "blue" | "coral" | "lime";
};

export function SurveyPage({ eyebrow, headline, introduction, asideTitle, asideItems, privacyNote, tone, ...form }: SurveyPageProps) {
  return (
    <main>
      <ResearchHeader />
      <section className={`survey-hero survey-${tone}`}>
        <a href="/" className="back-link"><ArrowLeft /> Retour à l’accueil</a>
        <div>
          <p className="kicker">{eyebrow}</p>
          <h1>{headline}</h1>
          <p>{introduction}</p>
        </div>
      </section>
      <section className="survey-layout">
        <ContributionForm {...form} />
        <aside className="survey-aside">
          <p className="kicker">Ce que votre réponse apporte</p>
          <h2>{asideTitle}</h2>
          <ol>{asideItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          <p className="privacy-note">{privacyNote || "Les contributions sont conservées comme matériaux de recherche. Elles restent en attente de relecture avant toute analyse ou restitution publique."}</p>
        </aside>
      </section>
      <footer className="survey-footer">
        <a href="/" className="brand">Laboratoire des ambiances</a>
        <p>Les contributions sont relues avant toute restitution.</p>
        <p><a href="/donnees">Politique des données</a></p>
      </footer>
    </main>
  );
}
