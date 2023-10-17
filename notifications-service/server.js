const express = require('express');
const bodyParser = require('body-parser');
const { sendToQueue } = require('./rabbitmq');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Notification Service is Running');
});

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/send-notification', (req, res) => {
    const { queue, data } = req.body;
    sendToQueue(queue, data);
    res.send('Notification sent.');
});

