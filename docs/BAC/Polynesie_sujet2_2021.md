<table  style="table-layout: fixed;background-color:#87A96B; border:solid;color:black;width:100%;">
        <tr>
            <th style="background-color: #3B444B;color:white;text-align:center;border:none;font-size:12pt;">
            Thème  : Sujet écrit BAC
            </th>
        </tr>
</table>
<table  style="table-layout: fixed;background-color:#87A96B; border:solid;color:black;width:100%;">
        <tr >
            <th width="25%"; style="background-color: #3B444B;color:white;text-align:center;border:none;font-size:30pt;">
            BAC
            </th>
            <th  width="75%"; style="text-align:center;border:none;font-size:20pt;">Polynésie 2021 - Sujet 2</th>
        </tr>
</table>


## Exercice 1 

### Partie A

!!! fabquestion  "Q1"
    8  
    [8, 7, 18, 16, 12, 9, 17, 3]

!!! fabquestion  "Q2`"
    ```python
    print(notes[2:5])
    ```

    ou

    ```python
    for i in [2,3,4]:
        print(notes[i])
    ```

    ou

    ```python
    for i in range[2,5]:
        print(notes[i])
    ```
### Partie B


!!! fabquestion  "Q1"

    ```
    def tri_insertion(liste):
        """trie par insertion la liste en paramètre """
        for indice_courant in range(1, len(liste)):
            element_a_inserer = liste[indice_courant]
            i = indice_courant - 1
            while i >= 0 and liste[i] > element_a_inserer:
                liste[i+1] = liste[i]
                i = i - 1
            liste[i + 1] = element_a_inserer
    ```

!!! fabquestion  "Q2"
    `[7, 8, 18, 14, 12, 9, 17, 3]`

!!! fabquestion  "Q3"
    `[7, 8, 14, 18, 12, 9, 17, 3]`

### Partie C


!!! fabquestion  "Q1"
    récursif : à l'étape (3) l'algorithme de tri fusion s'appelle lui-même.

!!! fabquestion  "Q2"
    1.  Comparer les cartes du haut des 2 tas.  
    2.  Placer la carte de valeur plus faible dans la main.  
    3.  Recommencer l'étape 1 jusqu'à épuisement des tas.  
    4.  On pose ensuite le dernier tas restant.  

!!! fabquestion  "Q3"
    ```python
    from math import floor
    def tri_fusion (liste, i_debut, i_fin):
        """ trie par fusion la liste en paramètre depuis i_debut jusqu'à i_fin """
        if i_debut < i_fin:
            i_partage = floor((i_debut + i_fin) / 2) # milieu pour diviser le tableau en deux moitiés 
            tri_fusion(liste, i_debut, i_partage)  # Appel tri_fusion pour 1ère moitié du tableau 
            tri_fusion(liste, i_partage + 1, i_fin) # Appel tri_fusion pour 2ème moitié du tableau
            fusionner(liste, i_debut, i_partage, i_fin) # Fusion des deux moitiés triées
    ```

!!! fabquestion  "Q4"
    permet d'importer la fonction floor() du module math utilisée à la ligne 7

### partie D

!!! fabquestion  "Q1"
    tri par fusion : à chaque étape, le tri se fait par fusion de 2 tas déjà triés

!!! fabquestion  "Q2"
    -   tri par insertion : $O(n²)$  
    -   tri par fusion : $O(n.\log_2 n)$
!!! fabquestion  "Q3"
    -   Le tri par insertion utilise 2 boucles imbriquées, soit dans le pire des cas  $\dfrac{1/2} n(n+1)$ opérations.  
    -   Le tri par fusion, divise la liste à trier par 2 pour chaque itérations, soit  $\log_2 n$ opérations. répeter $n$ fois.


## Exercice 2


### Partie A

!!! fabquestion  "Q1"
    -   Clients : IdClient  
    -   Articles : IdArticle  

!!! fabquestion  "Q2"
    -   Email : VARCHAR(50), chaîne de 50 caractères  
    -   Quantity : INT, entier signé  

!!! fabquestion  "Q3"  
    ```sql
    CREATE TABLE Commandes (
        IdCmdINT PRIMARY KEY,
        IdClientINT,
        Date DATE,
        AdresseLivraisonVARCHAR(90),
        PaiementValideBOOLEAN,
        LivraisonFaiteBOOLEAN,
        FOREIGN KEY(IdClient) REFERENCES Clients (IdClient)
    );
    ```

