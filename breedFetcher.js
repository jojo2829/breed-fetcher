const request = require("request");
const args = process.argv.slice(2);

function makeRequest(petid, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${petid}`, (error, response, body) => {

    if (error) {
      console.log(error);
      return;
    }

    if (body === "[]") {
      console.log("cat not found");
      return;
    }

    callback(body);
 
  });
}

function displayData(body) {
  const data = JSON.parse(body);
  const description = data[0].description;
  //console.log("data:", data);
  console.log("description: " + description);
}

makeRequest(args[0], displayData);