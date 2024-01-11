#!/bin/bash

# Tester la récupération de toutes les tâches
echo "Test: GET /api/tasks"
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/api/tasks)
if [ "$response" = "200" ]; then
    echo "Réussite : La récupération de toutes les tâches fonctionne."
else
    echo "Échec : Impossible de récupérer toutes les tâches."
fi

# Tester l'ajout d'une nouvelle tâche
echo "Test: POST /api/tasks"
post_response=$(curl -s -o /dev/null -w "%{http_code}" -X POST -H "Content-Type: application/json" -d '{"title":"Test Task","description":"Description","completed":false}' http://localhost:5000/api/tasks)
if [ "$post_response" = "201" ]; then
    echo "Réussite : L'ajout d'une nouvelle tâche fonctionne."
else
    echo "Échec : Impossible d'ajouter une nouvelle tâche."
fi

# Tester la recherche de tâches
echo "Test: GET /api/tasks/search"
search_response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:5000/api/tasks/search?query=Test")
if [ "$search_response" = "200" ]; then
    echo "Réussite : La recherche de tâches fonctionne."
else
    echo "Échec : Impossible de rechercher des tâches."
fi

