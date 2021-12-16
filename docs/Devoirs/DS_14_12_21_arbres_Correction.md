<table  style="background-color:  #F0F8FF; width:100%;color:black;">
    <thead>
        <tr>
            <th style="text-align:center;border:solid;border-width:1px;font-size:20pt;width:70%;">Devoir n°4 : Les arbres binaires et arbres binaires de recherche</th>
            <th style="text-align:center;border:solid;border-width:1px;font-size:12pt;width:30%">Thème 1 : Structures de données</th>
        </tr>
          <tr>
            <th style="text-align:center;border:solid;border-width:1px;font-size:15pt;width:70%;"></th>
            <th style="text-align:center;border:solid;border-width:1px;font-size:12pt;width:30%">EVALUATION</th>
        </tr>
    </thead>
</table>


| |Exercice n°1 | Exercice n°2| Exercice n°3| Exercice n°4 : BAC |
|:---:|:---:|:---:|:---:|:---:|
|Barème | 3 pts | 2 pts | 7 pts  | 8 pts |



## Exercice n°1 : 

!!! example "Exercice n°1 :"
    === "Enoncé"
        On considère l'expression suivante : 

        $(3+2 \times (4-2)) / (4 -2 \times (3+1))+ (4-3) / (2- 7 \times (2+5))$  

        Représenter cette expression par un arbre binaire dans lequel les noeuds sont les opérations et les feuilles, les nombres.

    === "Solution"

        ![arbre](data/DS_14_12_21_Abres_Expression.png){:.center}


## Exercice n°2 : Démonstration de cours  

!!! example "Exercice n°2 :"
    === "Enoncé"
        Justifier que pour tout arbre binaire de hauteur h et de taille $n \geq$ 2, on a : 
                $h \leq n \leq 2^h -1$

    === "Solution" 
        La hauteur d'un arbre binaire est la profondeur maximale de ses noeuds. Cependant un arbre binaire d'une taille donnée peut avoir un aspect totalement différent. En effet, les deux arbres binaires suivants sont de même taille (égale à 7) mais ont des "formes" très différentes.

        ![ab.png](data/ab.png){:.center}

        - Dans le premier cas, on a un taille $t$ vérifiant $ $t$=h$  
        - Dans le cas d'un arbre complet, on a :
        $t= 1 + 2 + 2^2 + 2^3 + ... + 2^{h-1}$ 
        ceci est la somme $S$ des $h$ premiers termes d'une suite géométrique de raison 2 et de premier terme 1, d'où $S= \dfrac{1-2^{h}}{1-2} = 2^{h} -1$.

        On en déduit donc l'inégalité sur l'encadrement de la taille $t$ d'un arbre binaire (non nécessairement complet) de hauteur $h$ :

        $h \leqslant t \leqslant 2^{h}-1$


## Exercice n°3 :  
Dans cet exercice, on utilisera la définition suivante pour la hauteur d’un arbre :  

- un arbre possédant un seul nœud (la racine) possède une hauteur $h = 1$  
- un arbre vide possède une hauteur $h = 0$  

On considère l’arbre binaire de recherche représenté ci-dessous, où val représente un entier : 

![arbre](data/DS_14_12_21.png){:.center}

!!! example "Question 1"
    === "Enoncé"
        Indiquer :  

        a) Taille de l’arbre  
        b) Hauteur de l’arbre  
        c) Les feuilles  
        d) Donner les valeurs entières possibles de val pour cet arbre binaire de recherche.  
    === "Solution"
        a) Taille = 12  
        b) hauteur = 4  
        c) Les feuilles sont 1 - 4 - 7 -11 - val et 19  
        d) Les valeurs possibles pour val sont : 13 - 14 et 15.


On suppose pour la suite que **val** est égal à 14
!!! example "Question 2"  
    === "Enoncé"
        S’agit-il d’un arbre complet ? (Justifier la réponse)  
    === "Solution"
        Il ne s'agit pas d'un arbre complet car le noeud 8 a un sous-arbre gauche mais par de sous-arbre droit.


