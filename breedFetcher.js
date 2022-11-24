const request = require('request');

const breedFetcher = (input) => {

  let query = input[2];

  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error,response, body) => { // this line requests information from a web page
    // console.log(body);
    // console.log(typeof body);

    //console.log(error, response);

    if (error) {
      console.log("Error: ", error.message); // if there is an error
      process.exit(); // exit the process
    }

    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);

    if (!data[0]) console.log("Cat breed not found"); // Edge case 1 - If data comes undefined, cat breed not found.
    else console.log(data[0].description);



  });
};

breedFetcher(process.argv);
