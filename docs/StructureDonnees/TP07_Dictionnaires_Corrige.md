---
title : TD - Les dictionnaires
---

<table  class="blueTable">
        <tr>
            <th>
            Thème 1 : Structure de Données
            </th>
        </tr>
</table>
<br>
<table  class="blueTable">
        <tr >
            <th width="20%"; style="background-color: #3B444B;color:white;text-align:center;border:none;font-size:40pt;">
            07
            </th>
            <th  width="80%"; style="text-align:center;border:none;font-size:25pt;">Les dictionnaires</th>
        </tr>
</table>
<br>


## Introduction 

Prenons l'exemple d'un répertoire téléhonique. Nous pouvons le mémoriser simplement comme un tableau (ou liste) de tableaux `[nom,numéro]`


```python
liste_tel = [["Paul", 5234],
             ["Emile", 5345],
             ["Victor", 5186],
             ["Rose", 5678],
             ["Hélène", 5432]]
```

Si nous voulons appeler *Rose*, nous avons deux possibilités avec un tel tableau :
* soit il faut savoir que les informations la concernant sont dans le quatrième élément de la liste (ce qui ne semble pas très pratique et réaliste)


```python
print(liste_tel[3][1]) # il faut savoir que l'index de Rose est 3
```

* soit nous cherchons dans le tableau en partant du premier élément de la liste jusqu'à ce que nous trouvions *Rose* (ce qui revient à feuilleter son répertoire) : cela nécessite d'utiliser une boucle pour parcourir le tableau.


```python
for element in liste_tel:
    if element[0] == 'Rose':
        print(element[1])
```

Vous conviendrez que ce n'est pas pratique pour accéder à son numéro de téléphone. De même, la modification ou l'ajout d'un information nécessiterait de devoir feuilleter tout le répertoire. Il semblerait plus pratique d'associer un nom à un numéro, autrement dit d'associer à une **information** à une **clé**.

C'est ce que les dictionnaires permettent !

## Les dictionnaires en Python

Un dictionnaire, de type dict en Python,  est un ensemble <strong>non ordonné</strong> de paires (clé, valeur) avec un accès très rapide à la valeur à partir de la clé.  

C'est un type de conteneur comme les list et les tuple mais ce n'est pas une séquence. Au sens où les valeurs des tableaux ne sont pas indexés par des entiers.


On peut ajouter des couples (clé, valeur) à un dictionnaire, si la clé figure déjà dans le dictionnaire alors le couple est remplacé par le nouveau.  
* Une **clé** peut être de type alphabétique, numérique, ou même de type construit sous certaines conditions.  
* Les **valeurs** pourront être de tout type sans exclusion.  

En Python, le dictionnaire est un objet **mutable**, autrement dit, on peut le modifier.  

A partir d’une clé, on peut alors accéder directement à la valeur qui lui est associée.


**Exemples :**


```python
dico={"yes":"oui", "no":"non","and":"et", "nsi":"dansletop2despé", "maths":"dansletop2desspé"}
dico
```


```python
 jours={1:"lundi",2:"mardi",3:"mercredi",4:"jeudi",5:"vendredi",6:"samedi",7:"dimanche"}
 jours
```


```python
Balzac={'pnom':'Honoré de Balzac','nais':1799,'mort':1850,'romans':['Les Chouans','La Peau de chagrin','Les Contes drolatiques','Eugénie Grandet','Le Père Goriot','Le Colonel Chabert','Le Lys dans la vallée','Illusions perdues','Ursule Mirouët','La Cousine Bette','Le Cousin Pons']}
Balzac
```

### Création d'un dictionnaire

Plusieurs méthodes permettent de créer soit un dictionnaire vide, soit de le noter en extension, soit par compréhension.


```python
d1 = {}     # Création d'un dictionnaire vide
d2 = dict() # Création d'un dictionnaire vide (autre méthode)
d3 = {'poires': 5, 'bananes': 7, 'abricots' : 12} # création d'un dictionnaire par extension
d4 = {k: k**2 for k in range(1, 10)} # création d'un dictionnaire par compréhension

print(type(d1))
```

**Question 1 :**  
Donner l'expression du dictionnaire d4

**Réponse :**  



```python
print("d1 =>", d1)
print("d2 =>", d2)
print("d3 =>", d3)
print("d4 =>", d4)
```

Il est même possible de **créer un dictionnaire à partir d'une liste de couples.**


```python
liste = [('cle1','valeur1'),('cle2','valeur2')]
d5 = dict(liste)
liste_tel = [["Paul", 5234], ["Emile", 5345], ["Victor", 5186], ["Rose", 5678], ["Hélène", 5432]]
d6 = dict(liste_tel)

print("d5 =>", d5)
print("d6 =>", d6)
```

