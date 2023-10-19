const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(cors());
app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

const swaggerJsDoc = require('swagger-jsdoc');

// Initialisation de swagger-jsdoc
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'API pour la gestion des tâches',
    },
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: "L'ID unique de la tâche"
            },
            title: {
              type: 'string',
              description: 'Le titre de la tâche'
            },
            description: {
              type: 'string',
              description: 'La description de la tâche'
            },
            completed: {
              type: 'boolean',
              description: 'La tâche est-elle terminée?'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://culinarydb:YA81MlahfM8LsDLqnxcy1fNch0gS9ikYrMoFNurDfBSjStf3fC8JJ5BZ7k9OWBZpl750lSoNUnC4ACDb2lMf4g==@culinarydb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@culinarydb@', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Définition des routes de l'application
app.get('/', (req, res) => {
  res.send('Task Service is Running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
