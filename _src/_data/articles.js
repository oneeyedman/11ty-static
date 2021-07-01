const axios = require('axios');

module.exports = async function() {
  const ARTICLES_ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';
  
  return axios.get(ARTICLES_ENDPOINT)
    .then(res => res.data)
    
    .catch(err => console.error(err));
}