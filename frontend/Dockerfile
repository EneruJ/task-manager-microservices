# Utilisez une image Node.js officielle pour l'étape de construction
FROM node:14 AS build

WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./
RUN npm install

# Copiez le reste des fichiers du frontend
COPY . .
RUN npm run-script build

# Utilisez une image Nginx pour servir le frontend
FROM nginx:alpine

# Copiez les fichiers build depuis l'étape de build
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposez le port 80 pour Nginx
EXPOSE 80

# Copiez le fichier de configuration Nginx si vous en avez un
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]