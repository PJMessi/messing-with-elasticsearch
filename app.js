const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: 'Elastic search'});
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});