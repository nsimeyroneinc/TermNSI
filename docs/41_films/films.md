---
author: Nicolas Revéret
title: Films
---

# :cinema: Autour des `films`

On s'intéresse ici à la base de données `films` regroupant diverses informations sur des films :

* titre,
* année de réalisation,
* nom du réalisateur,
* résumé,
* nom et rôle des acteurs,
* note attribuée par des internautes,
* *etc*...

Les différentes tables sont représentées ci-dessous :

![La base `films`](films.png#only-light)
![La base `films`](films_dark.png#only-dark)

Sur cette figure :

* chaque tableau correspond à une table dont le nom est indiqué sur la première ligne ;

* les lignes suivantes listent les attributs et leur type. `varchar(255)` signifie que l'attribut est un texte de 255 caractères au maximum ;

* les clés primaires de chaque table sont indiquées en gras. Notez que la table `roles` a une clé primaire multiple ;

* les clés étrangères sont représentées par des liaisons entre les tables. On ne détaille pas ici la signification des nombres et des symboles aux extrémités des liaisons. Les curieux pourront se reporter à [cette page](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model#Crow's_foot_notation).

Cette base est téléchargeable au format *sqlite* [ici](films.db). La source est [là](http://deptfod.cnam.fr/bd/tp/datasets/). Le fichier d'origine a été complété par nos soins. Ainsi, les internautes et les notes associées sont des [faux](https://pypi.org/project/Faker/).

<!-- -->

## En deux temps...

1. Combien de films sont présents dans la base ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="41_films/films.db" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*)
        FROM films;
        ```

2. Quel est l'`idRealisateur` du film « *Casablanca* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT idRealisateur
        FROM films
        WHERE titre = 'Casablanca';
        ```

3. Quels sont les noms et prénoms de ce réalisateur ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT nom, prenom
        FROM artistes
        WHERE idArtiste = 4109;
        ```

## Tout à la fois !

Comme on peut le voir, la question « Quel est le nom du films *Casablanca* ? » nécessite d'effectuer deux requêtes. Les informations sont en effet réparties sur deux tables.

Il est possible de n'effectuer qu'une seule requête en effectuant une **jointure**. Cette opération s'appuie sur les clés étrangères des tables et permet de mettre deux attributs en correspondance.

La structure générale d'une jointure est :

```sql
SELECT attribut
FROM table_1
JOIN table_2 ON table_1.attribut_1 = table_2.attribut_2;
```

Plusieurs remarques :

* on a précisé l'origine des attributs afin d'éviter les ambiguïtés si deux attributs de deux tables différentes ont le même nom. Ce n'est pas nécessaire s'il n'y a pas d'ambiguïté ;
* il est possible de joindre d'autres tables en rajoutant des lignes `JOIN table_3 ...` ;
* on peut tout à fait ajouter une clause `WHERE` à la suite des jointures ;
* les attributs demandés peuvent provenir de toutes les tables jointes `SELECT table_1.attribut_1, table_2.attribut_2`.

<!-- -->

1. Utilisez une jointure afin de retrouver le nom et le prénom du réalisateur de « *Casablanca* ».
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        On peut indifféremment partir de la table `artistes` :

        ```sql
        SELECT artistes.nom, artistes.prenom
        FROM artistes
        JOIN films ON films.idRealisateur = artistes.idArtiste
        WHERE films.titre = 'Casablanca';
        ```
        
        ou `films` :

        ```sql
        SELECT artistes.nom, artistes.prenom
        FROM films
        JOIN artistes ON films.idRealisateur = artistes.idArtiste
        WHERE films.titre = 'Casablanca';
        ```


2. Qui est le réalisateur de « *Memento* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT artistes.nom, artistes.prenom
        FROM artistes
        JOIN films ON films.idRealisateur = artistes.idArtiste
        WHERE films.titre = 'Memento';
        ```

3. Quel acteur a joué le rôle de « *Chewbacca* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT artistes.nom, artistes.prenom
        FROM artistes
        JOIN roles ON roles.idActeur = artistes.idArtiste
        WHERE roles.nomRole = 'Chewbacca';
        ```

4. Quelles notes a obtenu le film « *Fargo* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT note
        FROM notes
        JOIN films ON films.idFilm = notes.idFilm
        WHERE titre = 'Fargo';
        ```

5. Quels acteurs (noms et prénoms) ont joué dans « *Sueurs froides* » ? Il va falloir joindre plus de deux tables...
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT nom, prenom
        FROM artistes
        JOIN roles ON roles.idActeur = artistes.idArtiste
        JOIN films ON roles.idFilm = films.idFilm
        WHERE films.titre = 'Sueurs froides';
        ```
        
6. Quels sont les films notés par l'internaute « *Guillaume Turpin* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT titre
        FROM films
        JOIN notes ON notes.idFilm = films.idFilm
        JOIN internautes ON internautes.email = notes.email
        WHERE prenom = 'Guillaume' AND nom = 'Turpin';
        ```

7. Quels sont les films dans lesquels l'acteur « *David Carradine* » a joué le rôle de « *Bill* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT titre
        FROM films
        JOIN roles ON roles.idFilm = films.idFilm
        JOIN artistes ON roles.idActeur = artistes.idArtiste
        WHERE prenom = 'David' AND nom = 'Carradine' and nomRole = 'Bill';
        ```

8. L'acteur « *Johnny Depp* » a-t-il joué dans des films réalisés hors des États-Unis ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT films.titre
        FROM films
        JOIN roles ON roles.idFilm = films.idFilm
        JOIN artistes ON artistes.idArtiste = roles.idActeur
        JOIN pays ON pays.code = films.codePays
        WHERE artistes.nom = 'Depp' AND artistes.prenom = 'Johnny' and code != 'US';
        ```

9. Quel est le film ayant obtenu la meilleure note moyenne (on rappelle que ces notes ont été générées aléatoirement).

    ??? tip "Astuce"

        La requête pourra ressembler à :

        ```sql
        SELECT titre, AVG(...) as moyenne
        FROM ...
        JOIN ... ON ... = ...
        GROUP BY ...
        ORDER BY ... DESC
        LIMIT 1;
        ```
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT titre, AVG(note) as moyenne
        FROM films
        JOIN notes ON notes.idFilm = films.idFilm
        GROUP BY films.idFilm
        ORDER BY moyenne DESC
        LIMIT 1;
        ```


10. Classer les artistes en fonction du nombre de rôles qu'ils ont joués, dans l'ordre décroissant.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="films" }}

    ??? done "Réponse"

        ```sql
        SELECT nom, prenom, COUNT(nomRole) as total
        FROM roles
        JOIN artistes ON artistes.idArtiste = roles.idActeur
        GROUP BY idArtiste
        ORDER BY total DESC;
        ```