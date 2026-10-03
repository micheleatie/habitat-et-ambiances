import { ArrowLeft } from "lucide-react";
import { ResearchHeader } from "@/components/research-header";

export default function DataPolicyPage() {
  return (
    <main>
      <ResearchHeader />
      <section className="policy-page">
        <a href="/" className="back-link"><ArrowLeft /> Retour à l’accueil</a>
        <div className="policy-heading">
          <p className="kicker">Protection des données</p>
          <h1>Politique des données</h1>
          <p>Cette page explique quelles informations sont recueillies, pourquoi elles le sont et comment exercer vos droits.</p>
        </div>

        <div className="policy-content">
          <section>
            <h2>Responsable et finalités</h2>
            <p>Michèle Atié est responsable du traitement des données recueillies par le Laboratoire des ambiances.</p>
            <p>Les informations servent à recevoir et étudier les contributions, éviter les réponses en double, répondre aux propositions de collaboration et inviter les personnes qui l’ont demandé à de futurs questionnaires. Elles ne sont pas utilisées à des fins commerciales.</p>
          </section>

          <section>
            <h2>Données recueillies</h2>
            <p>Selon le formulaire, le site peut recueillir le contenu de la contribution, un contexte, une région, un profil professionnel et une adresse e-mail. Les champs obligatoires sont signalés dans chaque formulaire ; sans eux, la contribution ne peut pas être enregistrée.</p>
            <p>Pour les enquêtes Habitat et les propositions Ambiance Index, l’adresse e-mail est transformée en empreinte protégée par un secret serveur afin de limiter les doublons. L’adresse originale n’est pas conservée dans la base des contributions. Ces données sont pseudonymisées, et non entièrement anonymes. Aucun lien de confirmation par e-mail n’est envoyé : une adresse saisie ne prouve pas l’identité de son utilisateur. Pour les collaborations, les besoins d’experts et les invitations, l’adresse est conservée pour pouvoir reprendre contact.</p>
            <p>Évitez d’inscrire un nom, une adresse précise ou des informations sensibles dans les champs libres. Des compteurs techniques limitent les envois : ils conservent une empreinte protégée, sans e-mail brut ni adresse IP, et sont purgés lors d’un envoi ultérieur après 24 heures.</p>
          </section>

          <section>
            <h2>Base légale, accès et publication</h2>
            <p>Le traitement repose sur le consentement donné au moment de l’envoi du formulaire. Les contributions restent privées et sont relues avant toute analyse ou restitution. Seule la responsable du projet y accède à ce stade. Une citation ou une publication identifiable nécessite un accord distinct.</p>
          </section>

          <section>
            <h2>Durée de conservation</h2>
            <p>Les coordonnées, contributions et empreintes sont conservées pendant deux ans au maximum à compter du dernier échange, puis supprimées ou réellement anonymisées. Seules les données rendues non identifiantes peuvent être conservées plus longtemps pour la recherche et la pédagogie. La responsable assure cette révision ; elle n’est pas automatisée à ce stade.</p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données, et retirer votre consentement. Pour exercer ces droits, utilisez la page <a href="/collaborer">Collaborer</a> en indiquant « Demande concernant mes données » dans le premier champ.</p>
            <p>Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL</a>.</p>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>La version GitHub Pages du site est hébergée par GitHub. Les contributions sont stockées dans le projet Supabase du laboratoire, dont la région principale est l’Irlande. Elles ne sont jamais enregistrées dans le dépôt GitHub public. Les prestataires peuvent traiter des journaux techniques pour la sécurité et le fonctionnement de leurs services.</p>
            <p>L’accès à la base est réservé au compte administrateur du laboratoire. Aucun partage commercial n’est effectué. Le site n’ajoute aucun outil publicitaire ni suivi marketing. Les réponses envoyées sur l’ancienne version restent dans son stockage séparé tant que leur migration n’a pas été effectuée.</p>
          </section>

          <p className="policy-update">Dernière mise à jour : 3 octobre 2026. <a href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles" target="_blank" rel="noreferrer">Anonymisation et pseudonymisation : explications de la CNIL</a>.</p>
        </div>
      </section>
      <footer>
        <a href="/" className="brand">Laboratoire des ambiances</a>
        <p>Recherche collective sur les ambiances intérieures et l’habitat.</p>
        <p><a href="/collaborer">Nous écrire</a></p>
      </footer>
    </main>
  );
}