> **Important** : Vous aurez noté que les dictionnaires Python se représentent entre accolades `{}`. Les différentes paires sont séparées par des virgules et sont de la forme `clé: valeur`.

---
#### A vous 1 

Créez un dictionnaire appelé `notes` qui contient les paires (matières, moyenne) de vos trois spécialités. Affichez ensuite ce dictionnaire.


```python
# à vous de jouer !
notes={'NSI':18,'Maths':15,'PC':14}
notes
```




    {'NSI': 18, 'Maths': 15, 'PC': 14}



---
### Accès, modification, ajout, suppression

L'**accès** à une valeur d'un dictionnaire se fait par sa clé.


```python
d3 = {'poires': 5, 'bananes': 7, 'abricots' : 12}
d3['abricots']
```

Le dictionnaire étant un objet *mutable* on peut **modifier** la valeur associée à une clé ou **ajouter** une nouvelle association et afficher le dictionnaire modifié.


```python
d = {'Paul': 5234, 'Emile': 5345, 'Victor': 5186, 'Rose': 5678, 'Hélène': 5432}
d['Rose'] = 4921    # clé existante donc modification de la valeur
d['Louane'] = 4118  # nouvelle clé donc ajout d'une nouvelle association
print(d)
```

Pour **supprimer** une association d'un dictionnaire on peut utilise le mot clé `del`.


```python
print(d)
del d['Paul']
print(d)
```

### Taille d'un dictionnaire

La fonction `len` renvoie la taille d'un dictionnaire.


```python
d3 = {'poires': 5, 'bananes': 7, 'abricots' : 12}
len(d3)
```

---
#### A vous 2

On reprend le dictionnaire `notes` de A vous 1.

```python
notes={'NSI':18,'Maths':15,'PC':14}
```

1. Affichez la moyenne de NSI.


```python
notes={'NSI':18,'Maths':15,'PC':14}
notes['NSI']
```




    18



2. Modifiez votre moyenne de NSI qui a gagné 2 points. Affichez le dictionnaire.


```python
notes['NSI']+=2
notes
```




    {'NSI': 20, 'Maths': 15, 'PC': 14}



3. Ajoutez la matière `Anglais` avec sa moyenne. Affichez le dictionnaire.


```python
notes['Anglais']=17
notes
```




    {'NSI': 20, 'Maths': 15, 'PC': 14, 'Anglais': 17}



4. Affichez la taille du dictionnaire.


```python
taille=len(notes)
taille
```




    4



5. Supprimez une des trois spécialités et affichez le dictionnaire.


```python
del notes['PC']
notes
```




    {'NSI': 20, 'Maths': 15, 'Anglais': 17}



---

## Les itérateurs pour les dictionnaires

Il est possible de parcourir un dictionnaire de trois manières :

- parcourir l'ensemble des **clés** avec la méthode `keys()` ;
- parcourir l'ensemble des **valeurs** avec la méthode `values()` ;
- parcourir l'ensemble des **paires clés-valeurs** avec la méthode `items()`.

On peut itérer sur un dictionnaire grâce à l'une de ces méthodes.


```python
d = {'Paul': 5234, 'Emile': 5345, 'Victor': 5186, 'Rose': 5678, 'Hélène': 5432}
for prenom in d.keys():
    print(prenom)
```


```python
for num in d.values():
    print(num)
```


```python
for prenom, num in d.items():
    print(prenom, '->', num)
```

On peut aussi interroger l'appartenance d'une valeur ou d'une clé grâce au mot clé `in`.


```python
'John' in d.keys()
```


```python
'Paul' not in d.keys()
```


```python
5186 in d.values()
```

---
#### A vous 3

On considère le dictionnaire `fruits` suivant.


```python
fruits = {'poires': 5, 'pommes': 11, 'bananes': 7, 'abricots' : 12}
```

1. Affichez tous les fruits du dictionnaire.


```python
for f in fruits.keys():
    print(f)
```

    poires
    pommes
    bananes
    abricots


2. Affichez toutes les quantités du dictionnaire. 


```python
for valeur in fruits.values():
    print(valeur)
```

    5
    11
    7
    12


3. Ecrivez un programme permettant d'obtenir l'affichage suivant.

```
Il reste 5 poires
Il reste 11 pommes
Il reste 7 bananes
Il reste 12 abricots
```


```python
for cle,valeur in fruits.items():
    print(f'il reste {valeur} {cle}')
```

    il reste 5 poires
    il reste 11 pommes
    il reste 7 bananes
    il reste 12 abricots



## Les dictionnaires : EXERCICES


###  Exercice 1 :
On considère le dictionnaire suivant qui contient différents fruits ainsi que leurs quantités.


```python
fruits = {"pommes": 8, "melons": 3, "poires": 6}
```

