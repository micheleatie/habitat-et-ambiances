import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ContributionForm } from "@/components/contribution-form";
import { ResearchHeader } from "@/components/research-header";

export default function AmbiancesIndexPage() {
  return (
    <main>
      <ResearchHeader />

      <section className="project-hero">
        <a href="/#projets" className="back-link"><ArrowLeft /> Tous les projets</a>
        <div className="project-hero-grid">
          <div>
            <div className="project-topline">
              <span>Projet 03</span>
              <span className="status-pill"><i aria-hidden="true" /> Projet ouvert</span>
            </div>
            <p className="kicker">Architecture · perception · données</p>
            <h1>Ambiance Index</h1>
          </div>
          <div className="project-intro">
            <p>
              Un outil pédagogique pour explorer des références architecturales à travers leurs ambiances, leurs qualités sensibles, les effets ressentis et les intentions de conception.
            </p>
            <div className="project-actions">
              <a className="button-link button-primary" href="https://micheleatie.github.io/ambiance-index/" target="_blank" rel="noreferrer">
                Explorer l’outil actuel <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project-overview" aria-labelledby="overview-title">
        <div className="overview-copy">
          <p className="kicker">Le projet</p>
          <h2 id="overview-title">Une ressource collective pour la conception architecturale.</h2>
          <p>
            L’objectif est de recueillir des références utiles à la conception, avec une attention particulière portée à l’habitat et aux espaces habités.
          </p>
          <p>
            Pour l’instant, la base rassemble une première sélection de projets à titre d’exemple. Elle doit encore être enrichie.
          </p>
        </div>
      </section>

      <section className="contribution-paths" aria-labelledby="paths-title">
        <p className="kicker">Participer au projet</p>
        <div>
          <h2 id="paths-title">Deux manières de contribuer.</h2>
          <p><strong>Pour corriger ou compléter une référence existante :</strong> ouvrez Ambiance Index, sélectionnez la référence concernée, puis utilisez la rubrique « Suggestions experts » dans sa fiche.</p>
          <p><strong>Pour proposer une nouvelle référence ou une évolution générale du site :</strong> utilisez le formulaire ci-dessous. L’ajout direct d’une nouvelle référence n’est pas encore disponible dans l’outil Ambiance Index.</p>
        </div>
      </section>

      <section className="survey-layout project-contribution" id="contribuer">
        <ContributionForm
          kind="ambiance"
          title="Proposer une nouvelle référence ou une évolution"
          submitLabel="Envoyer la proposition"
          successMessage="Merci. La proposition rejoint la file de relecture d’Ambiance Index."
          fields={[
            { name: "primaryText", label: "La référence proposée", placeholder: "Nom du projet, de l’architecte ou de la réalisation", required: true },
            { name: "secondaryText", label: "Les effets observés", placeholder: "Décrivez les effets ressentis ou observés dans ce projet", textarea: true, required: true },
            { name: "contextText", label: "La ou les catégories de ces effets", placeholder: "Ex. : lumière, acoustique, sensation thermique, rapport à l’espace…", textarea: true, required: true },
            { name: "email", label: "Adresse e-mail", placeholder: "Obligatoire pour limiter les doublons par adresse e-mail", required: true },
          ]}
        />
        <aside className="survey-aside">
          <p className="kicker">Contribution ouverte</p>
          <h2>Chaque proposition est relue avant d’intégrer l’outil.</h2>
          <ol>
            <li><span>01</span>La proposition est conservée dans un espace privé.</li>
            <li><span>02</span>Elle est vérifiée, sourcée et comparée au vocabulaire existant.</li>
          </ol>
          <p className="privacy-note">Une seule proposition est acceptée par adresse e-mail. L’adresse e-mail est transformée en empreinte non lisible : elle n’est ni publiée ni conservée sous sa forme originale.</p>
        </aside>
      </section>

      <footer>
        <a href="/" className="brand">Laboratoire des ambiances</a>
        <p>Ambiance Index est l’un des projets du laboratoire.</p>
        <p><a href="/collaborer">Proposer une collaboration</a> · <a href="/donnees">Politique des données</a></p>
      </footer>
    </main>
  );
}
