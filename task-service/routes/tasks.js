const express = require('express');
const router = express.Router();
const client = require('../config/elasticsearchClient');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Récupère la liste de toutes les tâches
 *     description: Retourne un tableau de toutes les tâches stockées dans Elasticsearch.
 *     responses:
 *       200:
 *         description: Un tableau de tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: L'ID unique de la tâche dans Elasticsearch
 *                   title:
 *                     type: string
 *                     description: Le titre de la tâche
 *                   description:
 *                     type: string
 *                     description: La description de la tâche
 *                   completed:
 *                     type: boolean
 *                     description: Indique si la tâche est terminée
 */

router.get('/', async (req, res) => {
  try {
    const { body } = await client.search({
      index: 'tasks',
      body: {
        query: {
          match_all: {}
        }
      }
    });

    res.json(body.hits.hits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Ajoute une nouvelle tâche
 *     description: Crée et enregistre une nouvelle tâche dans Elasticsearch.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre de la tâche
 *               description:
 *                 type: string
 *                 description: La description de la tâche
 *               completed:
 *                 type: boolean
 *                 description: Indique si la tâche est terminée
 *     responses:
 *       201:
 *         description: La tâche a été créée avec succès
 */
// POST a new task
router.post('/', async (req, res) => {
  try {
    const task = req.body;
    const resp = await client.index({
      index: 'tasks',
      body: task
    });

    res.status(201).json(resp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/tasks/search:
 *   get:
 *     summary: Recherche les tâches par terme
 *     description: Utilise Elasticsearch pour rechercher des tâches basées sur un terme de recherche.
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Terme de recherche pour les tâches.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Une liste de tâches correspondant au terme de recherche
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur serveur
 */

router.get('/search', async (req, res) => {
  try {
    const { query, exact } = req.query;
    const searchQuery = exact === 'true' ? {
      match_phrase: { title: query }
    } : {
      multi_match: {
        query: query,
        fields: ["title", "description"]
      }
    };

    const { body } = await client.search({
      index: 'tasks',
      body: {
        query: searchQuery
      }
    });

    res.json(body.hits.hits.map(hit => hit._source));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/tasks/suggest:
 *   get:
 *     summary: Suggère des titres de tâches basés sur un terme de recherche
 *     description: Utilise la fonctionnalité d'auto-complétion d'Elasticsearch pour suggérer des titres de tâches.
 *     parameters:
 *       - in: query
 *         name: term
 *         required: true
 *         description: Terme de recherche pour les suggestions de tâches.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Une liste de suggestions de titres de tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: Un titre de tâche suggéré
 *       500:
 *         description: Erreur serveur
 */

router.get('/suggest', async (req, res) => {
  try {
    const { term } = req.query; // Terme de suggestion
    const { body } = await client.search({
      index: 'tasks',
      body: {
        suggest: {
          taskSuggestion: {
            prefix: term,
            completion: {
              field: "title.suggest",
              size: 5 // Limite le nombre de suggestions
            }
          }
        }
      }
    });

    const suggestions = body.suggest.taskSuggestion[0].options.map(option => option.text);
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
