const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,response, body) => { // this line requests information from a web page

    if (error) {
      // console.log("Error: ", error.message); // if there is an error
      callback(error, body); // exit the process
    }

    const data = JSON.parse(body);

    if (!data[0]) callback(error, "Cat breed not found"); // Edge case 1 - If data comes undefined, cat breed not found.
    else callback(error, data[0].description);
  });
};



module.exports = { fetchBreedDescription };
