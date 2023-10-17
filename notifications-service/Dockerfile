# Utilisez une image Node.js officielle
FROM node:14

WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port que votre application Express utilise (s'il y a un endpoint HTTP/S)
EXPOSE 8081

# Définissez des variables d'environnement pour la connexion RabbitMQ si nécessaire
# Par exemple:
# ENV RABBITMQ_URL amqp://your_rabbitmq_server

# Commande pour démarrer votre service de notifications
CMD ["node", "server.js"]