1. Quelle instruction permet d'accéder au nombre de melons ?


```python
fruits['melons']
```




    3



2. On a acheté 16 clémentines et utilisé 4 pommes pour faire une tarte. Quelles instructions permettent de mettre à jour le dictionnaire ?


```python
fruits['pommes']+=4
fruits['clementines']=16
fruits
```




    {'pommes': 12, 'melons': 3, 'poires': 6, 'clementines': 16}



###  Exercice 2 :
Répondez aux questions suivantes **sans exécuter les scripts proposés**. *Vous les exécuterez pour vérifier vos réponses.*
1. Qu'affiche le programme suivant ?


```python
fruits = {'pommes': 4, 'melons': 3, 'poires': 6, 'clémentines': 16}
for c in fruits.keys():
    print(c)
```



2. Qu'affiche le programme suivant ?


```python
fruits = {'pommes': 4, 'melons': 3, 'poires': 6, 'clémentines': 16}
for cle, valeur in fruits.items():
    print(cle, "->", valeur)
```

**Réponse :**  


3. Qu'affiche le programme suivant ?


```python
fruits = {'pommes': 4, 'melons': 3, 'poires': 6, 'clémentines': 16}
for v in fruits.values():
    print(v)
```

**Réponse :**  


###  Exercice 3 :
On considère qu'il faut ajouter un fruit sur la liste des courses s'il en reste 4 ou moins.<br>
1. Ecrivez un programme qui affiche la liste des courses en considérant le dictionnaire suivant.


```python
fruits = {'pommes': 4, 'melons': 3, 'poires': 6, 'clémentines': 16}
# à compléter :
for nom,num in fruits.items():
    if num<=4:
        print(f'il faut racheter des {nom}, il en reste {num}')
```

    il faut racheter des pommes, il en reste 4
    il faut racheter des melons, il en reste 3


2. Ecrivez une fonction `liste_courses(fruits)` qui prend en paramètre un dictionnaire `fruits` et qui renvoie un tableau avec les fruits de la liste de courses. 


```python
def liste_courses(fruits):
    liste=[]
    for nom,num in fruits.items():
        if num<=4:
            liste.append({nom:num})
            #on rajoute le fruit et la valeur restante sous forme de dictionnaire
    return liste

liste_courses(fruits)
```




    [{'pommes': 4}, {'melons': 3}]



###  Exercice 4 : 
On dispose d’un dictionnaire associant à des noms de commerciaux d’une société le nombre de ventes
qu’ils ont réalisées. Par exemple :
<code>ventes={"Dupont":14, "Hervy":19, "Geoffroy":15, "Layec":21}</code>
1. Écrivez une fonction qui prend en entrée un tel dictionnaire et renvoie le nombre total de ventes
dans la société.
2. Écrivez une fonction qui prend en entrée un tel dictionnaire et renvoie le nom du vendeur ayant
réalisé le plus de ventes. Si plusieurs vendeurs sont ex-aequo sur ce critère, la fonction devra retourner
le nom de l’un d’entre eux.


```python
def total_ventes(ventes):
    somme=0
    for valeur in ventes.values():
        somme+=valeur
    return somme

ventes={"Dupont":14, "Hervy":19, "Geoffroy":15, "Layec":21}

reponse=total_ventes(ventes)

print(f"Le total des ventes est {reponse}")
```

    Le total des ventes est 69


###  Exercice 5 :

Voici deux dictionnaires :


```python
athletes = {"Mike": (1.75, 68), "John": (1.89, 93), "Kate": (1.67, 62)}
sportifs = {"Mike": {"taille": 1.75,"poids": 68}, "John": {"taille": 1.89,"poids": 93}, "Kate": {"taille": 1.67,"poids": 62}}
```

1. De quel type sont les clés des deux dictionnaires `athletes` et `sportifs`? De quels types sont les valeurs de ces deux dictionnaires ?

**Réponse :**  


2. Quelle instruction permet d'accéder à la taille de Kate dans le dictionnaire `athletes` ?


```python
taille=athletes['Kate'][0] #on accéde d’abord aux informations concernat Kate puis on prend la premiere valeur
print(f'Kate mesure {taille}')
```

    Kate mesure 1.67


3. Quelle instruction permet d'accéder à la taille de Kate dans le dictionnaire `sportifs` ?


```python
sportifs["Kate"]["taille"]
```




    1.67



### Exercice  6 :
Le Scrabble est un jeu de société où l'on doit former des mots avec tirage aléatoire de lettres, chaque lettre valant un certain nombre de points. Le dictionnaire `scrabble` contient cette association entre une lettre et son nombre de points.


```python
scrabble = {'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 10, 'L': 1, 'M': 2, 'N': 1, 'O': 1, 'P': 3, 'Q': 8, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 10, 'X': 10, 'Y': 10, 'Z': 10}
```

