---
title: cr réunion Reframe
desc : réunion 
author: Ouvroir
date: 2024-01-15
draft: false
tags:
    - cr
    - reframe
    
---

# Réunion Reframe 15 janvier 2024

Présents : Zoë, William, Emmanuel

Dans une première phase de travail, on a fait plusieurs essais de prototypage afin d’indentifier des problèmes et des principes dans la mise au point d’une telle librairie. Cela a permis de repérer un certain nombre de problèmes techniques. Pour cette réunion, William propose de se concentrer sur des questions de fonds qui permettent de préciser ce à quoi va servir Reframe et les problèmes fondamentaux que la librairie doit résoudre.

Nous avons déjà pu identifier un composant essentiel, qui embarque une image mais également des métadonnées, une légende. Quels autres éléments doit-on prendre en compte et quelles sont les relations entre ces éléments.

Comme pour le prototype, faire une sorte de va-et-vient entre les images et les composants, faut-il intégrer une pensée plus tournée vers des layouts. Quels paradigmes veut-on traiter au-delà du composant image. Essayer par ce moyen de définir les briques élémentaires de la librairie.


## Quel est l’objectif de la librairie Reframe ?

La librairie est destinée à faciliter la production d’exposition numérique ou la mise en place de storytelling numérique en définissant un certain nombre de modèles de contenus pour le web. 

Dans une certaine mesure, Reframe pourrait consister en un modèle abstrait décrivant les expositions et les interactions avec des contenus visuels qui pourrait recevoir différentes intégrations web ou interfaces. IIIF définit un certain nombre d’interaction avec les images mais étant centrée sur l’image, ce standard propose une conception très limitée de ce qu’est une exposition.

Elle prend la forme d’une librairie JavaScript fondée sur l’utilisation de web components pour fournir une interface d’utilisation simple afin de pouvoir être mobilisée dans différents contexte de développement web.

La librairie constitue un noyau logiciel à partir duquel on pourrait développer d’autres applications dans d’autres environnements.

À quel niveau travaille-t-on pour la spécification ? définit-on un modèle abstrait ou bien est-ce que l’on descend dans la description des paramètres des web components.

On pourrait définir un modèle abstrait en confiant aux soins d’un intégrateur web la définition des paramètres des composants web. Pour un utilisateurs il est sans doute plus facile de définir les attributs directement sur les composants plutôt que de passer par un grand fichier.

cf. Interface Plot d’Observable. Lorsqu’une interface est bien définie, c’est très utilisable. Bien sûr Plot est plus limité que D3 mais les courbes d’apprentissages sont très différentes.

Quel genre de flexibilité attend-on de cette librairie. S’attend-on à quelque chose d’extrêmement flexible, ou bien on accèpte une certaine rigidité au modèle au profit d’une flexibilité et d’une facilité d’usage, sachant que CSS pourrait permettre de personnaliser les choses.

Aller plus dans la facilité d’utilisation. L’idée serait de corriger le web. Aller plutôt vers des définitions génériques de choses qui manquent dans HTML et qui pourraient ensuite être rendues de manière plus ou moins efficace par les navigateurs. Cette approche serait logique avec l’idée de définir des composants web.

Rester sur une utilisation forte, l’objet du travail n’est pas tant d’aller dans la customisation maximale. Cela implique de rester le plus proche possible de l’environnement pour pouvoir utiliser des outils standards CSS et JavaScript pour le stylage des contenus.

## Public

Cible 1 : public sans grandes connaissances du dev web, pour produire rapidement

Cible 2 : Suffisamment modulaire pour servir de base à des projets plus ambitieux.

Cible 3 : Remplacer Powerpoint (modèle entièrement linéaire alors que le web ne l'est pas)/SlideJS et intégration avec **Tropy**

Les expositions en lignes sont compliquées et couteuses à produire : comment faciliter le travail pour les musées ? 

## Quels sont les contenus à prendre en charge ?

- images ou des vidéos avec leurs métadonnées et leurs légendes, annotations (?)
- des contenus distribués par l’intermédiaire de IIIF
- les contenus textuels habituels sont traités en HTML, ce dont on s’occuper c’est de tout le texte ou les annotations qui sont subordonnées à l’image

#### Paradigmes: 

Contenus
- types : images / vidéo / 3D / son
- sources : locale ou interface IIIF, flux vidéo
- métadonnées
- hyperliens?
- légende
- annotations
- ratio
- paramètres
    - timestamp / cadrage / zoom / position
    - différents niveaux de compression ?
    - différents format ?

Ensemble de contenus
- ordonnés ?

Affichages
- visonneuse simple
- en bandes
- côte à côte / vis-à-vis
- en regard (de texte...)
- galerie grille
- galerie horizontale
- caroussel
- Slider
- pleine-page ???
- hero menu
- masques
- table lumineuse
- grille mosaïque

=> il faut pouvoir conserver une fluidité entre le passage d'un mode d'affichage à un autre. ie Quand on passe en plein-écran, on peut défiler entre toutes les images présentes sur la page, ou bien en selectionner deux pour les comparer. 

Interactions
- Feuilletage
- comparaisons
- interactions de scroll du contenu textuel,
- mise en pleine page
- afficher/masquer légende
- parallax
- zoom-in zoom-out

Exemples (mettre à jour liste dans zotero) : 
- site du feed studio
- sites financés par Getty : [mesopotamia](https://mesopotamia.getty.edu/), [Ed Rusha](https://12sunsets.getty.edu/map/1985?mode=normal&d=0.41799)
- [Guernica](https://guernica.museoreinasofia.es/en)
- projets de [musées numériques](https://www.museesnumeriques.ca/projets-finances/souvenance-visite-au-pays-des-habitants-de-lestuaire-du-saint-laurent/)
- dev de logiciel pour faire du story telling : [c2dh](https://www.c2dh.uni.lu/projects)


Quels sont les grands paradigmes à traiter ?

Quel type d’implémentation technique souhaite-t-on cibler ?

Cmt on fait pour articuler correctement les choses qu'on veut montrer? 
Mais d’abord : définir les briques elementaires qui vont constituer les composants ? 

Ex : "Image" pas seulement un fichier physique affiché en html mais va embarquer métadonnées. 

Sortir de seulement l’image, dézoomer pour avoir des composants qui permettent comparaisons entre images. 

Types intéractions de base : zoom, etc.

Si HTML n'existait pas et qu'aujourd'hui on devait créer l'intégration d'images? Comment on pourrait créer cette galerie? 
Reframe doit rester simple d'utilisation et être efficace. 



Liens anciens c-r : 

- https://ouvroir.umontreal.ca/actualites/reunion/crOuvroir2023-11-08
- https://ouvroir.umontreal.ca/actualites/reunion/crOuvroir2023-11-13
- sshttps://ouvroir.umontreal.ca/actualites/reunion/crOuvroir2023-11-29


## Conclusion

Essayer d’avancer dans la formalisation d’un modèle abstrait pour la présentation de contenus visuels dans l’interface du web. 

Dans une étape de travail essayer de proposer un système de description abstrait, à l’exclusion de leur implémentation technique (webcomponents).

Créer un système descriptif.

Spécifier la dégradation des éléments.


A faire : 
- lister exemples dans zotero (ZR)
- captures d'écran dans dossier drive (ZR - WD)
- créer système à partir de la description
- discussion avec Lou comme dev. 
