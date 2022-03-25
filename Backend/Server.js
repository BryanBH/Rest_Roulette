const { json } = require("express");
const express = require("express");
const app = express();
const port = 5000;
const request = require("request");
// import { finalCusine } from "../rest-roulette/src/pages/Roulette";

// var category;
// var location;
// app.post('/sendVariables', function (req, res) {
//     category = res.category;
//     location = res.location;
//     res.send();
// })

var options = {
	method: "GET",
	url: `https://api.yelp.com/v3/businesses/search?categories=chinese&location=boston&limit=10`,
	headers: {
		Authorization:
			"Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx",
	},
};

// get function to call yelp APi
app.get("/getYelpAPI", (req, res) => {
	// requests
	request(options, function (error, response) {
		if (error) throw new Error(error);
		const parseBody = JSON.parse(response.body);
		// grabbing the businesses key: value pair from the api result
		const businesses = parseBody["businesses"];
		const object = [];
		//looping through each business and getting the name and rating and storing it in an object
		for (let business of businesses) {
			object.push({
				name: business.name,
				rating: business.rating,
			});
		}
		// sending created object back to the ApiResult component
		res.send({ object });
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
