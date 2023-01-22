---
author: Nicolas Revéret
title: Soirée netflix
---

# :tv: Les programmes de `netflix`

On considère dans ce sujet la base de données `netflix` contenant des informations sur les programmes de la plateforme. Cette base contient plusieurs relations/tables :

=== "Les pays"

    * `countries` : contient des informations décrivant des pays :

        * `id` : l'identifiant du pays (entier, clé primaire)

        * `country` : le nom du pays (texte)

=== "Les réalisateurs"

    * `directors` : contient des informations décrivant les réalisateurs des programmes :

        * `id` : l'identifiant du réalisateur (entier, clé primaire)

        * `director` : le nom du ou des réalisateurs (texte)

=== "Les genres"

    * `genres` : décrit les genres des programmes :

        * `id` : l'identifiant du genre (entier, clé primaire)

        * `genre` : le nom du genre (texte)

=== "Les programmes"

    * `programs` : décrit les programmes :

        * `show_id` : l'identifiant du programme (texte, clé primaire)

        * `type` : l'identifiant du type de programme (entier, clé étrangère pointant vers `types.id`)

        * `title` : le nom du programme (texte)

        * `director` : l'identifiant du ou des réalisateurs (entier, clé étrangère pointant vers `directors.id`)

        * `country` : l'identifiant du pays du programme (entier, clé étrangère pointant vers `countries.id`)

        * `date_added` : la date d'ajout sur la plateforme (texte)
        
        * `release_year` : la date de réalisation du programme (entier)

        * `ratings` : l'identifiant de la classification du programme (entier, clé étrangère pointant vers `ratings.id`)
        
        * `duration` : la durée du programme en saison ou minutes (texte)

=== "Les classifications"

    * `ratings` : décrit les classifications des programmes :

        * `id` : l'identifiant de la classification (entier, clé primaire)

        * `rating` : le nom de la classification (texte)

=== "Les genres de chaque programme"

    * `show_genres` : décrit les genres associés à chaque programme :

        * `show_id` : l'identifiant du programme (texte, clé étrangère pointant vers `programs.show_id`)

        * `genre` : l'identifiant du genre (entier, clé étrangère pointant vers `genres.id`)

        * La clé primaire de cette table est le couple `(show_id, genre)`.

=== "Les types de programmes"

    * `types` : décrit les types de programmes :

        * `id` : l'identifiant du type (entier, clé primaire)

        * `type` : le nom du type (texte)


Cette base est téléchargeable au format *sqlite* [ici](netflix.db). La source est sur [kaggle](https://www.kaggle.com/datasets/d93a07b8b707e8e21e8fa542535533def4a4ffe24ed78215f65ce2851db58492?).

1. Afficher le nom des programmes ainsi que leur date d'ajout sur la plateforme.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="52_netflix/netflix.db" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT title, date_added
        FROM programs;
        ```

2. Afficher le nom et la date de réalisation des programmes réalisés après 2020 (inclus):

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT title, release_year
        FROM programs
        WHERE release_year >= 2020;
        ```

3. Quel est l'identifiant du réalisateur nommé `Michael Bay` ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT id
        FROM directors
        WHERE director = 'Michael Bay';
        ```

4. La série `The Witcher` comporte désormais 2 saisons alors que la base n'en indique qu'une seule. Corriger cette erreur.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        UPDATE programs
        SET duration = '2 seasons'
        WHERE title = 'The Witcher';
        ```

5. Insérer la série télévisée `The Sandman`, ajoutée en 2022, de réalisateurs multiples (utiliser l'identifiant correspondant à `Not Given`), et de classification `TV-MA`. Les autres champs seront laissés vierges.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        On récupère tout d'abord l'identifiant du réalisateur `Not Given` :

        ```sql
        SELECT id
        FROM directors
        WHERE director = 'Not Given';
        ```

        On obtient le `1238`.

        On fait de même avec l'identifiant de la classification `TV-MA` :
        
        ```sql
        SELECT id
        FROM ratings
        WHERE rating = 'TV-MA';
        ```

        On obtient le `9`.

        On peut alors effectuer l'insertion :

        ```sql
        INSERT INTO programs (title, release_year, director, rating)
        VALUES ('The Sandman', 2022, 1238, 9);
        ```

        Il était aussi possible de faire :

        ```sql
        INSERT INTO programs (title, release_year, director, rating)
        VALUES ('The Sandman', 2022, (SELECT id FROM directors WHERE director = 'Not Given'), (SELECT id FROM ratings WHERE rating = 'TV-MA'));
        ```

6. Quels sont les noms des programmes réalisés en `France` ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT title
        FROM programs
        JOIN countries ON countries.id = programs.country
        WHERE countries.country = 'France';
        ```

7. Combien de programmes ont été réalisés en 2020 en Inde (`India` dans la base) ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT COUNT(*)
        FROM programs
        JOIN countries ON countries.id = programs.country
        WHERE countries.country = 'India' AND release_year = 2020;
        ```

8. Afficher les noms et la date de réalisation des séries télévisées réalisées en `Uruguay` dans l'ordre décroissant de leur date de réalisation.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT title, release_year
        FROM programs
        JOIN countries ON countries.id = programs.country
        WHERE countries.country = 'Uruguay'
        ORDER BY release_year DESC;
        ```

9. À quel genre (au format texte) est associée la série `Dowton Abbey` ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        SELECT genres.genre
        FROM show_genres
        JOIN programs ON programs.show_id = show_genres.show_id
        JOIN genres ON genres.id = show_genres.genre
        WHERE programs.title = 'Downton Abbey';
        ```

10. Quel code permettrait de créer la table `notations` dont les attributs sont :

    * `id` : un entier, clé primaire
    * `show_id` : identifiant d'un programme, au format texte
    * `notation` : la note du programme, au format entier

    `show_id` est une clé étrangère pointant vers la table `programs`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="netflix"}}

    ??? done "Réponse"
        
        ```sql
        CREATE TABLE "notations" (
            "id" INTEGER,
            "show_id" TEXT,
            "notation" INTEGER,
            PRIMARY KEY("id"),
            FOREIGN KEY("show_id") REFERENCES "programs"("show_id")
        );
        ```