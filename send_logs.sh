#!/bin/bash

# URL de Logstash
LOGSTASH_URL="http://localhost:5001"  # Assurez-vous que le port correspond à votre configuration Logstash

# Boucle infinie pour envoyer des données
while true; do
    # Générer des données simulées
    TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    LOG_LEVEL=$(echo "INFO WARN ERROR" | tr ' ' '\n' | shuf -n 1)
    MESSAGE="Log message at level $LOG_LEVEL"

    # Créer une structure JSON
    JSON_LOG="{\"timestamp\": \"$TIMESTAMP\", \"level\": \"$LOG_LEVEL\", \"message\": \"$MESSAGE\"}"

    # Envoyer les données à Logstash
    curl -XPOST "$LOGSTASH_URL" -H 'Content-Type: application/json' -d"$JSON_LOG"

    # Attendre un peu avant d'envoyer le log suivant
    sleep 2
done
