# Utilisez une image Node.js officielle pour l'étape de construction
FROM node:14 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Utilisez une image Nginx pour servir le frontend
FROM nginx:alpine

# Copiez les fichiers build depuis l'étape de build
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposez le port 80 pour Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
