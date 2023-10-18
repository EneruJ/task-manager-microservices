const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);


// Connect to MongoDB (remplacez 'YOUR_CONNECTION_STRING' par votre chaîne de connexion CosmosDB)
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

app.get('/', (req, res) => {
  res.send('Task Service is Running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
