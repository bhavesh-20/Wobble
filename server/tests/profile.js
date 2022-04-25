const request = require('supertest');
const app = require("../server");


describe('Fetch Profiles', function() {

    it('Should fetch all profiles (Public route)', function(done) {
        request(app)
        .get('/api/profile/')
        .expect('content-type', /json/)
        .expect(200, done);
    });
  
  });
  