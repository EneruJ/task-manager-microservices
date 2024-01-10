// elasticsearchClient.js
const { Client } = require('@elastic/elasticsearch');

// Créez une instance du client Elasticsearch
const client = new Client({
  node: 'http://elasticsearch:9200'
});

module.exports = client;
