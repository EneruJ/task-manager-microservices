const amqp = require('amqplib/callback_api');

let channel = null;
let retries = 5;

function connectToRabbitMQ() {
  amqp.connect('amqp://rabbitmq', (error0, connection) => {
    if (error0) {
      if (retries > 0) {
        console.log('Echec de connexion à RabbitMQ, nouvelle tentative dans 5 secondes...', error0.message);
        retries--;
        setTimeout(connectToRabbitMQ, 5000);
        return;
      } else {
        throw error0;
      }
    }

    connection.createChannel((error1, ch) => {
      if (error1) {
        throw error1;
      }
      channel = ch;
      console.log('Connecté avec succès à RabbitMQ');
    });
  });
}

connectToRabbitMQ();

function sendToQueue(queue, data) {
    if (channel) {
        channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
    }
}

module.exports = {
    sendToQueue
};
