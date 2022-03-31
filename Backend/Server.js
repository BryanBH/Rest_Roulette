const express = require("express");
const app = express();
const port = 5000;

const yelp = require("yelp-fusion");

// get function to call yelp APi
app.get("/getYelpAPI", (req, res) => {
	// requests

	const key =
		"e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx";

	var options = {
		categories: req.query.categories,
		// location: req.query.location,
		latitude: req.query.latitude,
		longitude: req.query.longitude,
		limit: 5,
	};
	const client = yelp.client(key);

	client
		.search(options)
		.then((response) => {
			const parseBody = JSON.parse(response.body);
			// grabbing the businesses key: value pair from the api result
			const businesses = parseBody["businesses"];
			const object = [];
			//looping through each business and getting the name and rating and storing it in an object
			for (let business of businesses) {
				object.push({
					name: business.name,
					rating: business.rating,
					phoneNumber: business.display_phone,
					imageUrl: business.image_url,
				});
			}
			// sending created object back to the ApiResult component
			res.send({ object });
		})
		.catch((e) => {
			console.log(e);
		});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
