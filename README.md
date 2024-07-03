 # API REST de Gestion de Pokémon

Ce projet est une API REST de gestion de Pokémon construite avec Node.js et Express. Il permet de créer, lire, mettre à jour et supprimer des Pokémons dans une base de données.

 # Etat du projet

Le projet est actuellement en production.

 # Lien vers le projet.

https://pokedex-api-nodejs-59es.onrender.com/

 # Les routes de l'API.
# GET /pokemons
    Description : Récupère tous les pokémons.
# POST /pokemons
    Description : Créer un nouveau pokémon.
    Body : 
        {
            "name": "Pikachu",
            "hp": 35,
            "cp": 55,
            "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            "types": ["Electrik"]
        }
# GET /pokemons/:id
    Description : Récupère un pokémon par son ID
# PUT /pokemons/:id
    Description : Met à jour un pokémon existant
    Body : 
        {
            "name": "Pikachu",
            "hp": 35,
            "cp": 55,
            "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            "types": ["Electrik"]
        }
# DELETE /pokemons/:id
    Description : Supprime un pokémon par son ID
# POST /signup
    Description : Crée un nouvel utilisateur.
    Body : {
        "username": "example_user",
        "password": "password123"
    }
# POST /login
    Description : Authentifie un utilisateur et retourne un token JWT.
    Body : {
        "username": "example_user",
        "password": "password123"
    }

