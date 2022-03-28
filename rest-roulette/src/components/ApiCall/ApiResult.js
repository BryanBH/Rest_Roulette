import React, { useEffect, useState } from "react";
import axios from "axios";
import { finalCusine } from "../../pages/Roulette";

const ApiResult = () => {
	const [businesses, setBusinesses] = useState();

	var options = {
		method: "GET",
		url: `https://api.yelp.com/v3/businesses/search?categories=${finalCusine}&location=boston&limit=10`,
		headers: {
			Authorization:
				"Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx",
		},
	};
	useEffect(() => {
		// axios
		// 	.post("/variables", {
		// 		category: finalCusine,
		// 		area: "boston"
		// 	})
		// 	.then((res) => {
		// 		console.log(res.status);
		// 	})
		// 	.catch((err) => {
		// 		console.log("Error!", err);
		// 	});

		// call to local server
		axios
			.get("/getYelpAPI", {
				params: {
					categories: finalCusine,
					location: "boston",
				},
			})
			.then((response) => {
				const responseBusinesses = response.data.object;
				setBusinesses(responseBusinesses);
			});
	}, []);

	return (
		<>
			<h1> API call results</h1>
			{/* checks if business variable is not undefined, if it isn't then map and display the name and rating */}
			{businesses &&
				businesses.map((business) => {
					const { name, rating, phoneNumber } = business;
					return (
						<>
							<p>
								<h3>
									Business name: {name}, Rating: {rating}
								</h3>
								<h4>Phone Number: { phoneNumber}</h4>
							</p>
						</>
					);
				})}
		</>
	);
};

export default ApiResult;
