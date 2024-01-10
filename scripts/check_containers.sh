#!/bin/bash

# Liste des conteneurs attendus
containers=(task-service frontend notification-service rabbitmq prometheus grafana elasticsearch logstash kibana metricbeat)

# Vérifier chaque conteneur
for container in "${containers[@]}"; do
    status=$(docker inspect --format '{{.State.Running}}' $container)
    if [ "$status" = "true" ]; then
        echo "Le conteneur $container fonctionne correctement."
    else
        echo "Erreur : Le conteneur $container n'est pas en cours d'exécution."
    fi
done
