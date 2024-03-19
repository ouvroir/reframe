---
title : Notes rdv Reframe
author: ouvroir
date: 2023-03-13
draft: false
tags:
    - reframe
    
---
Présents : WD, DV, ECD, ZR

Discussion sur la place des métadonnées. 

Pas utilisation IIIF à cause des problèmes de métadonnées? Ne pas etre dépendant des manifestes IIIF car structure trop enfermante. 

Pour chaque cas d'étude : préciser rôles du noyau puis désigner les elemts d'interfaçage. 
La lib fournit ensemble de web component pour intéragir avec ses composants dans son markdown. 

Etat de l'art : 
Javascript : bcp mais plus ou moins complètes, bcp discontinuée
Viewers IIIF : 2 gdes familles : 
- pas d'interaction, juste montrer image et pvt zommer, 
- d'autres bcp plus programatiques :
[openseadragon](https://openseadragon.github.io) fonctionne avec plugin, pas très intuitif, Ancien type de module donc difficile de l'impoorter dans nouveaux framework. Importation direct au DOM alors qu'aujourd'hui les frameworks n'ont aps acces de suite au DOM. Donc crash. 
[CanvasPanel](https://iiif-canvas-panel.netlify.app). a pris en compte les prob de opendragon mais toujours en beta. 

Mais fonctionnalités manquantes, genre table lumineuse. Claris B de REnnes a dev un plugin de Mirador qui permet d'integrer de la video à Mirador. Mais mirador est une visionneuse pour les collections patrimonial donc pas exactement ce qu'on veut faire. 

Si table lum : est qu'on augmente la lib de digerati ? 
Peut etre considéré comme une table lumineuse? 

Imagesparks permettait de droper des images et les interfacer. 

Penser pour le futur : 
- slider pour l'hida
- modele expo en ligne avec le cms (canada)


Progressive enhancement : un musée fait une expo virutel. Si qqun regarde l'expo sans javascript, la pers pourra regarder le contenu. 

Réfléchir au plan et l'analyse des besoins 

Réunion a programmer ECD, WD. 