const request = require("request");

function fetchBreedDescription(breedName, callback) {
  makeRequest(breedName, callback);
 
}

function makeRequest(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("cat not found");
      return;
    }

    const desc = data[0].description;

    callback(error, desc);
 
  });
}

module.exports = {
  fetchBreedDescription
};