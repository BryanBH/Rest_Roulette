import axios from "axios";
// import React from "react";
import React, { Component, useEffect, useState } from "react";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import { finalCusine } from "./Roulette";

export default class Result extends React.Component {

	componentDidMount() {
		axios
			.get(
				`${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?categories=${finalCusine}&location=boston`,
				{
					headers: {
						Authorization: `Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx`,
					},
					params: {
						categories: { finalCusine },
					},
				}
			)
			.then((res) => {
				console.log(res.data.businesses)
				console.log(console.log(res.data.businesses[0].name));
				console.log(console.log(res.data.businesses[1].name));
				console.log(console.log(res.data.businesses[2].name));
				const myData = res.data.businesses;
				this.setState({ myData });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column"
				}}>
				<h1>The selected cuisine is: {finalCusine}</h1>

				<div style={{ marginLeft: "2rem" }}>
					<NavBtn>
						<NavBtnLink to="/roulette">Back to wheel</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		);
	}
}
// const Results = () => {
// 	const [data, setData] = useState(null);

// 	function getresult(result) {
// 		axios
// 			.get(
// 				`${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?categories=${finalCusine}&location=boston`,
// 				{
// 					headers: {
// 						Authorization: `Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx`,
// 					},
// 					params: {
// 						categories: { finalCusine },
// 					},
// 				}
// 			)
// 			.then((res) => {
// 				console.log(console.log(res.data.businesses));
// 				const myData = res.data.businesses;
// 				setData(myData);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}

// 	useEffect(() => getresult(), []);

// 	if (!data) {
// 		console.log("didn't work");
// 	}

// 	return (
// 		<>
// 			<div>
// 				<ul>
// 					<li>{data[0].name}</li>
// 				</ul>
// 				<div
// 					style={{
// 						display: "flex",
// 						justifyContent: "center",
// 						alignItems: "center",
// 					}}>
// 					<NavBtn>
// 						<NavBtnLink to="/roulette">Back to wheel</NavBtnLink>
// 					</NavBtn>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Results;
