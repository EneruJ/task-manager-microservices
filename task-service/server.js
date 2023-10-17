const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);


// Connect to MongoDB (remplacez 'YOUR_CONNECTION_STRING' par votre chaîne de connexion CosmosDB)
mongoose.connect('mongodb://culinarydb:*********************************************************************************************************************************@culinarydb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@culinarydb@', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('Task Service is Running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
