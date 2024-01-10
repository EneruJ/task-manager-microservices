#!/bin/bash

# Vérifier Elasticsearch
curl -s "http://localhost:9200" | grep -q "You Know, for Search" && echo "Elasticsearch est fonctionnel." || echo "Elasticsearch ne répond pas."

# Vérifier Kibana
curl -s "http://localhost:5601" | grep -q "kbn-injected-metadata" && echo "Kibana est fonctionnel." || echo "Kibana ne répond pas."

# Vérifier Logstash
TEST_DATA="{\"message\": \"Test log entry\", \"timestamp\": \"$(date)\"}"
LOGSTASH_URL="http://localhost:5001"  # Assurez-vous que ce soit l'URL correcte

response=$(curl -s -o /dev/null -w "%{http_code}" -XPOST "$LOGSTASH_URL" -H 'Content-Type: application/json' -d"$TEST_DATA")

if [ "$response" = "200" ]; then
    echo "Logstash est fonctionnel."
else
    echo "Erreur : Logstash ne répond pas correctement."
fi