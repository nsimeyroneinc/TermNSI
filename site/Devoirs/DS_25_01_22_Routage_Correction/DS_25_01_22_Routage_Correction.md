<table  style="background-color:  #F0F8FF; width:750px;color:black;">
    <thead>
        <tr>
            <th style="text-align:center;border:solid;border-width:1px;font-size:20pt;width:100%;">Devoir n°6 : Routage</th>
        </tr>
    </thead>
</table>


| |Exercice n°1 | Exercice n°2| 
|:---:|:---:|:---:|
|Barème | 8 pts | 4 pts |


<blockquote style="background-color: #B2BEB5; border-left: 15px solid rgb(0 0 0); margin-left:75px;"> 
    <span style="font-size:20px; color:black;">Exercice n°1
</span></blockquote>

_Cet exercice porte sur les réseaux et les protocoles de routage._  

On représente ci-dessous un réseau dans lequel R1, R2, R3, R4, R5 et R6 sont des routeurs. Le réseau local L1 est relié au routeur R1 et le réseau local L2 au routeur R6.

![image](../Reseaux/data_sujet_1/sujet1_Ex5_Enonce.png){:.center width=75%}

**Rappels et notations**  
Dans cet exercice, les adresses IP sont composées de 4 octets, soit 32 bits. Elles sont notées X1.X2.X3.X4, où X1, X2, X3 et X4 sont les valeurs des 4 octets, convertis en notation décimale.  
La notation X1.X2.X3.X4/n signifie que les n premiers bits de poids forts de l’adresse IP représentent la partie « réseau », les bits suivants représentent la partie « hôte ».  
Toutes les adresses des hôtes connectés à un réseau local ont la même partie réseau et peuvent donc communiquer directement. L’adresse IP dont tous les bits de la partie « hôte » sont à 0 est appelée « adresse du réseau ».  

On donne également des extraits de la table de routage des routeurs R1 à R5 dans le tableau suivant :

|Routeur|Réseau destinataire|Passerelle|Interface|
|:---:|:---:|:---:|:---:|
|R1|54.37.122.0/24|86.154.10.1|86.154.10.56|
|R2|54.37.122.0/24|37.49.236.22|37.49.236.23|
|R3|54.37.122.0/24|62.34.2.8|62.34.2.9|
|R4|54.37.122.0/24|94.23.122.10|94.23.122.11|
|R5|54.37.122.0/24|218.32.15.1|218.32.15.2|


!!! question "Question 1"  
    Un paquet part du réseau local L1 à destination du réseau local L2.  

    a. En utilisant l’extrait de la table de routage de R1, vers quel routeur R1 envoie-t-il ce paquet : R2 ou R3 ? Justifier.  
    b. A l’aide des extraits de tables de routage ci-dessus, nommer les routeurs traversés par ce paquet, lorsqu’il va du réseau L1 au réseau L2.

??? tip "Solution 1 : /1 + /1 = /2"

    **1.a** L’extrait de la table de routage de R1 montre que pour atteindre le réseau L2 (57.37.122.0/24) les paquets doivent être envoyés via l’interface 86.154.10.56.  
    Cette interface fait partie du réseau 86.154.10.0/24. Le routeur R2 fait aussi partie de ce réseau.  
    On peut donc affirmer que depuis R1, les paquets seront dirigés vers R2.

    **1.b** L1 -> R1 -> R2 -> R6 -> L2


!!! question "Question 2"
    La liaison entre R1 et R2 est rompue.  
        
    a. Sachant que ce réseau utilise le protocole RIP (distance en nombre de sauts), donner l’un des deux chemins possibles que pourra suivre un paquet allant de L1 vers L2.  
    b. Dans les extraits de tables de routage ci-dessus, pour le chemin de la question 2.a, quelle(s) ligne(s) sera (seront) modifiée(s) ?

??? tip "Solution Question 2 - / 1 + / 1 = / 2"
    **2.a** L1 -> R1 -> R3 -> R4 -> R6 -> L2

    **2.b** Vu le chemin choisi à la question 2a, seule la ligne R1 sera modifiée (réseau 112.44.65.0 à la place du réseau 86.154.10.0).

