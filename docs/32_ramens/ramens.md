---
title: Ramens
---

# :ramen: Notation de *ramens*

Le site [www.theramenrater.com](https://www.theramenrater.com) propose un fichier *csv* reprenant les notes données par son créateur à de nombreux *rāmens*, ces nouilles servies dans du bouillon au Japon.

On s'intéresse ici à la base de données `notations_ramens` associée. Cette base ne comprend qu'une table, `ramens`, dont les attributs sont :

* `id` : l'identifiant de l'entrée (clé primaire) ;

* `brand` : la marque des *rāmens* au format texte ;

* `variety` : le type de *rāmens* au format texte ;

* `style` : le style des *rāmens*' au format texte (`Cup`, `Pack`, `Bowl`...) ;

* `country` : le pays producteur au format texte ;

* `stars` : la note (nombre décimal).

Cette base est téléchargeable au format *sqlite* [ici](notations_ramens.db).

<!-- -->

1. Combien de *rāmens* sont notés ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="32_ramens/notations_ramens.db" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*)
        FROM ramens;
        ```

1. Combien de *rāmens* ont été produits au Japon (`Japan` dans la table) ? 
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*) 
        FROM ramens
        WHERE country = 'Japan';
        ```

2. Afficher les notes des *rāmens* produits en Espagne (`Spain` dans la table).
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT stars
        FROM ramens
        WHERE country = 'Spain';
        ```

3. Afficher les notes des *rāmens* produits au Brésil ou au Pérou (`Brazil` et `Peru`) ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT stars
        FROM ramens
        WHERE country = 'Brazil' OR country ='Peru';
        ```

4. Combien de *rāmens* ont été produits par la marque « *Sapporo Ichiban* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*)
        FROM ramens
        WHERE brand = 'Sapporo Ichiban';
        ```

5. Afficher le nombre de *rāmens* que produit chaque marque.
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT brand, COUNT(*)
        FROM ramens
        GROUP BY brand;
        ```

6. Afficher les marques des *rāmens* servis dans des bols. On donnera les cinq premiers résultats dans l'ordre alphabétique.
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT brand
        FROM ramens
        WHERE style = 'Bowl'
        GROUP BY brand
        ORDER BY brand ASC
        LIMIT 5;
        ```

7. Quelle est la note maximale donnée ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT MAX(stars)
        FROM ramens;
        ```

8. Quelle est la note moyenne de toutes les évaluations ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT AVG(stars)
        FROM ramens;
        ```

9. Combien de *rāmens* américains ont une note supérieure à 4 (inclus) ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*)
        FROM ramens
        WHERE country = 'United States' AND stars >= 4;
        ```

10. Classer les pays selon la note moyenne des *rāmens* produits. On triera les résultats dans l'ordre décroissant.
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="ramens" }}

    ??? done "Réponse"

        ```sql
        SELECT country, AVG(stars) as moyenne
        FROM ramens
        GROUP BY country
        ORDER BY moyenne DESC;
        ```
