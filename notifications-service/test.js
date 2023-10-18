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
                queue: "someQueueName",
                data: {
                    message: "Test notification message"
                }
            }
            chai.request(server)
            .post('/send')
            .send(notification)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.eql("Notification sent.");
                done();
            });
        });
    });
});
