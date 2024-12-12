# Quelques notes à propos de ce prototype

auteur : William Diakité, Ouvroir

date de dev : novembre 2023


## setup
La beta de svelte 5 a été utilisée pour réaliser cette application. Prévoir des conflits de dépendances. Ce n'est pas optimal mais ça fonctionne, pour les tests je recommande simplement : 

`npm i --force`

À prévoir également, beaucoup d'erreurs de linting liées en grande partie au développement de svelte 5 depuis 1 an.

## notes sur le proto

Vous verrez que je n'utilise pas le protocole IIIF, ni de visionneuse IIIF ou  de custom elements. 

Le but était principalement de tester quelques aspects de la librairie notamment les questions de ratio et leur implication sur les layouts (flex ou grid) ou bien l'interface des composants (on s'entend, svelte ou custom elements, des attributs restent des attributs). Sur ce dernier point, le but était de voir quelle quantité est nécessaire pour paramétrer des éléments basique (disposition de la légende, sens du flex ou autre).

Enfin, noter que ceci est prototype *quick and dirty* et n'a rien d'abouti ou de définitif. Au contraire, c'est le travail sur ce prototype qui m'a donné des éléments de réfléxion pour entamer l'écriture du cahier des charges.