Ecrivez une fonction `points(mot)` qui renvoie le nombre de points au scrabble de `mot`, qui est une chaîne de caractères majuscules.

*Par exemple, le mot "ARBRE" doit rapporter 7 points, le mot "XYLOPHONE" doit rapporter 32 points*.


```python
def points(mot):
    mot=mot.upper()
    #mise du mot en majuscule
    scrabble = {'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 10, 'L': 1, 'M': 2, 'N': 1, 'O': 1, 'P': 3, 'Q': 8, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 10, 'X': 10, 'Y': 10, 'Z': 10}
    score=0
    for lettre in mot: #on parcours chaque lettre du mot
        score+=scrabble[lettre] #on ajoute la valeur de la lettre au score
    return score


assert points("XYLOPHONE")==32
assert points("Arbre")==7
```

###  Exercice  7 :
On considère la variable `personnages` suivante qui réunit quelques informations sur des personnalités (les âges sont fictifs, vous l'aurez compris).


```python
personnages = [{'nom': 'Einstein', 'prénom': 'Albert', 'âge': '35', 'genre': 'm'},
           {'nom': 'Hamilton', 'prénom': 'Margaret', 'âge': '23', 'genre': 'f'},
           {'nom': 'Nelson', 'prénom': 'Ted', 'âge': '64', 'genre': 'm'},
           {'nom': 'Curie', 'prénom': 'Marie', 'âge': '41', 'genre': 'f'}]
```

1. Quel est le type de la variable `personnages`? Quel est le type des éléments de `personnages` ?

**Réponse :**  


2. Quelle instruction permet d'accéder au dictionnaire de Ted Nelson ?


```python
position=0
for p in personnages:
    if p['prénom']=='Ted' and p['nom']=='Nelson':
        print(personnages[position])
    else:
        position+=1
```

    {'nom': 'Nelson', 'prénom': 'Ted', 'âge': '64', 'genre': 'm'}


3. Quelle instruction permet d'accéder à l'âge de Ted Nelson ?


```python
position=0
for p in personnages:
    if p['prénom']=='Ted' and p['nom']=='Nelson':
        print(personnages[position]['âge'])
    else:
        position+=1
        

```

    64


4. Dans le programme suivant, quel est le type de la variable `p` à chaque tour de boucle ? Quel est le rôle de ce programme ?  
```
for p in personnages:
    if int(p['âge']) <= 40:
        print(p['nom'], p['prénom'])
```

**Réponse :**  


5. Proposez un programme qui affiche uniquement les noms et prénoms des femmes du tableau `personnages`.


```python
for p in personnages:
    if p['genre'] =='f':
        print(p['nom'], p['prénom'])
```

    Hamilton Margaret
    Curie Marie


6. Ecrivez une fonction `age_moyen(personnages)` qui renvoie l'âge moyen des personnalités du tableau `personnages` entré en paramètre. *On doit trouver 40,75 ans*.


```python
def age_moyen(personnages):
    total_age=0
    for p in personnages:
        total_age+=int(p['âge'])
    moy=total_age/len(personnages)
    return moy

age_moyen(personnages)
```




    40.75



###  Exercice  8 :  
On considère le dictionnaire suivant : 


```python
res={'nsi' :18,'maths':17,'svt':14,'français':14,'lv1':8,'physique':12,'HG':11}
```

1. Ajouter la moyenne de 12 en lv2.


```python
res['lv2']=12
res
```




    {'nsi': 18,
     'maths': 17,
     'svt': 14,
     'français': 14,
     'lv1': 8,
     'physique': 12,
     'HG': 11,
     'lv2': 12}



2. Calculer la moyenne des notes.


```python
somme_notes=0
for note in res.values():
    somme_notes+=note
    moy=somme_notes/len(res)
    
print(f'La moyenne est {moy}')
```

    La moyenne est 13.25


Réaliser un affichage des notes qui ressemble à cela :



```
la moyenne en nsi est 18  
la moyenne en maths est 17
etc
la moyenne générale est ... 
```




```python
somme_notes=0
for matiere,note in res.items():
    print(f'la moyenne en {matiere} est {note}')
    somme_notes+=note
print(f'la moyenne générale est {somme_notes/len(res)}')
```

    la moyenne en nsi est 18
    la moyenne en maths est 17
    la moyenne en svt est 14
    la moyenne en français est 14
    la moyenne en lv1 est 8
    la moyenne en physique est 12
    la moyenne en HG est 11
    la moyenne en lv2 est 12
    la moyenne générale est 13.25


###  Exercice  9 :  
1. Ecrire une fonction <code>const_dico(cle,valeur)</code> qui renvoie le dictionnaire définie par les clés et les valeurs entrées en argument.  


```python
def const_dico(cle:list,valeur:list):
    dico={}
    for i in range(len(cle)):
        dico[pseudo[i]]=valeur[i]
    return dico
    
```

2. On donne des listes de certains joueurs de League Of Legend ainsi que leur classement et leur nombre de points :


```python
pseudo=['Major Alexander','KBM Wiz', 'FNC MagiFelix','Avalanche','love camile','Nobody']
classement=[(12,1406),(1,1613),(4,1507),(9,1429),(16,1341),(11,1416)]
```

Appliquer votre fonction const_dico(cle,valeur) sur les joueurs de LOL.


```python
dico=const_dico(pseudo,classement)
dico
```




    {'Major Alexander': (12, 1406),
     'KBM Wiz': (1, 1613),
     'FNC MagiFelix': (4, 1507),
     'Avalanche': (9, 1429),
     'love camile': (16, 1341),
     'Nobody': (11, 1416)}



###  Exercice  10 :  
On donne le dictionnaire suivant :


```python
turing={'nom':'Turing','prenom':('Alan','Mathison'),'nation':'anglaise','naissance' : 1912, 'mort':1954}

```

1. Afficher les prénoms de Turing.
2. Afficher sa nationalité
3. Déterminer l'âge qu'avait Alan Turing à sa mort.


```python
print(turing['prenom'])
print(turing['nation'])
print(turing['mort'])
```

    ('Alan', 'Mathison')
    anglaise
    1954


###  Exercice  11 :  
Voici une citation célèbre de Gandhi :

`La vie est un mystère qu'il faut vivre, et non un problème à résoudre.`

Créer un dictionnaire qui associe à chaque lettre (clé) son occurrence (valeur)  
* Par exemple la lettre 'a' apparait deux fois.  
Par exemple dico= {'a':2, .........}


```python
#création de l’alphabet
alphabet=[chr(num) for num in range(97,97+26)]
alphabet+=['é','è','à']
print(alphabet)
phrase="La vie est un mystère qu’il faut vivre, et non un problème à résoudre."
dico={}
phrase=phrase.lower()
for lettre in phrase:
    if lettre in alphabet:
        if lettre not in dico:
            dico[lettre]=1
        else:
            dico[lettre]+=1
dico
```

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'é', 'è', 'à']





    {'l': 3,
     'a': 2,
     'v': 3,
     'i': 3,
     'e': 7,
     's': 3,
     't': 4,
     'u': 5,
     'n': 4,
     'm': 2,
     'y': 1,
     'è': 2,
     'r': 5,
     'q': 1,
     'f': 1,
     'o': 3,
     'p': 1,
     'b': 1,
     'à': 1,
     'é': 1,
     'd': 1}



