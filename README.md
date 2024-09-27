/!\ Version non finale /!\

# visites-virtuelles

> Application permettant d'effectuer des visites virtuelles des sentiers du patrimoine en Corse.

<!-- ![Demo screenshot](demo.png) -->

## Première configuration
Cloner le repo puis executer les commandes suivantes depuis \visites-virtuelles\ :

```
npm install
```

Les visites virtuelles sont à coller dans le répertoire public/visites/ (De base, seule le .html est présent afin d'alléger l'export sur GitHub)

## Tests sur navigateur

```bash
# execution avec hot reload sur localhost:8080
npm run serve
```

## Tests sur Electron

/!\ Utiliser ALT + F4 pour quitter l'application /!\

```sh
# execution depuis une fenêtre desktop
npm run electron:serve
```

## Déploiement en production

Permet de créer un .exe dans le répertoire /dist_electron/

Problème connu : l'exécutable 'visites-virtuelles Setup 0.1.0.exe' ne fonctionne pas si le build est trop lourd (si des visites virtuelles sont implantées directement dans l'application)

Résolution du problème : utiliser l'exécutable 'visites-virtuelles.exe' du répertoire dist_electron\win-unpacked

```sh
# build pour la production
npm run electron:build
```
