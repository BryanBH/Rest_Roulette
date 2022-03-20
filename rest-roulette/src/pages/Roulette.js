import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";

const data = [
	{ option: "Chinese" },
	{ option: "Mexican" },
	{ option: "Italian" },
	{ option: "Korean" },
	{ option: "Greek" },
	{ option: "Indian" },
	{ option: "Moroccan" },
	{ option: "BBQ" },
];

let finalCusine = "";

const Roulette = () => {
	const [mustSpin, setMustSpin] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
	};

	finalCusine = data[prizeNumber].option;

	const ResultsBtn = () => {
		return (
			<NavBtn>
				<NavBtnLink to="/results">See Results</NavBtnLink>
			</NavBtn>
		);
	};
	return (
		<>
			<div align="center">
				<h1 align="center">Roulette Game</h1>
				<hr />
				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					data={data}
					outerBorderColor={["#f2f2f2"]}
					outerBorderWidth={[10]}
					innerBorderColor={["#f2f2f2"]}
					radiusLineColor={["#dedede"]}
					radiusLineWidth={[5]}
					textColors={["#ffffff"]}
					fontSize={[20]}
					perpendicularText={[true]}
					backgroundColors={[
						"#F22B35",
						"#F99533",
						"#24CA69",
						"#514E50",
						"#46AEFF",
						"#9145B7",
					]}
					onStopSpinning={() => {
						setMustSpin(false);
						setShowResults(true);
					}}
				/>
				<button className="button2" onClick={handleSpinClick}>
					SPIN
				</button>
				<br />
				
				<h2>
					{!mustSpin
						? data[prizeNumber].option
						: "Spinnng the Wheel..."}
				</h2>
				<h2>Below is the variable you can use to pass to api call</h2>
				<br></br>
				<h3>{finalCusine}</h3>
				<br></br>
				<br></br>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					{showResults ? <ResultsBtn /> : null}
				</div>
				<hr />
			</div>
		</>
	);
};

// const resultCusine = () => {
// 	return (
// 		{finalCusine}
// 	)
// }
export { finalCusine };
export default Roulette;
