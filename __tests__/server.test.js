('use strcit');

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);


test('add 1 +2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});




describe('first test...', () => {
  it('Handles invalid request', async () => {
    const response = await request.get('/amro');
    expect(response.status).toEqual(404);
  });
  it('Handles Errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('Handles correct ...', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});