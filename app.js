const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

app
  .use(express.static(path.join(__dirname, '/public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/gpp', (req, res) => res.render('pages/gpp'))
  .listen(PORT, () => console.log(`listining on port ${PORT}`))
