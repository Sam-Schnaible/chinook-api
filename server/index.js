const express = require('express');
const app = express();
const port = 3000;
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes.js');

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
/* ADD NODEMON SO SERVER WILL RESTART AUTOMATICALLY AFTER CHANGES */