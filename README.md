# Task Manager Microservices

# Description du projet:
Notre projet est une application de gestion des tâches. L'objectif est de fournir aux utilisateurs une interface intuitive pour créer, modifier, et suivre l'avancement de leurs tâches quotidiennes. Au-delà de la simple gestion des tâches, l'application offre également des notifications en temps réel pour rappeler aux utilisateurs leurs échéances importantes.

# Architecture:
L'architecture de notre application est basée sur des microservices, ce qui nous permet de séparer les différentes responsabilités de l'application et de garantir une évolutivité et une maintenance plus aisées. Voici les différents composants/services de notre application:

Frontend: Une interface utilisateur construite avec React, qui communique avec les services backend pour récupérer et envoyer des données.

Task-Service: Un service dédié à la gestion des tâches. Il interagit avec notre base de données MongoDB pour stocker et récupérer des informations sur les tâches.

Notification-Service: Un service qui gère l'envoi de notifications en temps réel. Il utilise RabbitMQ pour la gestion des messages.

RabbitMQ: Un système de messagerie pour faciliter la communication entre nos services.

# Technologies utilisées:
React: Pour le développement de l'interface utilisateur.

Node.js: Comme environnement d'exécution pour nos services backend.

Express.js: Pour créer les points de terminaison API de nos services.

MongoDB: Utilisé pour stocker des données liées aux tâches.

RabbitMQ: Pour la gestion des messages et la communication entre les services.

Docker: Pour conteneuriser nos services et garantir un environnement de déploiement uniforme.

Prometheus & Grafana: Pour le monitoring et la visualisation des performances de nos services.

![image](https://github.com/EneruJ/task-manager-microservices/assets/62664268/e4405e8d-ef07-44fb-adaa-8197775b9856)

