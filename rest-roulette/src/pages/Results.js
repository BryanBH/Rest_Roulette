import React, { useEffect, useState } from "react";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import { finalCusine } from "./Roulette";


const Results = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			"Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx"
		);

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow",
		};

		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=${finalCusine}&location=boston`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => setData(result))
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>This is the Results page!</h1>
				{/* <p style={{ fontSize: "2rem" }}>
					The only way to access this page is by clicking the results
					button in the roullete wheel page
				</p> */}
				<br></br>
				<h2> The result cuisine type is: {finalCusine}</h2>
				<ul>{data && data.map({ })}</ul>
				<br></br>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<NavBtn>
						<NavBtnLink to="/roulette">Back to wheel</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		</>
	);
};

export default Results;
