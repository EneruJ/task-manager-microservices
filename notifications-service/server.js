const express = require('express');
const bodyParser = require('body-parser');
const { sendToQueue } = require('./rabbitmq');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

// Initialisation de swagger-jsdoc
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Notification Service API',
      version: '1.0.0',
      description: 'API pour la gestion des notifications',
    },
    components: {
      schemas: {
        Notification: {
          type: 'object',
          properties: {
            queue: {
              type: 'string',
              description: 'La file d\'attente pour la notification'
            },
            data: {
              type: 'object',
              description: 'Les données de la notification',
              additionalProperties: true  // Puisque les données peuvent varier
            }
          }
        }
      }
    }
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Définition des routes de l'application
app.get('/', (req, res) => {
    res.send('Notification Service is Running');
});

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/send', (req, res) => {
    const { queue, data } = req.body;
    sendToQueue(queue, data);
    res.send('Notification sent.');
});

