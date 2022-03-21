import React from "react";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import { finalCusine } from "./Roulette";

const Results = () => {
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
