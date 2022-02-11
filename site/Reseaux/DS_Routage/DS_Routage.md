---
fontsize: 12pt
---

<table  style="background-color:  #F0F8FF; width:100%;color:black;">
    <thead>
        <tr>
            <th style="text-align:center;border:solid;border-width:1px;font-size:20pt;width:100%;">Devoir n°6 : Routage - Rattrapage</th>
        </tr>
    </thead>
</table>



 On considère un réseau composé de plusieurs routeurs reliés de la façon suivante :


 ![routage](data_sujet_0/sujet0_routage1.png){:.center}

### &#10145; Le protocole RIP  

Le protocole RIP permet de construire les tables de routage des différents routeurs, en indiquant pour chaque routeur la distance, en nombre de sauts, qui le sépare d’un autre routeur. Pour le réseau ci-dessus, on dispose des tables de routage suivantes :

 ![table](data_sujet_0/sujet0_table1.png){:.center}

 ![table](data_sujet_0/sujet0_table2.png){:.center}

 ![table](data_sujet_0/sujet0_table3.png){:.center}

!!! fabquestion "Question 1"
    1. Le routeur A doit transmettre un message au routeur G, en effectuant un nombre minimal de sauts. Déterminer le trajet parcouru.  
    2. Déterminer une table de routage possible pour le routeur G obtenu à l’aide du protocole RIP.



!!! fabquestion "Question 2"
    Le routeur C tombe en panne. Reconstruire la table de routage du routeur A en suivant le protocole RIP.



### &#10145; Le protocole OSPF  

Contrairement au protocole RIP, l’objectif n’est plus de minimiser le nombre de routeurs traversés par un paquet. La notion de distance utilisée dans le protocole OSPF est uniquement liée aux coûts des liaisons.  
L’objectif est alors de minimiser la somme des coûts des liaisons traversées.  
Le coût d’une liaison est donné par la formule suivante :  

$coût = \dfrac{10^8}{d}$

où $d$ est la bande passante en bits/s entre les deux routeurs.  

On a rajouté sur le graphe représentant le réseau précédent les différents débits des liaisons.  
On rappelle que 1 Gb/s = 1 000 Mb/s = $10^9$ bits/s.

![image](data_sujet_0/ex5.png){:.center}



!!! fabquestion "Question 3"
    1. Vérifier que le coût de la liaison entre les routeurs A et B est 0,01.
    2. La liaison entre le routeur B et D a un coût de 5. Quel est le débit de cette liaison ?




!!! fabquestion "Question 4"
    Le routeur A doit transmettre un message au routeur G, en empruntant le chemin dont la somme des coûts sera la plus petite possible. Déterminer le chemin parcouru. On indiquera le raisonnement utilisé.