###  Exercice 12 : QCM de NSI  
Les réponses correctes d'un QCM de NSI sont stockées dans un dictionnaire nommé reponses_valides. Les clés sont des chaînes de caractères de la forme "Q1". Les valeurs possibles sont des chaînes de caractères correspondant aux quatre réponses "a","b","c","d".

Exemple : <code>reponses_valides = {"Q1":"c","Q2":"a","Q3":"d","Q4":"c","Q5":"b"}</code>

Les réponses données par Alice sont stockées dans le dictionnaire reponses_Alice dont voici un exemple possible :

<code>reponses_Alice = {"Q1":"b","Q2":"a","Q3":"d","Q5":"a"}</code>

Lorsqu'Alice n'a pas répondu à une question, il n'y a pas de clef correspondant au nom de l'exercice.

La notation d'un QCM de NSI est la suivante : 3 points par réponse correcte, -1 point par réponse incorrecte et 0 si l'on n'a pas répondu

Compléter la fonction correction_QCM_Alice(reponses_Alice,reponses_valides) qui, à partir des dictionnaires reponses_Alice et reponses_valides passées en paramètres renvoie le nombre de points obtenus au QCM par Alice.


```python
def correction_QCM_Alice(reponses_Alice,reponses_valides):
    note=0
    for question in reponses_valides.keys():
        if question in reponses_Alice:
            if reponses_Alice[question]==reponses_valides[question]:
                note+=3
            elif reponses_Alice[question] !=reponses_valides[question]:
                note-=1
    return note

reponses_valides = {"Q1":"c","Q2":"a","Q3":"d","Q4":"c","Q5":"b"}
reponses_Alice = {"Q1":"b","Q2":"a","Q3":"d","Q5":"a"}
note_Alice=correction_QCM_Alice(reponses_Alice,reponses_valides)

print(f"Alice obtient la note de {note_Alice}")
```

    Alice obtient la note de 4


### Exercice 13 : L'application "Contacts" de vos smartphones

L'objectif de cette activité est de programmer deux des fonctionnalités importantes des smartphones actuels :

