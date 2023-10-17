const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

const server = 'http://localhost:6000'; // Remplacez par l'URL de votre service notification-service lorsqu'il est exécuté localement.

describe('Notifications', () => {
    // Test pour vérifier si les notifications sont correctement envoyées
    describe('/POST send notification', () => {
        it('it should send a notification', (done) => {
            const notification = {
                message: "Test notification message"
            }
            chai.request(server)
                .post('/send')
                .send(notification)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.message.should.eql("Notification sent");
                    done();
                });
        });
    });
    
    // Test pour récupérer l'état de la file d'attente
    describe('/GET queue status', () => {
        it('it should GET the queue status', (done) => {
            chai.request(server)
                .get('/queue-status')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('messagesInQueue');
                    done();
                });
        });
    });
});
