import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";

const data = [
	{ option: "chinese" },
	{ option: "mexican" },
	{ option: "italian" },
	{ option: "korean" },
	{ option: "greek" },
	{ option: "spanish" },
	{ option: "moroccan" },
	{ option: "japanese" },
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
			<NavBtn style={{marginLeft:"2rem"}}>
				<NavBtnLink to="/results">See Results</NavBtnLink>
			</NavBtn>
		);
	};
	return (
		<>
			<div align="center">
				<h1 align="center">Let The Wheel Decide...</h1>
				<hr />
				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					data={data}
					outerBorderColor={["#221f1f"]}
					outerBorderWidth={[10]}
					// innerRadius={[]}
					innerBorderColor={["#221f1f"]}
					radiusLineColor={["#221f1f"]}
					radiusLineWidth={[5]}
					textColors={["#221f1f"]}
					fontSize={[20]}
					textDistance={[80]}
					perpendicularText={[true]}
					backgroundColors={["#dc2f02", "#f5f3f4"]}
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
				{/* <h2>Below is the variable you can use to pass to api call</h2>
				<br></br>
				<h3>{finalCusine}</h3> */}
				<br></br>
				<br></br>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginBottom: "50px",
					}}>
					{showResults ? <ResultsBtn /> : null}
				</div>
			</div>
		</>
	);
};

export { finalCusine };
export default Roulette;
