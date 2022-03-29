## Exercice 4 

Extrait sujet BAC 2021

_Cet exercice porte sur la gestion des processus par un système d’exploitation._

**Partie A : Processus**  

La commande UNIX ps présente un cliché instantané des processus en cours d'exécution.  
Avec l’option −eo pid,ppid,stat,command, cette commande affiche dans l’ordre l’identifiant du processus PID (process identifier), le PPID (parent process identifier), l’état STAT et le nom de la commande à l’origine du processus.  

Les valeurs du champ STAT indique l’état des processus :  
- R : processus en cours d’exécution  
- S : processus endormi  

Sur un ordinateur, on exécute la commande ps −eo pid,ppid,stat,command et on obtient un affichage dont on donne ci-dessous un extrait. 

![](data/extraitBAC.png){:.center width=350px}

À l'aide de cet affichage, répondre aux questions ci-dessous.

**Q.1.** Quel est le nom de la première commande exécutée par le système d'exploitation lors
du démarrage ?

??? tip "Correction"  
    La première commande exécutée par le système d’exploitation lors du démarrage est la commande init

**Q.2.** Quels sont les identifiants des processus actifs sur cet ordinateur au moment de
l’appel de la commande ps ? Justifier la réponse.  

??? tip "Correction"  
    Les processus actifs sont les processus ayant pour PID 5440 et 5450 (présence de l’indicateur R dans la colonne STAT pour ces 2 processus).

**Q.3.** Depuis quelle application a-t-on exécuté la commande ps ?  
Donner les autres commandes qui ont été exécutées à partir de cette application.  

??? tip "Correction"  
    La commande ps a été exécutée depuis l’application Bash (car le processus ps a pour PPID 1912 qui correspond au PID de Bash).  
    Deux autres processus Bash (PID 2014 et PID 2013) et un processus python programme1.py (PID 5437) ont été lancés depuis le processus Bash de PID 1912

**Q.4.** Expliquer l'ordre dans lequel les deux commandes python programme1.py et python programme2.py ont été exécutées.  

??? tip "Correction"  
    Le processus python programme1.py a un PID de 5437 alors que le processus python programme2.py a un PID de 5440. python programme1.py a été exécuté avant python programme2.py.

**Q.5.** Peut-on prédire que l'une des deux commandes python programme1.py et python programme2.py finira avant l’autre ?

??? tip "Correction"  
    Non, aucune prédiction n’est possible.
