import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
	{ option: "Chinese" },
	{ option: "Mexican" },
	{ option: "Italian" },
	{ option: "Korean" },
	{ option: "Greek" },
	{ option: "Indian" },
	{ option: "Moroccan" },
];

const Roulette = () => {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
	};

	return (
		<>
			<Wheel
				mustStartSpinning={mustSpin}
				prizeNumber={prizeNumber}
				data={data}
				onStopSpinning={() => {
					setMustSpin(false);
				}}
			/>
			<button onClick={handleSpinClick}> SPIN</button>
		</>
	);
};

// !mustSpin ? data[prizeNumber].option : "0";

export default Roulette;
