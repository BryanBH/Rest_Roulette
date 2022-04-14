const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
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
		sort_by: req.query.sort_by,
		limit: 15,
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
					street: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipcode: business.location.zip_code,
					price: business.price,
					reviewNum: business.review_count,
					distance: business.distance,
					url: business.url,
					id: business.id,
					coordinates: business.coordinates,
				});
			}
			// sending created object back to the ApiResult component
			res.send({ object });
		})
		.catch((e) => {
			console.log(e);
		});
});

const contactEmail = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "bryanbenjumea@gmail.com",
		pass: "uujlrzcxeuzvyosv",
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Ready to Send");
	}
});

app.post("/contact", (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: name,
		to: "bryanbenjumea@gmail.com",
		subject: "Contact Form Submission",
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json({ status: "ERROR" });
		} else {
			res.json({ status: "Message Sent" });
		}
	});
});
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
