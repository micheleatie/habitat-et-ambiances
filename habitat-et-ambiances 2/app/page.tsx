import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ParticipantSignup } from "@/components/participant-signup";
import { ResearchHeader } from "@/components/research-header";

const secondaryProjects = [
  {
    number: "01",
    status: "Recueil ouvert",
    title: "Habiter aujourd’hui",
    label: "Usages · besoins · logement",
    text: "Un espace d’expression libre pour recueillir les difficultés, les envies et les opinions des habitants sur leur logement actuel.",
    href: "/habiter",
    cta: "Partager une expérience",
  },
  {
    number: "02",
    status: "Appel aux experts",
    title: "Besoins des experts de l’habitat",
    label: "Habitat · études · outils",
    text: "Un espace destiné aux experts de l’habitat pour faire connaître leurs besoins d’étude, d’analyse, de données ou d’outils.",
    href: "/experts",
    cta: "Contribuer comme expert·e",
  },
];

export default function Home() {
  return (
    <main>
      <ResearchHeader />

      <section className="lab-hero" aria-labelledby="hero-title">
        <div className="lab-hero-copy">
          <h1 id="hero-title">
            Un laboratoire pour mieux <em>comprendre les ambiances.</em>
          </h1>
          <p className="hero-intro">
            Des outils pour améliorer la notion de confort dans l’habitat et mieux comprendre les ambiances intérieures.
          </p>
          <div className="hero-actions">
            <a className="button-link button-primary" href="#projets">Voir nos projets <ArrowDownRight /></a>
            <a className="text-link" href="/collaborer">Collaborer <ArrowUpRight /></a>
          </div>
        </div>

        <figure className="light-figure">
          <img src="/images/light-study.png" alt="Un faisceau de lumière chaude traverse un intérieur sombre aux surfaces bleues." />
        </figure>
      </section>

      <section className="projects-section" id="projets" aria-labelledby="projects-title">
        <div className="section-heading lab-purpose">
          <p className="kicker">Le laboratoire</p>
          <div className="purpose-copy">
            <h2 id="projects-title">Ce laboratoire a pour but d’imaginer des solutions et de développer des projets pour améliorer les ambiances intérieures.</h2>
            <p>Grâce à une participation collective, nous recueillons des données et les opinions des personnes, puis nous les transformons en outils capables de guider les concepteurs et les professionnels du bâtiment dans la conception des espaces et l’amélioration du confort.</p>
            <p className="data-note">Les contributions restent privées et servent à la recherche et à la pédagogie. Les coordonnées de contact ne sont jamais publiées automatiquement.</p>
          </div>
        </div>

        <div className="projects-grid">
          {secondaryProjects.map((project) => (
            <article className="project-card project-secondary" key={project.number}>
              <div className="project-topline"><span>{project.number}</span><span>{project.status}</span></div>
              <div className="project-secondary-copy">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
              <a className="project-link" href={project.href}>{project.cta} <ArrowUpRight /></a>
            </article>
          ))}

          <article className="project-card project-active">
            <div className="project-topline">
              <span>03</span>
              <span className="status-pill"><i aria-hidden="true" /> Projet ouvert</span>
            </div>
            <div className="project-card-copy">
              <p className="project-label">Architecture · perception · données</p>
              <h3>Ambiance Index</h3>
              <p>
                Un outil pédagogique destiné à recueillir des références architecturales utiles et à les organiser selon leurs ambiances, leurs qualités sensibles, les effets ressentis et les intentions de conception. Le projet souhaite accorder une attention particulière à l’habitat. La sélection actuelle est proposée à titre d’exemple et doit encore être enrichie.
              </p>
            </div>
            <a className="project-link" href="/index">Découvrir et contribuer <ArrowUpRight /></a>
          </article>
        </div>
      </section>

      <section className="participate-section" id="participer" aria-labelledby="participate-title">
        <div>
          <p className="kicker">Devenir participant·e</p>
          <h2 id="participate-title">Recevoir les prochaines invitations.</h2>
          <p>
            Les questionnaires seront proposés au fur et à mesure de la recherche. Une adresse e-mail permet de recevoir les invitations ; elle n’est pas publiée.
          </p>
        </div>
        <ParticipantSignup />
      </section>

      <section className="collaboration-section" id="collaborer" aria-labelledby="collaboration-title">
        <p className="kicker">Chercheur·euse, designer, enseignant·e, habitant·e…</p>
        <div>
          <h2 id="collaboration-title">Une méthode, un terrain ou une idée à mettre en commun&nbsp;?</h2>
          <a className="button-link button-light" href="/collaborer">Proposer une collaboration <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="home-footer">
        <a href="/" className="brand">Laboratoire des ambiances</a>
        <p className="footer-credit">Ce site a été créé par <strong>Michèle Atié</strong>, docteure en architecture et ambiances intérieures, et enseignante en architecture. Ce projet, à vocation éducative et informative, invite les habitants et les experts à partager leurs idées et leurs opinions afin d’identifier des problématiques, de proposer des solutions et d’enrichir la pédagogie actuelle.</p>
        <p><a href="/donnees">Politique des données</a><br /><a href="/suivi">Suivi privé des propositions</a></p>
      </footer>
    </main>
  );
}
