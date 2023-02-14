
# messagerie-My-IRC
Système de messagerie réalisé en React avec socket.IO et Node.js

<<<<<<< HEAD
LE PROJET
*********

Projet Epitech web@cademy où il fallait réaliser un système de messagerie avec des rooms, en utilisant Socket.IO. Technos = React, Socket.IO, Node.js, CSS 3

LANCER LE PROJET
=======




LE PROJET
*********
Projet Epitech web@cademy où il fallait réaliser un système de messagerie avec des rooms, en utilisant Socket.IO.
Technos = React, Socket.IO, Node.js, CSS 3


LANCER LE PROJET 
>>>>>>> 78c7fe524f26258bb0978bf30f9db5452be722b8
****************

npm install

<<<<<<< HEAD
-> côté server : cd server/ node server.js

-> côté client : lancer React : cd client/ npm run start

Ouvrir 1 navigateur par utilisateur, pour les voir affiché dans la room "général" (ex :localhost: 3000 ouverts sur différents onglets)
=======
côté server : cd server/ node server.js

côté client : lancer React : cd client/ npm run start
>>>>>>> 78c7fe524f26258bb0978bf30f9db5452be722b8

Documentation - infos
*********************

<<<<<<< HEAD
Hooks = évitent d'écrire des classes, fonctionne en local. c'est une fonction

socket ?? = est un module de Node.js qui permet de créer des Web Sockets, c'est-à-dire des connections bi-directionnelles entre clients et serveur qui permettent une communication en temps réel sur un autre protocole que le protocole http normalement utilisé dans les pages web.

socket emit = ENVOIE DES DONNEES, comme un message à tous les sockets connectés

socket on = REPONDS à l'envoi des données et appelle une fonction qui traite ces données

C'est quoi Use Effect?
**********************

useEffect est un hook qui va permettre de déclencher une fonction de manière asynchrone lorsque l'état du composant change

Pourquoi useEffect est-elle invoquée à l'intérieur d'un composant ?

ça permet d'accéder à la variable d'état (ou à n'importe quelle prop) directement depuis l'effet.

C'est quoi useState ?
*********************

La fonction useState retourne un élément donné par défaut (tableau, une chaine de caractère, etc.) Cette fonction prend comme paramètre la valeur initiale désirée. Le premier élément du tableau est une variable donnant accès à la valeur d'état

Use State ?
***********

-*fonction qui va permettre de modifier mon Etat

const [users, setUsers] = useState([]); => const [monEtat-variable, "setter"-qui rend modifiable*] = EtatLocal-état défini PAR DEFAUT,

On peut utiliser cet état dans notre composant, l'afficher et le modifier.

C'est quoi les props ?
**********************

"props" est l'abréviation de "properties", mais il est un concept dans le ReactJS. A la base, props est un objet. Il stocke les valeurs des attribute (attribut) d'une étiquette (Tag).

[...messages, messages]

Les 3 ... servent à DESTRUCTURER le tableau = on destructure le tableau messages, comme une boite où on vide tous les messages, et ensuite on recréé un tableau avec tous les messages dans des petites cases (des tableaux dans des tableaux), et ON Y INSERE LE NOUVEAU MESSAGE
=======
Hooks =
évitent d'écrire des classes, fonctionne en local.
c'est une fonction

socket ?? =
est un module de Node.js qui permet de créer des Web Sockets, c'est-à-dire des connections bi-directionnelles entre clients et serveur qui permettent une communication en temps réel sur un autre protocole que le protocole http normalement utilisé dans les pages web. 

socket emit =
ENVOIE DES DONNEES, comme un message à tous les sockets connectés

socket on =
REPONDS à l'envoi des données et appelle une fonction qui traite ces données

C'est quoi Use Effect?

useEffect est un hook qui va permettre de déclencher une fonction de manière asynchrone lorsque l'état du composant change
*********************************
Pourquoi useEffect est-elle invoquée à l'intérieur d'un composant ? 

ça permet d'accéder à la variable d'état (ou à n'importe quelle prop) directement depuis l'effet.
***********************************
C'est quoi useState ?

La fonction useState retourne un élément donné par défaut (tableau, une chaine de caractère, etc.) Cette fonction prend comme paramètre la valeur initiale désirée. Le premier élément du tableau est une variable donnant accès à la valeur d'état
************************
Use State ?

-*fonction qui va permettre de modifier mon Etat

const [users, setUsers] = useState([]);
    => const [monEtat-variable, "setter"-qui rend modifiable*] = EtatLocal-état défini PAR DEFAUT, 

On peut utiliser cet état dans notre composant, l'afficher et le modifier.
***********************************
C'est quoi les props ?

"props" est l'abréviation de "properties", mais il est un concept dans le ReactJS. A la base, props est un objet. Il stocke les valeurs des attribute (attribut) d'une étiquette (Tag).
********************************
[...messages, messages]

Les 3 ... servent à DESTRUCTURER le tableau = on destructure le tableau messages, comme une boite où on vide tous les messages, et ensuite on recréé un tableau avec tous les messages dans des petites cases (des tableaux dans des tableaux), et ON Y INSERE LE NOUVEAU MESSAGE


>>>>>>> 78c7fe524f26258bb0978bf30f9db5452be722b8
