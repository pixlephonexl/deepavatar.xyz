const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'https://deepavatar-api-production.herokuapp.com/'
    : 'http://localhost:3010',
};
