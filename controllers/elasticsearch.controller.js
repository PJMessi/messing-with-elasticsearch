const { Client } = require('@elastic/elasticsearch');

const client = new Client({ 
    node: process.env.EL_API_URL,
    auth: {
        username: process.env.EL_USERNAME,
        password: process.env.EL_PASSWORD
    }
})

module.exports.fetchIndices = async (request, response) => {

    try {
        const { body } = await client.cat.indices({
            format: 'json'
        });
    
        return response.json(body);

    } catch (error) {
        console.log(error);
        return response.json({error: error.message});
    }

}

module.exports.searchIndex = async (request, response) => {

    const limit = request.query.limit || 2;
    const page = request.query.page || 1;

    const from = (page - 1) * limit;

    try {
        const { body } = await client.search({
            index: 'kibana_sample_data_logs',
            _source: ["ip"],
            body: {
                from: from,
                size: limit,
                query: {
                    match_all: {  }
                }
            }
        })
    
        return response.json(body.hits.hits);

    } catch (error) {
        console.log(error);
        return response.json({error: error.message});
    }

}