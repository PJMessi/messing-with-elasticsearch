require('dotenv').config();
const express = require('express');
const { testFunction } = require('./controllers/elasticsearch.controller');

const app = express();

app.get('/', testFunction);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});