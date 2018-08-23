const next = require('next');
const express = require('express');

const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', isDev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (error) => {
      if (error) throw error;
      console.log(`>> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
