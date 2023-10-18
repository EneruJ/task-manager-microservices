const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Récupère la liste de toutes les tâches
 *     description: Retourne un tableau de toutes les tâches
 *     responses:
 *       200:
 *         description: Un tableau de tâches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Erreur du serveur
 */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Ajoute une nouvelle tâche
 *     description: Crée et enregistre une nouvelle tâche avec les informations fournies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre de la tâche
 *               description:
 *                 type: string
 *                 description: La description de la tâche
 *     responses:
 *       201:
 *         description: La tâche a été créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Erreur de validation ou de création
 */
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
