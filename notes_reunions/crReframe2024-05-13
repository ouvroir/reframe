--- 
title : Réunion Reframe
author: ouvroir
date: 2024-05-13
draft: false
tags:
    - reframe
    
--- 

Deux réunions 13 et 14 mai

Dimensionnement du projet:
60 000 = 120 jours à 500$, soit : 
- 60 jours conception
- 60 jours dev

schéma interaction
interaction moodboard

Scénario du cours d’histoire de l’art et son moodboard. William remarque que cela fait entrer dans une dimension différente. Pour le moment, le projet est principalement centré sur la présentation de contenus. 

Bien sûr, pourrait recomposer la présentation par exemple en sélectionnant des images pour une comparaison. Mais Le moodboard, introduit de l’édition de contenus. 

Le modal pour la création de composant, celui d’un viewport qui n’est pas censé changer de dimensions. Pourrait aller jusqu’à l’export du moodboard dans un format quelconque. Nous envisagions que chacun des éléments de layout pouvait être utilisé dans des endroits différents : ce qui implique de gérer la dégradation et aussi la possibilité d’examiner le contenu dans un nouveau modal pour un affichage différent (plein-écran, etc.).

Emmanuel en effet cela introduit de l’édition de contenu. L’avait inséré surtout pour pouvoir se poser des questions d’architecture sans nécessairement penser que l’on puisse immédiatement le traiter. L’idée était de pouvoir réfléchir à la manière dont on pourrait intégrer des composants qui gèrent l’interactivité et vérifier que les choix de structuration le permettent. 

Il y a deux types d’interactivité à considérer
- entre les composants
- au niveau de l’édition

Pour l’interactivité entre les composants comme le multipage, cela implique de recueillir toutes les données dans un store. Il faudrait envisager la page comme une collection, idée que les pages fassent sens. Un store qui serait initialisé par l’utilisateur ou par Reframe lui-même. Une galerie peut ainsi se penser comme une collection.

Il est important de pouvoir penser les choses de manière déclarative et composable. On travaille avec des éléments HTML personnalisés mélangés à des éléments HTML et une librairie qui peut créer un store, etc. Cela implique peut être des mécanismes d’initialisation tout en permettant de pouvoir utiliser un simple élément JavaScript sans avoir à tout déclarer.

Un inspecteur qui va se mettre à jour au fur et à mesure des déclarations. Il s’agirait donc d’avoir un modèle abstrait généré à partir des composant. Une telle solution permet par ailleurs éventuellement une compatibilité avec IIIF.

Le store ne stocke pas l’image elle-même mais seulement une référence. Trois niveaux : méta, page, composants. Comment interagit entre les pages et avec les APIs natives du navigateur ? 

On aurait donc d’un côté les composants et leur interface et une API globale du projet. William dit que commence à apparaître une sorte de tension entre les composants et les inspecteurs. Au départ, inquiêt par le fait que ces composants font beaucoup de chose. La question se pose notamment de savoir s’ils doivent stocker du contenu ou que leur rôle ne devrait pas seulement consister à stocker de l’information.

Si stockent de l’information alors la copie dans le store (pas optimal).
Store ou modèle abstrait de la page. Store implique lecture et enregistrement des composants. Permet des interactions entre plusieurs pages, et initialisations, etc.

--> réfléchir à la manière dont fonctionne le navigateur et ce modèle de store
--> quid des frameworks
--> API (parsing) vs Store

William a prototypé et s’est aperçu que l’on ne pouvait pas populer un store sans avoir ouvert la page. En explorant l’hypothèse sur parsing, il serait toujours possible d’utiliser les fonctionnalités de building de Svelte, mais cela nous rendrait trop dépendant d’un framework.

A-t-on réellement besoin de parser des pages non-ouvertes ? On pourrait limiter l’inspecteur à ce qu’il voit sur une page. Dans une application JavaScript de type single page, on peut avoir connaissance des autres contenus, mais le web web ne prévoit pas qu’on ait accès à des pages non ouvertes.

William utilise l’idée de collection. Accéder à une quantité d’images pour les mettres en avant
- Espace sémantique
- Une page dispose toujours de sa propre autonome de sens.

L’inspecteur peut avoir l’avantage de proposer quelque chose de très transversal, il ne s’agit pas d’une page. Une force du dispositif de pouvoir accéder à tout. Il y a alors une capacité de réorganisation du contenu pour l’utilisateur.

Ne pourrait-on pas adopter approche inverse et charger collection et ne pas tout afficher ? JavaScript permet de faire ça, et de le faire client.

Avoir une collection, correspond un peu à l’idée du manifeste. C’est le modèle des institutions culturelles qui disposent d’une collection. Mais en pratique construire une exposition pour un utilisateur consiste à mobiliser divers contenus en fonction de leurs besoins. La collection est induite par ses choix et n’existe pas au préalable.

Si besoin de constituer un modèle.
ne serait-ce 
Oui des composants, mais en ce faisant déclare un contenu au sein d’une sous-collection, etc.

Bien sûr veut modèle de fonctionnement simple. Prototype pour voir jusqu’où veut aller. Si des collections et des sous-collections, alors des titres à ces éléments. Quand est-ce que les rentre ? Voir comment entrer ces informations par d’autres moyens (idée qu’ait le moins besoin de toucher ce store). À partir de quel moment est-ce que cela devient complexe d’entrer ces informations ?

Penser le cas où il y aurait plusieurs manifestes utilisés au niveau des pages pour appeler des visionneuses. Pas tant un problème car manifestes peuvent appeler des manifestes. Par ailleurs dans notre modèle, manifeste qui peut s’afficher dans un canevas pour une visionneuse.

Pour une galerie, comment fonctionne l’interface d’un composant Layout ? Deux solutions possibles qui ne sont pas incompatibles :
- composant qui accèpte une liste de contenus soit sur la forme d’une URL de manifeste, soit chemin et métadonnées. Grille qui accèpte des ressources d’origine différentes et doit les intégrer de manière unitaire.
- composant qui regroupe des déclaration de canvas.

Privilégier autant que possible une approche déclarative.
Une page un contenu avec éventuellement plusieurs vues. Il n’est pas vraiment certain que l’on ait besoin de plus, sinon il faudrait voir ce que cela nous enlève.

Cela retire la transversalité par page. Par exemple si voudrait voir une image en regard avec autres. On pourrait le faire dans l’espace de la page mais pas entre deux pages.

Emmanuel fait remarquer qu’il y a tout de même une certaine rigidité dans les expositions numériques. Face aux multiplicités possibles, des choix qui réduisent les possibles. 

Quel positionnement par rapport aux frameworks ? À quel moment est-on en train de créer un nouveau framework, à quel moment reste dans le domaine d’une librairie ?

Si le store contrôle plusieurs pages, alors entre dans une structuration des contenus. Ce qui implique d’avoir une compréhension de l’architecture générale du site. N’en impose-t-on pas une avec la hiérarchie des collections et des sous-collections. En évacuant la question du multipage. Alors peut rendre le store transparent. L’aura au niveau de la page. Sert à revenir au niveau des éléments de la page, à exporter les données de la page dans un manifeste, etc.

Se retrouve à manipuler des composants de layout et des composants d’interaction avec le texte.

Revoir comment le navigateur traite les custom elements ? 