### Partie B

!!! fabquestion  "Q1"
    La méthode POST fait passer les informations à envoyer dans le corps de la requête HTTP et ne figurent pas dans l'adresse URL du serveur, contrairement à la méthode GET.

!!! fabquestion  "Q2"
    Le protocole HTTPS est chiffré de bout en bout ce qui est indispensable pour assurer la confidentialité des transactions bancaires.

!!! fabquestion  "Q3"
    Afin d'assurer la cohérence des données en vue de leur traitement ultérieur. Ex : envoi d'un mailing.

### Partie C

!!! fabquestion  "Q1"
    ```sql
    SELECT IdArticle, Libelle
    FROM Articles
    WHERE PrixEnCentimes < 1500
    ```

!!! fabquestion  "Q2"
    La requête sélectionne tous les identifiants et les mèls des clients, ainsi que les identifiants et les adresses de livraison de leurs commandes pour des paiements qui n'ont pas été validés.

!!! fabquestion  "Q3"
    ```sql
    SELECT Articles.Libelle
    FROM Articles, ArticlesCommande
    WHERE ArticlesCommande.IdCmd = 1345
    AND ArticlesCommande.IdArticle = Articles.IdArticle
    ORBER BY Articles.Libelle
    ```

!!! fabquestion  "Q4"
    ```sql
    INSERT INTO Articles VALUES(NULL, 'Imperméable', 'Cet imperméable se replie en forme de pochette.', 999)
    ```

### Partie D

!!! fabquestion  "Q1"

    ---------------- ------------- -- ------------------ -------------
    Articles                          Clients            
    IdArticle        INT              IdClient           INT
    Libelle          VARCHAR(50)      Nom                VARCHAR(50)
    Description      VARCHAR(90)      Prenom             VARCHAR(50)
    PrixEnCentimes   INT              Email              VARCHAR(50)
    Stock            INT              AdresseLivraison   VARCHAR(90)
    ---------------- ------------- -- ------------------ -------------

!!! fabquestion  "Q2"
    Il ne faut pas décrémenter stock de 1 mais de la quantité commandée : Stock ← Stock -- Quantité

## Exercice 3


### Partie A

!!! fabquestion  "Q1"

    -   Racine : 5  
    -   Fils gauche : 2  
    -   Fils droit : 7
    
!!! fabquestion  "Q2" 
    Noeuds : [5, 2]

!!! fabquestion  "Q3"

    ![](data/PolynesieQ3.png)


### Partie B

!!! fabquestion  "Q1"
    __init__ initialise les attributs de l'objet lors de l'instanciation de la classe.

!!! fabquestion  "Q2" 
    L'élément à insérer est ignoré.

!!! fabquestion  "Q3"
    ```python
    arbre = ABR(5)  
    arbre.insererElement(2)  
    arbre.insererElement(3)  
    arbre.insererElement(7)  
    arbre.insererElement(8)
    ```

### Partie C


!!! fabquestion  "Q1"
    Parcours infixe

!!! fabquestion  "Q2"
    La complexité est de l'ordre du tri par fusion \~ O(nln~2~n)  
    Alors que les complexités des tris par sélection et insertion sont \~ O(n²)

## Exercice 4


### Partie A


!!! fabquestion  "Q1"
    Le réseau fonctionne sur le principe de la commutation de paquets. TCP découpe le message en paquets (datagrammes). Ces paquets sont routés par IP grâce aux en-têtes qui encapsulent le message.

!!! fabquestion  "Q2a"
    -   Le sommets représentent le nom des routeurs.  
    -   Les arêtes représentent les connexions entre les routeurs.

!!! fabquestion  "Q2b"
    RIP utilise le nombre de sauts entre les routeurs.

### Partie B


!!! fabquestion  "Q1"
    L'interblocage se produit lorsque des processus concurrents s'attendent mutuellement.  
    Exemple d'interblocage : le processus *P1* utilise la ressource *R2* qui est attendue par le processus *P2* qui utilise la ressource *R1*, attendue par *P1*.  

!!! fabquestion  "Q2"
    -   Utilisation de mutex.  
    -   Algorithme du Banquier.  

### Partie C


!!! fabquestion  "Q1"


