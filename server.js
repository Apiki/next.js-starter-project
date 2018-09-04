const express = require('express');
const next = require('next');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    server.use(handler).listen(port, (err) => {
      if (err) throw err;
      console.log(`>> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
