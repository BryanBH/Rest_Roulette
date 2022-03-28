import React, { useEffect, useState } from "react";
import axios from "axios";
import { finalCusine, longitude, latitude } from "../../pages/Roulette";

const ApiResult = () => {
	const [businesses, setBusinesses] = useState();
	useEffect(() => {
		// call to local server
		axios
			.get("/getYelpAPI", {
				params: {
					categories: finalCusine,
					location: "boston",
					latitude: latitude,
					longitude: longitude,
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
					const { name, rating, phoneNumber, imageUrl } = business;
					return (
						<>
							<p>
								<img
									src={imageUrl}
									style={{ height: "250px", width: "250px" }}
									alt="restaurant"
								/>
								<h3>
									Business name: {name}, Rating: {rating}
								</h3>
								<h4>Phone Number: {phoneNumber}</h4>
							</p>
						</>
					);
				})}
		</>
	);
};

export default ApiResult;
