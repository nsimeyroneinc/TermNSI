---
author: Nicolas Revéret
title: Prénoms en France
---

# :baby: Les prénoms en France au XX-ème siècle

On considère dans ce sujet la base de données `prenoms`. Cette base ne comporte qu'une table,  `naissances`, qui contient des informations décrivant des prénoms des enfants nés en France au XX-ième siècle.

Cette base est téléchargeable au format *sqlite* [ici](prenoms.db).

Les attributs de cette table sont :

* `id` : l'identifiant de l'entrée (clé primaire);

* `sexe` : le sexe de l'enfant au format texte : `Fille` ou `Garçon` ;

* `prenom` : le prénom de l'enfant en lettres majuscules ;

* `annee_naissance` : l'année de naissance (nombre entier) ;

* `nombre` : le nombre d'enfants nés durant l'année en question et portant ce prénom.


On rappelle que la structure générale d'une requête `SQL` est :

```sql
SELECT attribut_1, attribut_2, ...
FROM table
WHERE condition;
```

Toutefois :

* il est possible d'obtenir tous les attributs en faisant `SELECT *` ;
* la condition `WHERE condition` n'est pas indispensable si l'on souhaite obtenir toutes les entrées de la table. On peut alors se contenter de `SELECT attributs FROM table` ;
* il est possible de rajouter d'autres arguments qui seront présentés au fil de ce document.
  
<!-- -->

1. Afficher les dix premières lignes de la table.

    !!! tip "Astuce"

        Utiliser `LIMIT 10` à la fin de la requête afin de n'afficher que les 10 premiers résultats. Il y a beaucoup de lignes dans cette table !
        
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="31_prenoms/prenoms.db" espace="prenoms"}}

    ??? done "Réponse"
        
        ```sql
        SELECT *
        FROM naissances
        LIMIT 10;
        ```

2. Afficher les lignes correspondant à l'année 1923. Là encore, mieux vaut ne demander que les 10 premières lignes...

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        On peut faire :

        ```sql
        SELECT * 
        FROM naissances
        WHERE annee_naissance = 1923;
        ```
        
        Ou, en limitant le nombre de réponses  :

        ```sql
        SELECT * 
        FROM naissances
        WHERE annee_naissance = 1923
        LIMIT 10;
        ```

3. Afficher les prénoms des filles nées en 1978.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT prenom
        FROM naissances
        WHERE sexe = 'Fille' AND annee_naissance = 1978;
        ```

4. Combien de fois le prénom *Nicolas* a-t-il été donné en 1907 ?

    ??? tip "Astuce"

        On fera attention aux majuscules !

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT sexe, nombre
        FROM naissances
        WHERE prenom = 'NICOLAS' AND annee_naissance = 1907;
        ```

        On obtient deux lignes car *Nicolas* peut aussi être un prénom de fille !

        On peut aussi utiliser la fonction d'aggréation `sum()` :
        ```sql
        SELECT sum(nombre)
        FROM naissances
        WHERE prenom = 'NICOLAS' AND annee_naissance = 1907;
        ```

5. Afficher les 10 prénoms de fille les plus donnés en 1978 rangés dans l'ordre décroissant du nombre de fois où ils ont été donnés.

    ??? tip "Astuce"

        On peut trier les résultats en ajoutant `ORDER BY attribut ASC` en fin de requête. `ASC` signifie `ASCENDING` et donc l'ordre croissant. On utilise `DESC` pour l'ordre décroissant.


    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT prenom
        FROM naissances
        WHERE sexe = 'Fille' AND annee_naissance = 1978
        ORDER BY nombre DESC
        LIMIT 10;
        ```

6. Afficher les lignes des prénoms de garçons donnés entre 1960 et 1969 (inclus l'un et l'autre). Utiliser un `AND` pour tester l'encadrement des années.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT *
        FROM naissances
        WHERE sexe = 'Garçon' AND annee_naissance >= 1960 AND annee_naissance <= 1969;
        ```

        Il est intéressant de remarquer au passage que la condition `1960 <= annee_naissance  <= 1969` ne renvoie pas le même résultat.

7. Afficher le nombre de prénoms différents de garçons donnés en 1938.

    ??? tip "Coup de pouce"

        On pourra utiliser la fonction `COUNT`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(*) as differents
        FROM naissances
        WHERE sexe = 'Garçon' AND annee_naissance = 1938;
        ```

        Le `as differents` est un alias, il permet de renommer un attribut ou un résultat (ici le décompte total).

8. Afficher le nombre de naissances de garçons observées en 1938.

    ??? tip "Coup de pouce"

        Utiliser la fonction `SUM` afin d'additionner les nombres d'enfants portant chaque prénom.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT SUM(nombre)
        FROM naissances
        WHERE sexe = 'Garçon' AND annee_naissance = 1938;
        ```

9. Afficher le nombre de filles et le nombre de garçons apparaissant dans le table.

    ??? tip "Coup de pouce"

        Il faut sommer des valeurs et les **regrouper** selon le sexe de l'enfant. On utilise pour cela l'instruction `GROUP BY`.
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT sexe, SUM(nombre)
        FROM naissances
        GROUP BY sexe;
        ```

10. Quel est le prénom, pour un certain sexe, en distinguant par exemple "Camille (fille)" et "Camille (garçon)", qui a été le plus donné durant une année donnée ? En quelle année ?

    ??? tip "Astuce"

        Utilisez une requête de la forme :

        ```sql
        SELECT ..., ..., ..., nombre
        FROM naissances
        ORDER BY ... DESC
        LIMIT ...;
        ```

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        On peut saisir :

        ```sql
        SELECT sexe, prenom, annee_naissance, nombre
        FROM naissances
        ORDER BY nombre DESC
        LIMIT 1;
        ```

        Une autre approche est d'utiliser deux requêtes imbriquées :

        ```sql
        SELECT sexe, prenom, annee_naissance, nombre
        FROM naissances
        WHERE nombre = (SELECT MAX(nombre) FROM naissances);
        ```

        Notons enfin que `sqlite` autorise cette approche :

        ```sql
        SELECT sexe, prenom, annee_naissance, MAX(nombre)
        FROM naissances;
        ```

        Cette instruction risque néanmoins de ne pas s'exécuter dans d'autres systèmes de gestion de bases de données.


11. En quelle année y-a-t-il eu le plus de naissances ?

    ??? tip "Astuce"

        Regrouper les résultats par année, les trier et n'afficher que le premier !

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT annee_naissance, SUM(nombre) as somme
        FROM naissances
        GROUP BY annee_naissance
        ORDER BY somme DESC
        LIMIT 1;
        ```

12. Quels sont les 10 prénoms les plus donnés en France au cours du XX-ème siècle ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="prenoms" }}

    ??? done "Réponse"

        ```sql
        SELECT prenom, SUM(nombre) as nb
        FROM naissances
        GROUP BY prenom
        ORDER BY nb DESC
        LIMIT 10;
        ```