!!! example "Question 3"
    === "Enoncé" 
        Donner le résultat du parcours en profondeur infixe.
    === "Solution"
        1 - 3 - 4 - 6 - 7 - 8 - 9 - 11 - 12 - 14 - 15 - 19

!!! example "Question 4"
    === "Enoncé" 
        Donner le résultat du parcours en profondeur préfixe.
    === "Solution"
         9 - 6 - 3 - 1 - 4 - 8 - 7 - 12 - 11 - 15 - 14 - 19

!!! example "Question 5"
    === "Enoncé" 
        Donner le résultat du parcours en profondeur sufixe.
    === "Solution"
        1 - 4 - 3 - 7 - 8 - 6 - 11 - 14 - 19 - 15 -12 - 9



!!! example "Question 6"
    === "Enoncé" 
        Donner le résultat du parcours en largeur d'abord.
    === "Solution"
        9 - 6 - 12 - 3 - 8 -11 - 15 - 1 - 4 - 7 - 14 - 19


## Exercice n°4 : Exercice BAC  

**_Notion abordée : les arbres binaires de recherche_**  

Un arbre binaire est soit vide, soit un nœud qui a une valeur et au plus deux fils (le sous-arbre gauche et le sous-arbre droit).

![arbre](data/DS_14_12_21_Arbre.png){:.center}

- X est un nœud, sa valeur est X.valeur  
- G1 est le fils gauche de X, noté X.fils_gauche  
- D1 est le fils droit de X, noté X.fils_droit  

Un arbre binaire de recherche est ordonné de la manière suivante :  

Pour chaque nœud X,

- les valeurs de tous les nœuds du sous-arbre gauche sont strictement inférieures à la valeur du nœud X
- les valeurs de tous les nœuds du sous-arbre droit sont supérieures ou égales à la valeur du nœud X


Ainsi, par exemple, toutes les valeurs des nœuds G1, G2 et G3 sont strictement inférieures à la valeur du nœud X et toutes les valeurs des nœuds D1, D2 et D3 sont supérieures ou égales à la valeur du nœud X.  
Voici un exemple d'arbre binaire de recherche dans lequel on a stocké dans cet ordre les valeurs :  

[26, 3, 42, 15, 29, 19, 13, 1, 32, 37, 30]  

L'étiquette d'un nœud indique la valeur du nœud suivie du nom du nœud.  
Les nœuds ont été nommés dans l'ordre de leur insertion dans l'arbre ci-dessous.  
'29, noeud04' signifie que le nœud nommé noeud04 possède la valeur 29.  

![arbre](data/DS_14_12_21_Arbre2.png){:.center}  



!!! example "Question 1"
    On insère la valeur 25 dans l'arbre, dans un nouveau nœud nommé nœud11.  
    Recopier l'arbre binaire de recherche étudié et placer la valeur 25 sur cet arbre en coloriant en rouge le chemin parcouru.  
    Préciser sous quel nœud la valeur 25 sera insérée et si elle est insérée en fils gauche ou en fils droit, et expliquer toutes les étapes de la décision.

!!! example "Question 2"
    Préciser toutes les valeurs entières que l’on peut stocker dans le nœud fils gauche du nœud04 (vide pour l'instant), en respectant les règles sur les arbres binaires de recherche ?

!!! example "Question 3"
    Voici un algorithme récursif permettant de parcourir et d'afficher les valeurs de l'arbre :

    ```python
    Parcours(A) # A est un arbre binaire de recherche
    Afficher(A.valeur)
    Parcours(A.fils_gauche)
    Parcours(A.fils_droit)
    ```

    3.a. Écrire la liste de toutes les valeurs dans l'ordre où elles seront affichées.  
    3.b. Choisir le type de parcours d'arbres binaires de recherche réalisé parmi les propositions suivantes : Préfixe, Suffixe ou Infixe


!!! example "Question 4"
    En vous inspirant de l’algorithme précédent, écrire un algorithme Parcours2 permettant de parcourir et d'afficher les valeurs de l'arbre A dans l'ordre croissant.
