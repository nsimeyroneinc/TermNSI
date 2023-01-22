---
author: Nicolas Revéret
title: Voitures
---

# :red_car: Chacun sa voiture

On s'intéresse ici à la base de données `car_database` regroupant diverses informations sur des voitures :

* marque et modèle,
* numéro d'immatriculation (*vehicle immatriculation number*, `vin` dans les tables),
* année de fabrication,
* nom du propriétaire,
* options,
* *etc*...

Les différentes tables sont représentées ci-dessous :

![La base `car_database`](cars.png#only-light)
![La base `car_database`](cars_dark.png#only-dark)

Sur cette figure :

* chaque tableau correspond à une table dont le nom est indiqué sur la première ligne ;

* les lignes suivantes listent les attributs et leur type. `varchar(255)` signifie que l'attribut est un texte de 255 caractères au maximum ;

* les clés primaires de chaque table sont indiquées en gras. Notez que la table `ownerships` a une clé primaire multiple ;

* les clés étrangères sont représentées par des liaisons entre les tables.

Cette base est téléchargeable au format *sqlite* [ici](car_database.db). Ce fichier a été simplifié à partir de cette [source](https://github.com/dtaivpp/car_company_database).

<!-- -->

1. Quelles marques (*brand* en anglais) sont présentes dans la base ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" base="42_cars/car_database.db" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT brand_name
        FROM brands;
        ```

2. Quels sont les noms de famille des clients ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT last_name
        FROM customers;
        ```

3. Quels sont les noms des modèles de la marque « *Supreme* »  ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT model_name
        FROM models
        JOIN brands ON brands.brand_id = models.brand_id
        WHERE brand_name = 'Supreme';
        ```


4. Quel est le prix d'achat (`purchase_price`) de la voiture possédée par « *Maria Swabota* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT purchase_price
        FROM ownerships
        JOIN customers ON ownerships.customer_id = customers.customer_id
        WHERE last_name = 'Swabota' AND first_name = 'Maria';
        ```

5. Quelle est la date de fabrication (`manufactured_date`) de la voiture possédée par « *Maria Swabota* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT manufactured_date
        FROM ownerships
        JOIN customers ON ownerships.customer_id = customers.customer_id
        JOIN cars ON ownerships.vin = cars.vin
        WHERE last_name = 'Swabota' AND first_name = 'Maria';
        ```

6. Quelle est la marque de la voiture possédée par « *Maria Swabota* » ?
    
    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT brand_name
        FROM ownerships
        JOIN customers ON ownerships.customer_id = customers.customer_id
        JOIN cars ON ownerships.vin = cars.vin
        JOIN models ON models.model_id = cars.model_id
        JOIN brands ON models.brand_id = brands.brand_id
        WHERE last_name = 'Swabota' AND first_name = 'Maria';
        ```

7. Quels modèles de voiture sont équipés de 4 roues motrices (elles ont un chassis dont le `part_name` vaut `'4WD Chassis'`) ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT model_name
        FROM models
        JOIN options ON options.model_id = models.model_id
        JOIN parts ON parts.part_id = options.chassis_id
        WHERE part_name= '4WD Chassis';
        ```

8. Reprendre la requête précédente en donnant aussi la marque des véhicules.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT model_name, brand_name
        FROM models
        JOIN brands ON brands.brand_id = models.brand_id
        JOIN options ON options.model_id = models.model_id
        JOIN parts ON parts.part_id = options.chassis_id
        WHERE part_name = '4WD Chassis';
        ```

9. Combien de Ferrari ont été vendues ?

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT COUNT(vin)
        FROM cars
        JOIN models ON models.model_id = cars.model_id
        JOIN brands ON brands.brand_id = models.brand_id
        WHERE brand_name = 'Ferrari';
        ```

10. Quelle voiture, de quel modèle, de quelle marque et appartenant à qui a coûté le plus cher ?

    ??? tip "Astuce"

        Trier les résultats par prix décroissant et ne garder que le premier avec `LIMIT 1`.

    !!! note "Votre réponse"
        {{ sqlide titre="SQL" espace="cars" }}

    ??? done "Réponse"

        ```sql
        SELECT purchase_price, model_name, brand_name, last_name, first_name
        FROM ownerships
        JOIN customers ON ownerships.customer_id = customers.customer_id
        JOIN cars ON ownerships.vin = cars.vin
        JOIN models ON models.model_id = cars.model_id
        JOIN brands ON brands.brand_id = models.brand_id
        ORDER BY purchase_price DESC
        LIMIT 1;
        ```