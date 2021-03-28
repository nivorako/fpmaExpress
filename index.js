const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('allo');
});

app.listen(3000);
