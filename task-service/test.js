const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const should = chai.should();

chai.use(chaiHttp);

describe('Tasks', () => {
    describe('/GET tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

