#!/bin/bash

# Création de l'index avec mapping pour l'auto-complétion
curl -X PUT "localhost:9200/tasks" -H 'Content-Type: application/json' -d'
{
  "mappings": {
    "properties": {
      "title": { 
        "type": "text",
        "fields": {
          "suggest": {
            "type": "completion"
          }
        }
      },
      "description": { "type": "text" },
      "completed": { "type": "boolean" }
    }
  }
}'
echo "Index 'tasks' créé avec succès."
echo ""

# Fonction pour ajouter une tâche
add_task() {
    curl -X POST "localhost:9200/tasks/_doc" -H 'Content-Type: application/json' -d"
    {
      \"title\": \"$1\",
      \"description\": \"$2\",
      \"completed\": $3
    }"
    echo "Tâche '$1' ajoutée."
}

# Ajout de 20 tâches avec des noms et descriptions réalistes
add_task "Planifier la réunion" "Organiser une réunion d'équipe pour le projet X." false
add_task "Rédiger un rapport" "Rédiger le rapport mensuel des ventes." true
add_task "Répondre aux emails" "Répondre à tous les emails des clients reçus hier." false
add_task "Mettre à jour la base de données" "Mettre à jour la base de données client avec les nouvelles entrées." true
add_task "Préparer la présentation" "Préparer la présentation pour la réunion de demain." false
add_task "Réviser le code" "Faire une révision du code sur la nouvelle branche de développement." true
add_task "Plan de marketing" "Finaliser le plan de marketing pour le prochain trimestre." false
add_task "Renouvellement des licences" "Renouveler les licences logicielles qui expirent le mois prochain." true
add_task "Audit interne" "Commencer l'audit interne des processus de l'entreprise." false
