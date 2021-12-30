const express = require('express');
const morgan = require('morgan');
const path = require('path');
const pug = require('pug');
const app = express();
const port = 3000;

//HHTP loger
app.use(morgan("combined"));
app.use(express.static("public"));
//template enginer
app.set('index', './views');
app.set('view engine', 'pug');

//route
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });