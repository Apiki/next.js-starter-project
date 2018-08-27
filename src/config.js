const restUrl = process.env.API_REST_URL;
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  restUrl,
  isDev,
};
