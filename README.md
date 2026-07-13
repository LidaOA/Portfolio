# Portfolio Professionnel - Lidao

Bienvenue sur le dépôt du portfolio de Lidao. Il s'agit d'un site web sobre, moderne et interactif mettant en valeur un profil hybride alliant la **Data Science, l'Intelligence Artificielle** et le **Montage Vidéo**.

## 🎨 Charte Graphique & Design
- **Fond :** Noir profond (`#000000` / `#0a0a0a`) pour une sobriété et une élégance maximales.
- **Texte :** Blanc (`#FFFFFF`) pour le corps du texte.
- **Accents :** Jaune/Doré (`#FFCF4D`) pour mettre en valeur les éléments clés, les compétences importantes, et créer des micro-interactions.
- **Typographie :** *Outfit* pour des titres percutants et *Inter* pour un confort de lecture optimal.
- **Photo de profil :** Portrait professionnel recadré en format circulaire avec bordure dorée animée au survol.

## 🛠️ Fonctionnalités clés
- **Aperçus Vidéo Dynamiques :** Survoler une carte de projet démarre automatiquement la lecture silencieuse de la vidéo.
- **Lecteur Lightbox (Modal) :** Cliquer sur un projet ouvre la vidéo en grand format avec les contrôles intégrés.
- **Copie d'email rapide :** Système de copie d'email en un clic avec infobulle animée ("Copié !").
- **Animations au défilement :** Apparition fluide des éléments grâce à l'API *Intersection Observer*.
- **Compatibilité GitHub Pages & Jekyll :** Fichier `.nojekyll` inclus pour un déploiement direct et sans problème.

## 💻 Technologies Utilisées
- HTML5 sémantique
- CSS3 (Variables, Flexbox, Grid, Animations personnalisées)
- JavaScript natif (ES6+)
- Git LFS (Large File Storage) pour la gestion et le suivi des vidéos volumineuses.

## 🚀 Installation locale
Pour lancer le site localement et profiter de la lecture des vidéos sans blocage de sécurité du navigateur :

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/LidaOA/Portfolio.git
   cd Portfolio
   ```
2. Lancez un serveur HTTP local (par exemple avec Python) :
   ```bash
   python -m http.server 8000
   ```
3. Ouvrez votre navigateur et rendez-vous sur : [http://localhost:8000](http://localhost:8000)

## 🌐 Déploiement GitHub Pages
Le dépôt est configuré pour être publié directement via **GitHub Pages** :
- Les vidéos volumineuses sont gérées par **Git LFS**.
- Le fichier `.nojekyll` indique à GitHub Pages de servir le site directement sans passer par Jekyll.
- Configuration recommandée sur GitHub : Allez dans **Settings > Pages** de votre dépôt, et sélectionnez la branche `main` comme source de déploiement.

