# DotLife

## À propos

DotLife est une visualisation minimaliste de la vie humaine, représentée sous forme de points. Chaque point correspond à une unité de temps (jour, semaine, mois ou année) de votre vie, vous permettant de prendre conscience du temps écoulé et restant.

## Fonctionnalités

- **Visualisation du temps écoulé** : Affichez visuellement votre vie en fonction de votre date de naissance et de l'espérance de vie estimée
- **Plusieurs unités de temps** : Choisissez entre les jours, semaines, mois ou années
- **Statistiques en temps réel** : Consultez le nombre d'unités vécues, restantes et le pourcentage de vie
- **Multi-langues** : Interface disponible en français, anglais, espagnol, portugais et italien
- **Mode sombre/clair** : Adaptez l'interface à votre préférence visuelle
- **Responsive** : Fonctionne sur tous les appareils, du mobile au desktop
- **Sans dépendances** : Application légère sans bibliothèques externes

## Installation et déploiement

DotLife est une application web statique qui ne nécessite pas de serveur backend :

1. Clonez ce dépôt : `git clone https://github.com/nthnbch/dotlife.git`
2. Ouvrez `index.html` dans votre navigateur pour un test local
3. Pour déployer, copiez simplement les fichiers sur votre serveur web ou hébergement statique

Compatibilité : Tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)

## Comment l'utiliser

1. Entrez votre date de naissance
2. Sélectionnez l'unité temporelle souhaitée (jours, semaines, mois, années)
3. Ajustez l'espérance de vie si nécessaire (basée sur les statistiques mondiales)
4. Visualisez votre vie représentée par des points :
   - Points bleus : temps écoulé
   - Point rouge : aujourd'hui
   - Point avec tête de mort : fin de vie estimée

Vos préférences (langue, thème) sont automatiquement sauvegardées dans votre navigateur.

## Personnalisation

DotLife est facile à personnaliser :

- Modifiez les couleurs dans `style.css` en ajustant les variables CSS
- Ajoutez de nouvelles langues en complétant le dictionnaire dans `script.js`
- Adaptez la mise en page en fonction de vos besoins

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage pour la persistance des préférences
- Conception responsive
- Accessibilité intégrée pour les lecteurs d'écran

## Crédit

© [nathan.swiss](https://nathan.swiss)
