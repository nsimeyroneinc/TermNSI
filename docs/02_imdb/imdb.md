---
author: Nicolas Revéret
title: Séries IMDB
---

# :star: Les notes des 250 meilleures séries selon IMDB

Le jeu de données disponible [ici](https://www.kaggle.com/datasets/wittmannf/episode-ratings-from-imdb-top-250-tv-series?select=imdb_top_250_series_global_ratings.csv) recense les notes attribuées par les utilisateurs du site [IMDB](https://www.imdb.com/?ref_=nv_home) à 250 séries.

Les deux fichiers CSV disponibles sur le site ont été réorganisés en trois fichiers :

* [`shows.csv`](shows.csv) : contient les informations décrivant chacune des série (son code et son titre, l'un et l'autre au format texte)
  
* [`global_ratings.csv`](global_ratings.csv) : contient les notes attribuées à chaque série ainsi que le nombre de votants. Les séries sont désignées par un code faisant référence au code utilisé dans le fichier précédent. Les notes sont des nombres décimaux et le nombre de votants des entiers.

* [`episode_ratings.csv`](episodes_ratings.csv) : contient les notes attribuées à chaque épisode de chaque saison de chaque série. Là encore, les séries sont désignées par le code utilisé dans le fichier `shows.csv`. Les numéros de saison, d'épisode sont des entiers. Les notes sont des nombres décimaux.

La base de données `imdb_ratings` est déjà créée. Elle ne contient pour l'instant aucune table.

1. Combien faut-il créer de tables ?

    === "Cocher la ou les bonne(s) réponse(s)"
        
        - [ ] Une
        - [ ] Deux
        - [ ] Trois

    === "Solution"
        
        - ❌ Une
        - ❌ Deux
        - ✅ Trois. Il faut créer une table par fichier `csv`.

    ??? danger "[Spoiler Alert] La ou les table(s) à utiliser"

        Les tables utilisées dans la suite de l'exercice sont les suivantes :

        * `shows` reprend les attributs et le contenu du fichier `shows.csv` ;

        * `global` reprend les attributs et le contenu du fichier `global_ratings.csv`

         * `episodes` reprend les attributs et le contenu du fichier `episode_ratings.csv`

2. Quelle est la clé primaire de la table `shows` correspondant au fichier `show.csv` ?

    === "Cocher la ou les bonne(s) réponse(s)"
        
        - [ ] L'attribut `code`
        - [ ] L'attribut `title`
        - [ ] Les deux attributs couplés
        - [ ] L'un ou l'autre des deux attributs...

    === "Solution"
        
        - ❌ L'attribut `code`
        - ❌ L'attribut `title`
        - ❌ Les deux attributs couplés
        - ✅ L'un ou l'autre des deux attributs...

3. Quelle est la clé primaire de la table `global` correspondant au fichier `global_ratings.csv` ?

    === "Cocher la ou les bonne(s) réponse(s)"
        
        - [ ] L'attribut `code`
        - [ ] L'attribut `rating`
        - [ ] L'attribut `rating_count`

    === "Solution"
        
        - ✅ L'attribut `code`
        - ❌ L'attribut `rating`
        - ❌ L'attribut `rating_count`

4. Quelle est la clé primaire de la table `episodes` correspondant au fichier `episode_ratings.csv` ?

    === "Cocher la ou les bonne(s) réponse(s)"
        
        - [ ] L'attribut `code`
        - [ ] L'attribut `season`
        - [ ] L'attribut `episode`
        - [ ] L'attribut `rating`
        - [ ] Il faut utiliser une clé multiple

    === "Solution"
        
        - ❌ L'attribut `code`
        - ❌ L'attribut `season`
        - ❌ L'attribut `episode`
        - ❌ L'attribut `rating`
        - ✅ Il faut utiliser une clé multiple. La clé est formée des attributs `(code, season, episodes)`

5. Quelles sont les clés étrangères présentes dans cette base de données ? (on désigne les attributs au format `table.attribut`)

    === "Cocher la ou les bonne(s) réponse(s)"
        
        - [ ] L'attribut `shows.code` fait référence à `global.code`
        - [ ] L'attribut `global.code` fait référence à `shows.code`
        - [ ] L'attribut `global.rating` fait référence à `episodes.rating`
        - [ ] L'attribut `episodes.code` fait référence à `shows.code`

    === "Solution"
        
        - ❌ L'attribut `shows.code` fait référence à `global.code`
        - ✅ L'attribut `global.code` fait référence à `shows.code`
        - ❌ L'attribut `global.rating` fait référence à `episodes.rating`
        - ✅ L'attribut `episodes.code` fait référence à `shows.code`

6. Créer la table `shows`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="02_imdb/imdb_ratings.db" espace="imdb" }}

    ??? done "Réponse"

        ```sql
        CREATE TABLE shows (
            code TEXT,
            title TEXT,
            PRIMARY KEY(code)
        );
        ```

7. Créer la table `global`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="imdb" }}

    ??? done "Réponse"

        ```sql
        CREATE TABLE global (
            code TEXT,
            rating REAL,
            rating_count INTEGER,
            PRIMARY KEY (code),
            FOREIGN KEY(code) REFERENCES shows (code)
        );
        ```

8. Créer la table `episodes`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="imdb" }}

    ??? done "Réponse"

        ```sql
        CREATE TABLE episodes (
            code TEXT,
            season INTEGER,
            episode INTEGER,
            rating REAL,
            PRIMARY KEY(code, season, episode),
            FOREIGN KEY(code) REFERENCES shows (code)
        );
        ```

9. Importer les dix premières séries dans dans la table `shows`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="imdb" }}

    ??? done "Réponse"

        ```sql
        INSERT INTO shows
        VALUES  ("tt0995832", "Generation Kill"),
                ("tt0080306", "Yes Minister"),
                ("tt7259746", "Queer Eye"),
                ("tt0397150", "Garth Marenghi's Darkplace"),
                ("tt0459159", "The Thick of It"),
                ("tt9544034", "The Family Man"),
                ("tt0314979", "Battlestar Galactica"),
                ("tt0112159", "Neon Genesis Evangelion"),
                ("tt8289930", "Formula 1: Drive to Survive"),
                ("tt0877057", "Death Note");
        ```