!!! question "Question 3"

    On a rétabli la liaison entre R1 et R2.  
    Par ailleurs, pour tenir compte du débit des liaisons, on décide d’utiliser le protocole OSPF (distance liée au coût minimal des liaisons) pour effectuer le routage. Le coût des liaisons entre les routeurs est donné par le tableau suivant : 


    |Liaison |R1-R2 |R1-R3 |R2-R3 |R2-R4 |R2-R5 |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |Coût | 100|100|?|1|10|

    |Liaison |R2-R6 |R3-R4 |R4-R5 |R4-R6 |R5-R6|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |Coût |10|10|1|10|1|

    a. Le coût $C$ d'une liaison est donné ici par la formule ଽ  

    $C=\dfrac{10^9}{BP}$
    
    où $BP$ est la bande passante de la connexion en bps (bit par seconde).  
    Sachant que la bande passante de la liaison R2-R3 est de 10 Mbps, calculer le coût correspondant.  
    b. Déterminer le chemin parcouru par un paquet partant du réseau L1 et arrivant au réseau L2, en utilisant le protocole OSPF.  
    c. Indiquer pour quel(s) routeur(s) l’extrait de la table de routage sera modifié pour un paquet à destination de L2, avec la métrique OSPF.

??? tip "Solution Question 3 - / 0.75 + / 2.5 + / 0.75 = / 4"

    **3.a** $C = \dfrac{10^9}{10^7} = 100$

    **3.b**
    
    |R1  |R2     |R3     |R4     |R5     |R6     |
    |:--:|:--:   |:--:   |:--:   |:--:   |:--:   |
    |0   |100-R1 |100-R1 |  -    | -     |  -    |
    |x   |x      |100-R1 |101-R2 |110-R2 |110-R2 |
    |x   |x      |x      |101-R2 |110-R2 |110-R2 |
    |x   |x      |x      |x      |102-R4 |110-R2 |
    |x   |x      |x      |x      |x      |103-R5 |



    La route avec le coût minimum (103) est la suivante :  
    L1 -> R1 -> R2 -> R4 -> R5 -> R6 -> L2

    **3.c** Les tables de routage R2 et R4 seront modifiées.

<blockquote style="background-color: #B2BEB5; border-left: 15px solid rgb(0 0 0); margin-left:75px;"> 
    <span style="font-size:20px; color:black;">Exercice n°2
</span></blockquote>

On considère le réseau modélisé par le schéma ci-dessous.  
Les routeurs sont identifiés par les lettres de A à F ; les débits des liaisons entre les routeurs
sont indiqués sur le schéma.   

![image](data/DS_25_01_22.png)

!!! question "Question 1"
    Dans cette question, tous les routeurs utilisent le protocole RIP (distance en nombre de sauts).  
    On s'intéresse aux routes utilisées pour rejoindre F une fois les tables stabilisées.  
    Recopier et compléter sur la copie la table suivante :   

    ![image](data/DS_25_01_22_Tab.png){:.center}

??? tip "Solution Question 1 - / 1"  

    ![image](data/Routage_Cor1.png){:.center} 

!!! question "Question 2"
    Dans cette question tous les routeurs utilisent le protocole OSPF (distance en coût des routes). Le coût d'une liaison est modélisé par la formule  $\dfrac{10^8}{d}$
    où ݀$d$ est le débit de cette liaison exprimé en bit par seconde.

    On s’intéresse aux routes utilisées pour rejoindre F une fois les tables stabilisées.  
    Recopier et compléter sur la copie la table suivante : 

    ![image](data/DS_25_01_22_Tab.png){:.center}

??? tip "Solution Question 2 - / 2"  
    - coût A-D = 10  
    - coût A-B = 1  
    - coût B-C = 1  
    - coût C-D = 10 
    - coût C-E = 1  
    - coût D-E = 10  
    - coût E-F = 1  

    ![image](data/Routage_Cor2.png){:.center}

!!! question "Question3"
    Des protocoles RIP et OSPF, lequel fournit le routage entre A et F le plus performant en terme de débit ? Justifier la réponse. 

??? tip "Solution Question 3 - / 1"
    RIP ne tient pas compte du débit alors que OSPF en tient compte. OSPF sera donc le plus performant.  
    coût A-D = 10 