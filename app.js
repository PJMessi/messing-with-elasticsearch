require('dotenv').config();
const express = require('express');
const { fetchIndices, searchIndex } = require('./controllers/elasticsearch.controller');

const app = express();

app.get('/indices', fetchIndices);
app.get('/indices/search', searchIndex)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});