* Ajouter un contact au répertoire ;
* Rechercher un contact dans le répertoire.

On suppose pour simplifier que le repertoire téléphonique est mémorisé dans le smartphone sous la forme d'un dictionnaire et que chaque élément du dictionnaire est une paire (prenom, numero) où prenom est la clé et numero la valeur associée.

#### Etape 1 : Ajouter un contact

On considère que le répertoire téléphonique est mémorisé dans le dictionnaire `repertoire`. Quelques contacts sont déjà enregistrés dans ce répertoire.


```python
repertoire = {'David': 1010, 'Mélanie': 1111, 'Alain': 121212}
```

**Question 1** : Ecrivez une fonction `ajout_contact(repertoire)` qui demande à l'utilisateur de saisir les données (prénom et numéro de téléphone) d'un contact et qui ajoute ce contact à `repertoire`.


```python

```

**Question 2** : On veut maintenant créer une fonction `remplissage` qui permet d'ajouter des contacts au répertoire autant de fois que l'on souhaite. Plus précisément, une fois qu'un contact a été saisi on demande à l'utilisateur s'il souhaite ajouter un autre contact. Complétez la fonction `remplissage` en conséquence. Vous utiliserez la fonction `ajout_contact` écrite à la question précédente.


```python
def remplissage(repertoire):
    encore = True
    # à compléter
        

```

#### Etape 2 : Rechercher un contact

On souhaite maintenant écrire une fonction `numero_de(prenom, repertoire)` qui renvoie le numéro de `prenom` si `prenom` est bien dans `repertoire` et qui renvoie un message sinon. 

**Question 3** : Si `prenom` est présent dans `repertoire`, quelle instruction permet d'afficher le numéro associé à `prenom` ?


```python

```

**Question 4** : Complétez la fonction `numero_de(prenom, repertoire)` qui renvoie le numéro de téléphone associé dans l'affirmative et un message d'erreur sinon.


```python
def numero_de(prenom, repertoire):
    '''prenom est une chaine de caractères et repertoire est un dictionnaire'''
    # à compléter
    
```

###  Exercice 14 :  Quel est le mot de 6 lettres le plus présent dans *Le tour du monde en 80 jours* de Jules Verne ?

Le fichier texte de l'oeuvre de Jules Verne, intitulé `ltdme80j.txt`, a été placé dans le dossier `data` du répertoire de ce notebook. Par souci de simplification, le texte ne contient aucun signe de ponctuation. 

>*De manière générale, le site du Projet Gutenberg permet de récupérer librement le texte de plusieurs milliers d'oeuvres du domaine public : [https://www.gutenberg.org](https://www.gutenberg.org/)*.

#### Etape 1 : Lecture du contenu du fichier

On peut ouvrir et mémoriser dans une variable `texte` le contenu du fichier texte. Pour cela, il suffit d'ouvrir le fichier puis en lire le contenu sous la forme d'une unique chaîne de caractères avec la méthode `read()`. On ferme ensuit le flux de lecture du fichier.



```python
# Ouverture du fichier ('r' pour read = lecture, 'utf-8' pour l'encodage des caractères)
fichier = open("ltdme80j.txt", mode = "r", encoding = "utf-8") 
# Mémorisation du texte de l'oeuvre dans une chaîne de caractères appelée texte
texte = fichier.read() 
# Fermeture du flux de lecture
fichier.close() 

print(texte)
```
      
    


#### Etape 2 : Conversion en un tableau de mots

On peut ensuite convertir la chaîne `texte` en un tableau contenant les différents mots de l'oeuvre. Pour cela, on peut utiliser la méthode `split()` des chaînes de caractères.


```python
tab = texte.split()
print(tab)
```


#### Etape 3 : Compter le nombre d'occurrences de chaque mot

Un cas d’utilisation typique des dictionnaires consiste à compter les occurrences des éléments d’un tableau.

Considérons par exemple le tableau suivant :
```
['b', 'c', 'e', 'b', 'c', 'j', 'd', 'b', 'j', 'a', 'b']
```
Dans cette liste le caractère 'b' est par exemple répété quatre fois, et le 'j' deux fois, etc. L'objectif est de définir une fonction `occurrences(t)` qui renvoie un dictionnaire avec le nombre d'occurences de chaque élément du tableau `t` entrée en paramètre.

Par exemple, la fonction `occurences` appliquée au tableau précédent
```
occurrences(['b', 'c', 'e', 'b', 'c', 'j', 'd', 'b', 'j', 'a', 'b'])
```
doit renvoyer le dictionnaire :
```
{'b': 4, 'a': 1, 'c': 2, 'e': 1, 'j': 2, 'd': 1}
```

**Question 1** : Ecrivez la fonction `occurrences(t)` et testez-la sur un tableau de caractères.


