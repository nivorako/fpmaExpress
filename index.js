const express = require('express');
const router = require('./app/router');
// const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(router);
app.listen(3000);
