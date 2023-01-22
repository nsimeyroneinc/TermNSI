---
title: Autour du world
---

# :earth_africa: Autour du `world`

On considère dans ce sujet la base de données `world`. Cette base contient trois relations/tables :


=== "Les villes"

    * `city` : contient des informations décrivant des villes :

        * `ID` : l'identifiant de la ville (entier, clé primaire)

        * `Name` : le nom de la ville (texte)

        * `CountryCode` : le code du pays dans lequel est situé la ville (texte, clé étrangère vers `country.Code`)

        * `District` : la région d'appartenance de la ville (texte)

        * `Population` : la population de la ville (entier)

=== "Les pays"

    * `country` : contient des informations décrivant les pays :

        * `Code` : le code du pays (texte, clé primaire)

        * `Name` : le nom du pays (texte)

        * `Continent` : le continent du pays (texte)

        * `SurfaceArea` : la surface du pays (nombre décimal)

        * `Population` : la population du pays (entier)

        * `Capital` : la capitale du pays (entier, clé étrangère vers `city.ID`)

        * d'autres attributs qui ne nous intéressent pas ici...

=== "Les langues parlées"

    * `countryLanguage` : décrit les langues parlées dans le pays :

        * `CountryCode` : le code du pays (texte, clé étrangère vers `country.Code`)

        * `Language` : la langue concernée par cette entrée (texte)

        * `IsOfficial` : cette langue est-elle officielle dans ce pays ? (texte, `T` pour *True*, `F` pour *False*)

        * `Percentage` : le pourcentage de locuteurs dans le pays (nombre décimal)

    Notez que la clé primaire de la table `countryLanguage` est le couple `(CountryCode, Language)`.


Cette base est téléchargeable au format *sqlite* [ici](world.db). La source provient de [ce site](https://dev.mysql.com/doc/index-other.html).

1. Afficher le nom de toutes les villes ainsi que leur population.

    !!! tip "Astuce"

        Vous pouvez rajouter `LIMIT 10` à la fin de votre requête afin de n'afficher que les 10 premiers résultats. Il y a beaucoup de villes !
        
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="51_world/world.db" espace="monde"}}

    ??? done "Réponse"
        
        ```sql
        SELECT Name, Population
        FROM city;
        ```

2. Afficher le nom et la population des villes de plus de huit millions d'habitants (inclus):

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        SELECT Name, Population
        FROM city
        WHERE Population >= 8000000;
        ```

3. Quel est le `Code` de la France ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        SELECT Code
        FROM country
        WHERE Name = 'France';
        ```

4. La ville de Rennes est associée au `District` de `"Haute-Normandie"`. Corriger cette erreur afin de placer Rennes en Bretagne.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        UPDATE city
        SET District = 'Bretagne'
        WHERE Name = 'Rennes';
        ```

5. Insérer la ville de Vannes (`District` de Bretagne et population de 53 719 habitants)

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        INSERT INTO city (District, CountryCode, Name, Population)
        VALUES ("Bretagne", "FRA", "Vannes", 53719);
        ```

6. Quels sont les noms des pays dans lesquels le portugais (`Portuguese` dans la base) est une langue officielle ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        SELECT Name FROM country
        JOIN countrylanguage ON countrylanguage.CountryCode = country.Code
        WHERE Language = 'Portuguese' AND IsOfficial = 'T';
        ```

7. Combien de villes ont un nom débutant par les lettres `Van` ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(Name)
        FROM city
        WHERE Name LIKE "Van%"
        ```

8. Afficher les noms et la population des villes françaises de plus de 200 000 habitants dans l'ordre décroissant de leur population.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        SELECT Name, Population
        FROM city
        WHERE CountryCode = 'FRA' AND Population >= 200000
        ORDER BY Population DESC;
        ```

9. Quel est le nom et la surface du plus petit pays du monde ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        En `sqlite` on peut faire :

        ```sql
        SELECT Name, MIN(SurfaceArea)
        FROM country;
        ```

        Une approche plus classique est toutefois d'utiliser des requêtes imbriquées :

        ```sql
        SELECT Name, SurfaceArea
        FROM country
        WHERE SurfaceArea = (SELECT Min(SurfaceArea) FROM country);
        ```

10. Quel code permettrait de créer la table `district` dont les attributs sont :

    * `id` : un entier, clé primaire
    * `name` : nom du district, au format texte
    * `countryCode` : le code du pays d'appartenance de ce `district`

    `countryCode` est une clé étrangère pointant vers la table `country`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="monde" }}

    ??? done "Réponse"

        ```sql
        CREATE TABLE "district" (
            "id" INTEGER,
            "name" TEXT,
            "countryCode" INTEGER,
            PRIMARY KEY("id"),
            FOREIGN KEY("CountryCode") REFERENCES "country"("Code")
        );
        ```