```python
def occurence(tab):
    dico={}
    for elt in tab:
        if elt not in dico:
            dico[elt]=1
        else:
            dico[elt]+=1
    return dico

            
```

**Question 2** : Appliquez la fonction `occurences` à ce tableau pour récupérer un dictionnaire `d` du nombre d'occurences de chaque mot.


```python
occurence(tab)
```




#### Etape 4 : Trouver le mot de 6 lettres le plus présent

**Question 3** : Ecrivez une fonction `mot_6_lettres_plus_frequent(d)` qui renvoie le mot de 6 lettres les plus fréquent dans l'oeuvre de Jules Verne ainsi que son nombre d'occurence. *(réponse : 'heures' avec 243 occurrences)*


```python
def mot_6_lettres_plus_frequent(d):
    rep={}
    for elt in d:
        if len(elt)==6:
            if elt not in rep:
                rep[elt]=1
            else:
                rep[elt]+=1
    maxi=0
    nom=''
    for elt1 in rep:
        if rep[elt1]>maxi:
            maxi=rep[elt1]
            nom=elt1
    return (nom,maxi)

mot_6_lettres_plus_frequent(tab)
                
                
            
```




    ('heures', 243)



**Réponse :** cela revient à effectuer une recherche de maximum sur les occurences des mots de 6 lettres. On parcourt donc toutes les clés du dictionnaire d (les clés sont les mots) et parmi les mots de 6 lettres on regarde si son nombre d'occurence est le nouveau maximum. Dans l'affirmative, ce mot devient le mot le plus fréquent (provisoire) et sa valeur dans le dictionnaire le nombre d'occurrences maximum (provisoire).


```python

```

**Question BONUS** : Ecrire une fonction `mot_plus_frequent(d, k)` qui renvoie le mot de `k` lettres le plus présent dans le dictionnaire `d`. Affichez ensuite le mot le plus fréquent d'une lettre, de deux lettres, etc.


```python
def mot_plus_frequent(d, k):
    rep={}
    for elt in d:
        if len(elt)==k:
            if elt not in rep:
                rep[elt]=1
            else:
                rep[elt]+=1
    maxi=0
    nom=''
    for elt1 in rep:
        if rep[elt1]>maxi:
            maxi=rep[elt1]
            nom=elt1
    return (nom,maxi)


mot_plus_frequent(tab,2)
```




    ('de', 2826)



### Exercice 15 : gestion de commandes    

Compléter les fonction pour répondre aux docstring


```python
global commandes
commandes={'0': {'numero': 'EMA70495', 'nom': 'Ada Lovelace', 'adresse': '64 rue Jocelyne Troccaz', 'ville': 'Tours', 'etat': 'En cours'},
           '1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'},
           '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'},
           '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'},
           '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'},
           '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'},
           '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'},
           '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}
}
```


```python
def afficher_commande_numero(numero_commande):
    '''affiche la commande correspondant au numero
    : numero : str
    : return : print
    '''
    numero=''
    for cle1,valeur1 in commandes.items():
        for cle2,valeur2 in valeur1.items():
            if valeur2==numero_commande:
                numero=cle1
    if numero=='':
        print(f'{numero_commande} : numero commande non enregistré')
    else:
        reponse=commandes[numero]
        for cle,valeur in reponse.items():
            print(f'{cle} : {valeur}')
            
afficher_commande_numero('NLY90647')
```

```python
numero : NLY90647
nom : Hypatie d’Alexandrie
adresse : 51 rue Whitfield Diffie
ville : Bordeaux
etat : En cours


>>>afficher_commande_numero('NLY90647')
   commande :NLY90647
   Nom :Hypatie d’Alexandrie
   Adresse :51 rue Whitfield Diffie
   Ville :Bordeaux
   Etat :En cours
>>>afficher_commande_numero('NLY90687')
   NLY90687: numero commande non enregistré
```

```python
def recherche_par_nom(nom):
    '''recherche les commandes correspondantes au nom
    : nom : str
    : return : un tuple contenant les commandes
    >>> print(recherche_par_nom("Ada Lovelace"))
    ({’numero’: ’EMA70495’, ’nom’: ’Ada Lovelace’, ’adresse’: ’64 rue Jocelyne, Troccaz’, ’ville’: ’Tours’, ’etat’: ’En cours’},{’numero’: ’NKR34542’, ’nom’: ’Ada Lovelace’, ’adresse’: ’98 rue Jules César’, ’ville’: ’Bordeaux’, ’etat’: ’Livrée’})
    >>>print(recherche_par_nom("Alan Turing"))
    ()
    '''
    global commandes
    numero=[]
    reponse=[]
    for cle1,valeur1 in commandes.items():
        for cle2,valeur2 in valeur1.items():
            if valeur2==nom:
                numero.append(cle1)
    if numero==[]:
        print(f'{numero_commande} : pas de commande à ce nom')
    else:
        for k in numero:
            reponse.append(commandes[k])
    return tuple(reponse)



def ajouter_commande(numero,nom,adresse,ville,etat):
    '''ajoute une commande
    : numero,nom,adresse,ville,etat : str
    : return : le dict commande modifié
    global commandes
    '''
    liste=[numero,nom,adresse,ville,etat]
    k=0
    numero=str(len(commandes))
    for cle in commandes['0'].keys():
        commandes[numero]={cle:liste[k]}
        k+=1
    return commandes


ajouter_commande("AZE1029","Alan Turin","314 rue d’Enigma","Londres","En cours")
print(commandes)
```

