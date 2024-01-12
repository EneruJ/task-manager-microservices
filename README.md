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

Elasticsearch : Pour améliorer la recherche et l'analyse des données, nous avons intégré Elasticsearch dans notre architecture. Ce moteur de recherche distribué nous permet d'effectuer des recherches complexes et rapides sur les données des tâches, offrant ainsi une expérience utilisateur plus riche et plus réactive.

Kibana : En complément d'Elasticsearch, nous utilisons Kibana pour la visualisation des données et la surveillance en temps réel. Kibana nous permet de créer des tableaux de bord interactifs pour analyser les données de tâches et de surveiller les performances de nos services. Ces tableaux de bord sont accessibles via des liens publics et offrent une visibilité en temps réel sur l'état de notre application.

Logstash : Nous avons intégré Logstash pour collecter, transformer et transférer les logs de nos différents services. Cette intégration nous permet d'agréger les logs dans un format structuré et de les envoyer à Elasticsearch pour analyse et stockage. Grâce à Logstash, nous avons une vision claire et centralisée de l'activité et des performances de notre système.

Metricbeat
Metricbeat : Pour une surveillance plus approfondie de nos services, nous avons intégré Metricbeat dans notre stack ELK. Metricbeat nous permet de collecter et d'envoyer des métriques système et de service vers Elasticsearch. Ces métriques incluent l'utilisation du processeur, la mémoire, le réseau et d'autres indicateurs importants, nous aidant à surveiller la santé et les performances de nos conteneurs Docker en temps réel.

Curator
Curator : Afin de gérer efficacement les indices Elasticsearch, nous avons mis en place Elastic Curator. Curator nous aide à maintenir notre cluster Elasticsearch en bonne santé en automatisant la maintenance des indices, comme la suppression des indices anciens ou leur fermeture, assurant ainsi une gestion optimisée des ressources.

Intégration Continue et Automatisation des Tests
Nous avons automatisé des tests dans notre fichier docker-compose.yml pour vérifier la santé de nos conteneurs, le bon fonctionnement de notre application (frontend et backend), ainsi que la base de données. Cette automatisation fait partie de notre stratégie d'intégration continue, garantissant la fiabilité et la stabilité de notre application à chaque mise à jour ou modification.

## Accès en ligne

Le projet est également déployé en ligne et accessible publiquement via les liens suivants :

Interface utilisateur (Frontend) : [Task Manager Web](http://localhost:80/)

Documentation API Swagger : [Swagger Documentation](http://localhost:5000/api-docs/)

Tableau de bord de monitoring Prometheus : [Prometheus Monitoring](http://localhost:9090/)

Tableau de bord de monitoring Grafana : [Grafana Monitoring](http://localhost:3000/)

Tableau de bord Kibana : [Kibana](http://localhost:5601/)

## Architecture

![cc drawio](https://github.com/EneruJ/task-manager-microservices/assets/62664268/3e9c0d91-fab9-4927-a84c-cca43bc1995b)

## Execution 

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/b7edd1ba-e460-45bb-a816-d743664933ad)

## Execution de l'authentification (route protégée)

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/647c6139-fd38-4ee3-a104-ec3bcf7bf6d6)

## Execution de l'autocomplétion

![Capture vidéo du 2024-01-12 09-14-20](https://github.com/EneruJ/task-manager-microservices/assets/62664268/f3ec65e3-88a7-481e-8774-26647082619d)

## Dashboard Kibana

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/4c833c38-711e-4b7a-865d-484ade8531c5)

## Build et Exécution du Projet

- Cloner le projet git : git clone https://github.com/EneruJ/task-manager-microservices.git
- Build le projet avec Docker Compose : docker-compose build
- Executer les conteneurs : docker-compose up

### Liens d'accès à l'application

[Interface utilisateur (Frontend)](http://localhost)

[Documentation API Swagger](http://localhost:5000/api-docs/)

[Tableau de bord de monitoring Prometheus](http://localhost:9090)

[Tableau de bord de monitoring Grafana](http://localhost:3000)

