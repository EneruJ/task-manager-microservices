# Utilisez une image Node.js officielle
FROM node:14

WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port que votre application Express utilise (dans notre exemple précédent, c'était 8080)
EXPOSE 8080

# Commande pour démarrer votre service de tâches
CMD ["node", "server.js"]