```python
{'0': {'numero': 'EMA70495', 'nom': 'Ada Lovelace', 'adresse': '64 rue Jocelyne Troccaz', 'ville': 'Tours', 'etat': 'En cours'}, '1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'}, '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'}, '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'}, '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'}, '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'}, '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'}, '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'}, '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'}, '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}, '10': {'etat': 'En cours'}}


>>>commandes={'0': {'numero': 'EMA70495', 'nom': 'Ada Lovelace', 'adresse': '64 rue Jocelyne Troccaz', 'ville': 'Tours', 'etat': 'En cours'},
           '1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'},
           '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'},
           '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'},
           '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'},
           '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'},
           '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'},
           '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}
           }

>>>ajouter_commande("AZE1029","Alan Turin","314 rue d'Enigma","Londres","En cours")
>>>print(commandes)   
    {'0': {'numero': 'EMA70495', 'nom': 'Ada Lovelace', 'adresse': '64 rue Jocelyne Troccaz', 'ville': 'Tours', 'etat': 'En cours'},
           '1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'},
           '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'},
           '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'},
           '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'},
           '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'},
           '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'},
           '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'},
           '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}
            '11': {'numero': 'AZE1029', 'nom': 'Alan Turin', 'adresse': "314 rue d'Enigma", 'ville': 'Londres', 'etat': 'En cours'}
            }

```

```python
def supprimer_commande(numero):
    '''
    supprime la commande correspondant au n°
    : numero : str
    : return : le dict commandes
    
    '''
    num=''
    for cle1,valeur1 in commandes.items():
        for cle2,valeur2 in valeur1.items():
            if valeur2==numero:
                num=cle1
    if numero=='':
        print(f'{numero} : numero commande non enregistré')
    else:
        del commandes[num]
    return commandes

supprimer_commande('EMA70495')
print(commandes)
```

```python
{'1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'}, '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'}, '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'}, '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'}, '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'}, '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'}, '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'}, '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'}, '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}, '10': {'etat': 'En cours'}}


>>>supprimer_commande('EMA70495')  
>>>print(commandes)
    {'1': {'numero': 'VWD74550', 'nom': 'Dorothy Vaughan', 'adresse': '33 rue Al-Kindi', 'ville': 'Bordeaux', 'etat': 'En cours'},
    '2': {'numero': 'SWK65993', 'nom': 'Gilles Kahn', 'adresse': '53 rue Ingrid Daubechies', 'ville': 'Lille', 'etat': 'En cours'},
    '3': {'numero': 'NKR34542', 'nom': 'Ada Lovelace', 'adresse': '98 rue Jules César', 'ville': 'Bordeaux', 'etat': 'Livrée'},
    '4': {'numero': 'GEG58414', 'nom': 'Jacques-Louis Lions', 'adresse': '84 rue Al-Kindi', 'ville': 'Rennes', 'etat': 'Retour'},
    '5': {'numero': 'FZA36963', 'nom': 'Al-Khwarizmi', 'adresse': '73 rue Adi Shamir', 'ville': 'Marseille', 'etat': 'En cours'},
    '6': {'numero': 'QWE58690', 'nom': 'Alonzo Church', 'adresse': '47 rue Jules César', 'ville': 'Paris', 'etat': 'Retour'},
    '7': {'numero': 'NLY90647', 'nom': 'Hypatie d’Alexandrie', 'adresse': '51 rue Whitfield Diffie', 'ville': 'Bordeaux', 'etat': 'En cours'},
    '8': {'numero': 'VVL26047', 'nom': 'Alonzo Church', 'adresse': '6: rue Adi Shamir', 'ville': 'Montpellier', 'etat': 'En cours'},
    '9': {'numero': 'CXO07384', 'nom': 'Jacques-Louis Lions', 'adresse': '30 rue Whitfield Diffie', 'ville': 'Paris', 'etat': 'Livrée'}}
    >>> supprimer_commande('EMA70895')
    numero de commande non existant
```