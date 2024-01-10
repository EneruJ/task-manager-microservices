const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('@elastic/elasticsearch');
const swaggerUi = require('swagger-ui-express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
const loginRoute = require('./routes/login');

const client = new Client({ node: 'http://elasticsearch:9200' });

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

app.get('/', (req, res) => {
  res.send('Task Service is Running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
