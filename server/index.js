const express = require('express');
const app = express();
const compression = require('compression');
const morgan = require('morgan');
const router = require('./routes.js');
const path = require('path');
const cors = require('cors');
const port = 3000;

const inProduction = process.env.Node_ENV === "development";


app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

app.use(
  cors({
    origin: inProduction ? "http://localhost:5000" : "http://localhost:8080"
  })
);
app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/testing', (req, res) => {
  res.send('WORTHLESSS!!!')
})

app.use('/', router);
app.get('/*', (req, res) => res.sendFile(path.resolve('../public/index.html')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// app.use(router)

