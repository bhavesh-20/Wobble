const request = require('supertest');
const app = require("../server");


describe('Fetch Posts', function() {

    it('Should fetch posts', function(done) {
        request(app)
        .get('/api/posts/')
        .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY")
        .expect('content-type', /json/)
        .expect(200, done);
    });

    it('Should fetch users\' feed', function(done) {
       request(app) 
       .get('/api/posts/feed')
       .set('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYWY3ODJjNjg2YmYzNGE4YWNlNTJlIn0sImlhdCI6MTY1MDg3ODQ3NCwiZXhwIjoxNjUwODgyMDc0fQ.jxdajBgZlRGiIEoG7D1hbmTtmwLFkoCsP4hp4gko3eY")
       .expect('content-type', /json/)
       .expect(200, done);
    });
  
  });
  