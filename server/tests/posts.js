const request = require('supertest');
const app = require("../server");


describe('Authentication User', function() {

    it('Should fetch authenticated user on providing auth token', function(done) {
        request(app)
        .get('/api/auth/')
        .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY")
        .expect('content-type', /json/)
        .expect(200, done);
    });

    it('Should return invalid token', function(done) {
       request(app) 
       .get('/api/auth')
       .set('Authorization', "eyJbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY")
       .expect('content-type', /json/)
       .expect(401, done);
    });
  
  });
  