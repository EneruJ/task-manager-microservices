# Task Manager Microservices

## Description du projet

Notre projet est une application de gestion des tâches. L'objectif est de fournir aux utilisateurs une interface intuitive pour créer, modifier et suivre l'avancement de leurs tâches quotidiennes. Au-delà de la simple gestion des tâches, l'application offre également des notifications en temps réel pour rappeler aux utilisateurs leurs échéances importantes.

## Architecture

L'architecture de notre application est basée sur des microservices, ce qui nous permet de séparer les différentes responsabilités de l'application et de garantir une évolutivité et une maintenance plus aisées. Voici les différents composants/services de notre application :

Frontend

Une interface utilisateur construite avec React, qui communique avec les services backend pour récupérer et envoyer des données.

Task-Service

Un service dédié à la gestion des tâches. Il interagit avec notre base de données MongoDB pour stocker et récupérer des informations sur les tâches.

Notification-Service

Un service qui gère l'envoi de notifications en temps réel. Il utilise RabbitMQ pour la gestion des messages.

RabbitMQ

Un système de messagerie pour faciliter la communication entre nos services.

## Technologies utilisées

Nous avons utilisé un ensemble de technologies pour réaliser ce projet :

React : Pour le développement de l'interface utilisateur.

Node.js : Comme environnement d'exécution pour nos services backend.

Express.js : Pour créer les points de terminaison API de nos services.

MongoDB : Utilisé pour stocker des données liées aux tâches. Nous avons opté pour une base de données NoSQL en raison de sa flexibilité.

Docker : Pour conteneuriser nos services et garantir un environnement de déploiement uniforme. Nous avons créé des Dockerfiles pour chaque service.

Prometheus & Grafana : Pour le monitoring et la visualisation des performances de nos services. Nous avons configuré des tableaux de bord dans Grafana pour surveiller l'état de nos conteneurs et des requêtes HTTP.

docker-compose.yml : Nous avons créé un fichier docker-compose.yml pour orchestrer le déploiement de l'ensemble de nos services.

Nginx : Nous avons utilisé Nginx comme service de reverse proxy pour gérer les connexions entrantes dans le frontend.

OpenAPI (Swagger) : Nous avons généré une documentation API automatique avec OpenAPI (Swagger Specification).

Docker Swarm : Nous avons utilisé Docker Swarm pour orchestrer nos conteneurs en production.

Azure : Nous avons déployé notre application sur Microsoft Azure et disposons d'une URL publique sécurisée pour y accéder.

Tests automatisés : Nous avons automatisé des tests dans notre fichier docker-compose.yml pour vérifier la santé de nos conteneurs, le bon fonctionnement de l'application (frontend et backend) et le bon fonctionnement de la base de données.

Monitoring en temps réel : Nous avons configuré Prometheus et Grafana pour surveiller en temps réel nos conteneurs Docker et avons partagé un tableau de bord de monitoring via une URL publique externe.

Système de gestion de files d'attente : Nous utilisons RabbitMQ comme système de messagerie pour la communication asynchrone entre nos services.

## Accès en ligne

Le projet est également déployé en ligne et accessible publiquement via les liens suivants :

Interface utilisateur (Frontend) : [Task Manager Web](http://taskmanagerweb.northeurope.cloudapp.azure.com:80/)

Documentation API Swagger : [Swagger Documentation](http://taskmanagerweb.northeurope.cloudapp.azure.com:5000/api-docs/)

Tableau de bord de monitoring Prometheus : [Prometheus Monitoring](http://taskmanagerweb.northeurope.cloudapp.azure.com:9090/)

Tableau de bord de monitoring Grafana : [Grafana Monitoring](http://taskmanagerweb.northeurope.cloudapp.azure.com:3000/)

## Architecture

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/e4405e8d-ef07-44fb-adaa-8197775b9856)

## Execution des images Docker

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/b7edd1ba-e460-45bb-a816-d743664933ad)

## Build et Exécution du Projet

- Cloner le projet git : git clone https://github.com/EneruJ/task-manager-microservices.git
- Build le projet avec Docker Compose : docker-compose build
- Executer les conteneurs : docker-compose up

### Liens d'accès à l'application

[Interface utilisateur (Frontend)](http://localhost)

[Documentation API Swagger](http://localhost:5000/api-docs/)

[Tableau de bord de monitoring Prometheus](http://localhost:9090)

[Tableau de bord de monitoring Grafana](http://localhost:3000)

