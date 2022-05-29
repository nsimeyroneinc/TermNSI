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
            <th  width="75%"; style="text-align:center;border:none;font-size:20pt;">France Septembre 2021 - Sujet 1 - Correction</th>
        </tr>
</table>


## Exercice n°1 : 

**Partie A**  

!!! fabquestion "1"
    - TCP : protocole de transport chargé de découper et d’assembler les paquets  
    - IP : protocole de routage chargé de trouver la bonne route


!!! fabquestion "2.a"
    Le masque étant 255.255.255.0, on garde les trois premiers nombres de l'adresse IP pour obtenir l'adresse du réseau soit 200.100.10.0

!!! fabquestion "2.b"
    Les adresses possibles pour les machines sont dans la plage : 200.100.10.1 - 200.100.10.254.  
    Soit au total 254 machines possibles.

**Partie B**  

!!! fabquestion "1"
Le masque de sous-réseaux est 255.255.0.0 donc on ne garde que les deux premiers nombres  

    - machine A : 172.16.0.0  
    - machine F : 10.0.0.0  

!!! fabquestion "2"
    - Pour le réseau 1, les machine possèdent toutes la même adresse réseau 172.16.0.0 et font partir du même réseau.  
    - Par contre seules les machines F à I appartiennent au réseau 10.0.0.0. La machine J appartient au réseau 8.0.0.0.  

!!! fabquestion "3"
    Réseeau 1 : $256^^2 - 2$ 

!!! fabquestion "4"
    il est nécessaire d’utiliser un routeur qui va servir de passerelles entre les réseaux.  
    Et on va utiliser deux switch pour relier les ordinateurs de chaque réseau.  

    - A, B, C, D et E sur un switch connecté au routeur
    - F, G, H, I sur un 2eme switch connecté au routeur
    - J directement connecté au routeur


## Exercice n°2  

**Partie A**  

!!! fabquestion "1"
    Vrai  

!!! fabquestion "2"
    Logarithmique, (on divise en 2 à chaque étape)   
    On pose $n=2^p$  
    - A chaque étape on divise par 2 : 
        - etape 1 : $2^{p-1}$
        - etape 2 : $2^^{p-2}
        - etc 

    On a alors $n=2^p$ etapes soit p = log_2(n)$ d'où une comp^léxité de $O(log(n))$


!!! fabquestion "3"
    - fin → $1/2^n$ taille(liste) – 1, donc fin → -1 quand n → +∞  
    - deb → 1/2n taille(liste) + 1, donc deb → + 1 quand n → +∞  
    la condition de continuation deb <= fin n’est plus réalisée

**Partie B** 

!!! fabquestion "1"
    La liste est passée en paramètre et on ne connaît pas à priori la taille de liste

!!! fabquestion "2"
    ```
    algorithme quotient(numérateur : entier, diviseur : entier) : entier
        quotient : entier := 0
        tant que ( ((quotient + 1) * diviseur) < numérateur ) faire
            quotient := quotient + 1
        renvoyer quotient
    ```

!!! fabquestion "3"

!!! fabquestion "4"
    ```python
    def rechercheDicho(elem, liste):
        deb = 0
        fin = len(liste)-1
        m = (deb + fin) // 2
        while deb <= fin :
            if liste[m] == elem :
                return True, m
            elif liste[m] > elem :
                fin = m-1
            else :
                deb = m+1
            m = (deb + fin) // 2
        return False, -1
    ```

**Partie C**  

!!! fabquestion "1"
    Programme qui s’appelle lui même


!!! fabquestion "2"
    ```python
    def rechercheDicho(elem : str, liste : list, deb : int, fin : int) -> bool:
    """ recherche dichotomique d’un élément dans une liste renvoie True si l’objet a été trouvé, False sinon."""
        if deb > fin :
            return False
        m = (deb + fin) // 2
        if liste[m] == elem :
            return True
        elif liste[m] > elem :
            return rechercheDicho(elem, liste, deb, m-1)
        else :
            return rechercheDicho(elem, liste, m+1, fin)
    ```


## Exercice n°3 : SQL

**Partie A** 

!!! fabquestion "1"
    - Table : Aeroport  
    - Attribut : codeIATA 

!!! fabquestion "2"
    - a : 1 
    - b : 3  

**Partie B**  

!!! fabquestion "1"
    - Contrainte d’intégrité référentielle : la clef étrangère BCN n’existe pas dans la table Aeroport

!!! fabquestion "2"
    - Contrainte d’intégrité de clé : la clef F-KI452 existe déjà dans la table Avion

!!! fabquestion "3 "
    - Contrainte d’intégrité de domaine : le valeur « environ 200 » n’est pas de type entier

**Partie C** 

!!! fabquestion "1"
    Supprime tous les vols de la table vol dont la date de départ est antérieure au 11 janvier 2021

!!! fabquestion "2"
    ```sql
    INSERT INTO Type VALUES (ʺA310ʺ,250, ʺAirbusʺ) ;
    ```

!!! fabquestion "3"
    ```sql
    SELECT DISTINCT Type.nomT
    FROM Type, Vol, Avion
    WHERE Vol.dateVol = ʺ10/01/2021ʺ
    AND Avion.numA = Vol.numAvion
    AND Type.nomT = Avion.type
    ORDER BY Type.nomT ASC
    ```


## Exercice n°4 :

**Partie A**  

!!! fabquestion "1"
    - _nom : str (nom de la chambre), accesseur get_nom()  
    - _occupation : list (tableau de 365 booléens), accesseur get_occupation(), mutateur reserver()  

!!! fabquestion "2"
    assert 0 < date < 366

!!! fabquestion "3"
    ```python
    def AnnulerReserver(self, date : int):
        assert 0 < date < 366
        self._occupation[date - 1] = False
    ```

**Partie B**  

!!! fabquestion "1"
    ```python
    GiteBN.ajouter_chambres("Ch1")
    ```

!!! fabquestion "2"
    ```python
    def ajouter_chambres(self, nom_ch : str) -> bool:
        if nom_ch not in self.get_nchambres():
            self._chambres.append(Chambre(nom_ch))
            return True
        return False
    ```

!!! fabquestion "3.a"
    Tableau d’objet Chambre

!!! fabquestion "3.b"
    Ch2

!!! fabquestion "3.c"
    - get_chambres() : tableau d’objet Chambre  
    - get_nchambres() : tableau de nom de chambre  

!!! fabquestion "4.a"
    la liste des chambres inoccupées en date du jour j

!!! fabquestion "4.b"
    `def mystere(self, date : int) -> list:`  
    
    - attribut : self._chambres  
    - méthode : get_occupation()  get_nom()


## Exercice n°5 :  

!!! fabquestion "1.a"
    Un arbre binaire de recherche est un **arbre binaire** dans lequel **chaque noeud possède une clé**, telle que chaque noeud du sous-arbre gauche ait une clé **inférieure** ou égale à celle du noeud considéré, et que chaque noeud du sous-arbre droit possède une clé **supérieure** ou égale à celle-ci. 

!!! fabquestion "1.b"
    15 

!!! fabquestion "1.c"
    Hauteur : 4

!!! fabquestion "2"


!!! fabquestion "3"
    2 3 4 6 7 9 13 15 17 18 20  
    on obtient une liste triée

!!! fabquestion "4"
    ```
    Recherche(A, x) :
        Si EstVide(A) alors Faux
        Si Racine(A) = x alors Vrai
        Si x<Racine(A) alors Sag(A, x)
        Sinon Sad(A, x)
    ```

