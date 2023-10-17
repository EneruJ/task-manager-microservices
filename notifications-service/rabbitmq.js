const amqp = require('amqplib/callback_api');

let channel = null;

amqp.connect('amqp://rabbitmq', (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, ch) => {
        if (error1) {
            throw error1;
        }
        channel = ch;
    });
});

function sendToQueue(queue, data) {
    if (channel) {
        channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
    }
}

module.exports = {
    sendToQueue
};
