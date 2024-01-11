const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('@elastic/elasticsearch');
const swaggerUi = require('swagger-ui-express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

const client = new Client({ node: 'http://elasticsearch:9200' });

const users = {
  admin: { password: "adminpassword" }
};

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

// Endpoint pour la connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    const token = jwt.sign({ username }, 'votre-secret-jwt', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Les informations d\'identification sont incorrectes');
  }
});

// Middleware pour vérifier le token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Un token est requis pour l\'authentification');
  }

  try {
    const decoded = jwt.verify(token, 'votre-secret-jwt');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Token invalide');
  }
  return next();
};

// Exemple d'une route protégée
app.get('/protected', verifyToken, (req, res) => {
  res.send(`Bonjour, ${req.user.username}. Ceci est une route protégée.`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
