const express = require('express');
const router = express.Router();
const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);
app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
