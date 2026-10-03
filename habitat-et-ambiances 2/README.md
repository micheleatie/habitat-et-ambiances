# Habitat et ambiances

Laboratoire participatif créé par Michèle Atié pour recueillir des expériences
de logement, des besoins d’experts et des propositions de collaboration.
Ambiance Index est l’un de ses projets ; son outil reste dans un dépôt séparé.

## Publication initiale

Le dossier `docs` contient les six pages déjà générées et leur image.
Dans GitHub → Settings → Pages, choisir **Deploy from a branch**, branche
**main**, dossier **/docs**, puis Save.

Adresse : https://micheleatie.github.io/habitat-et-ambiances/

## Consulter les contributions

Se connecter au [tableau de bord Supabase](https://supabase.com/dashboard/project/igleycblgzxftgwswjvg/editor),
puis ouvrir la table `contributions`. Les réponses et les e-mails de contact
des collaborations y sont privés. Les notifications e-mail ne sont pas encore
automatisées. Ne jamais exporter ces réponses dans ce dépôt public.

Les formulaires passent par la fonction serveur `contributions`. La clé présente
dans le navigateur est une clé publishable ; aucune clé secrète n’est incluse.
La base refuse les lectures et insertions directes des visiteurs. Le contrôle
des doublons porte sur les adresses déclarées, pas sur une identité vérifiée.

## Modifier le site

Les textes et composants React se trouvent dans `app` et `components`. Avec Node
22.13 ou supérieur :

```sh
npm ci
npm run build
```

Remplacer ensuite le contenu de `docs` par celui de `dist-pages`, puis publier
la modification. Le build pré-rend les pages et adapte les liens au sous-dossier
`/habitat-et-ambiances/`. Vérifier les six parcours et les formulaires avant toute
nouvelle publication. Le build ne lit et ne publie aucune réponse de recherche.
