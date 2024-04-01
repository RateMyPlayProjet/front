# Guide d'installation et d'utilisation du front-end

Ce guide vous aidera à installer et à utiliser le front-end de l'application.

## Installation

1. Assurez-vous d'avoir Node.js installé sur votre machine.

2. Installez les dépendances en exécutant la commande suivante :

    ```bash
    npm install
    ```

   Si jamais cela n'importe pas toutes les librairies utilisées par le projet, exécutez également les commandes suivantes :

    ```bash
    npm install react-custom-roulette
    npm install react-custom-scrollbars
    npm install react-router-dom
    npm install axios
    npm install moment
    ```

## Utilisation

1. Lancez l'application en exécutant la commande suivante :

    ```bash
    npm start
    ```

2. Utilisez les informations suivantes pour vous connecter :

   - **Login** :
     - **Nom d'utilisateur** : admin
     - **Mot de passe** : password

3. Routes d'accès :

   - http://localhost:3000 => Page de connexion
   - http://localhost:3000/register => Page d'inscription
   - http://localhost:3000/home/7 => Accueil
   - http://localhost:3000/game/7/{idGame} => Détails du jeu
   - http://localhost:3000/rollRover => RollRover Partie 1
   - http://localhost:3000/rollRover/categories/:selectedCategoryIds => RollRover Partie 2
   - http://localhost:3000/rollRover/games/:selectedGamesIds => RollRover Partie 3

## Attention
Le front a tendance à mettre du temps à charger les données si vous ne voyez aucunes données (alors que vous avez mis des choses dans la base de données => refresh la page)