!!! fabquestion  "Q2"
    -   IP : UC. Registre qui contient l'adresse mémoire de l'instruction  en cours d'exécution ou prochainement exécutée. Une fois l'instruction chargée, il est automatiquement incrémenté pour pointer l'instruction suivante.  
    -   IR : UC. Registre qui contient l'instruction en cours d'exécution ou de décodage.

!!! fabquestion  "Q3"

!!! fabquestion  "Q4"
    -   Mémoire morte : mémoire non volatile dont le contenu est fixé lors de leur fabrication, qui peut être lue plusieurs fois et qui n'est
    pas prévue pour être modifiée.  
    -   Mémoire vive : mémoire volatile dans laquelle des données peuvent être écrites, lues et modifiées.

    Un microcontrôleur exécute un programme dès qu\'il est mis sous tension. Ce programme ne doit pas être modifié par un simple utilisateur.

### Partie D


!!! fabquestion  "Q1"
    Chaque microprocesseur peut effectuer une tâche spécialiser pour augmenter la rapidité du traitement.

!!! fabquestion  "Q2"
    La vitesse des différents composants (CPU, RAM, circuits d'entrées/sorties, ...) évolue en fonction de la technologie. Cette évolution n'est pas la même pour tous les composants.

!!! fabquestion  "Q3"
    La miniaturisation permet d'avoir des fonctions avancées de taille réduite, facile à intégrer physiquement dans des systèmes dits embarqués.

!!! fabquestion  "Q4"
    La puissance de calcul est généralement plus faible qu'avec une architecture classique.

## Exercice 5


Partie A
--------

!!! fabquestion  "Q1"
    -   Relation Films : IdFilm 
    -   Relation Abonnés : IdAbonne

!!! fabquestion  "Q2"
    -   IdFilm : entier non signé  
    -   Description : chaîne de 150 caractères  

!!! fabquestion  "Q3"
    -   clef primaire : IdCpt  
    -   clef étrangère : IdAbonne  

!!! fabquestion  "Q4"
    Il faut créer une Relation Acteurs dont le schéma relationnel est le suivant :
    ```sql
    Acteurs(*IdActeur*, Nom, Prenom)
    ```

    -   La clef primaire est souligné.
    -   Les attributs Nom et Prenom doivent être de type VARCHAR(20)
    -   Il faut définir une clef unique sur le couple (Nom, Prenom) pour éviter les doublons.

    Et une relation ActeursPrincipaux dont le schéma relationnel est le suivant :

    ```sql
    ActeursPrincipaux(#IdActeur, #IdFilm)
    ```

-   Les clef étrangères commencent par # et référencent respectivement les relations Acteurs et Films.

!!! fabquestion  "Q5"
    -   Il faut rajouter un Attribut DateNaissance de type DATE à la relation Clients.
    -   Et ajouter un attribut AgeMinimum de type INT à la relation Films.

### Partie B

!!! fabquestion  "Q1"
    ```sql
    SELECT IdCpt, Pseudo 
    FROM ComptesAbonnes 
    WHERE IdAbonne = 237
    ```

!!! fabquestion  "Q2"
    Calcule la moyenne du nombre d'étoiles attribué au film dont l'identifiant est 1542

!!! fabquestion  "Q3"
    Sélectionne, par ordre décroissant en nombre d'étoiles, les identifiants, les titres des films et les nombres d'étoiles attribués par le compte abonné n° 508

!!! fabquestion  "Q4"
    ```sql
    UPDATE ComptesAbonnes 
    SET pseudo = 'Champion' 
    WHERE IdAbonne = 508
    ```

### Partie C


!!! fabquestion  "Q1"
    La fonction calcule, dans une liste de films non vide, la moyenne des écarts des notes attribuées à chaque film par deux comptes d'abonnés.

!!! fabquestion  "Q2"
    ```python
    def conseilsFilms(IdCpt : int) -> list:
        conseils = []
        liste_films = podiumCompte(IdCpt)
        liste_spectateurs = spectateurs(liste_films)
        for spectateur in liste_spectateurs:
            if distance(IdCpt, spectateur, liste_films) < 10:
                film_preferes = podiumCompte(spectateur)
                for i in range(3):
                    if i < len(film_preferes):
                        conseils.append(film_preferes[i])
        return conseils
    ```
