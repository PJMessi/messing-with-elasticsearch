const { Client } = require('@elastic/elasticsearch');

const client = new Client({ 
    node: process.env.KIBANA_API_URL,
    auth: {
        username: process.env.KIBANA_USERNAME,
        password: process.env.KIBANA_PASSWORD
    }
})

module.exports.testFunction = async (request, response) => {

    try {
        const { body } = await client.search({
            index: 'kibana_sample_data_logs',
            body: {
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