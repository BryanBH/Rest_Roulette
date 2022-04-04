import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import useGeolocation from "../hooks/useGeolocation";
import Select from "react-select";

/**
 * Initial cuisine type data
 */
const data = [
	{ option: "chinese", label: "Chinese" },
	{ option: "mexican", label: "Mexican" },
	{ option: "italian", label: "Italian" },
	{ option: "korean", label: "Korean" },
	{ option: "greek", label: "Greek" },
	{ option: "spanish", label: "Spanish" },
	{ option: "moroccan", label: "Moroccan" },
	{ option: "japanese", label: "Japanese" },
	{ option: "colombian", label: "Colombian" },
];

let finalCusine = "";
let longitude;
let latitude;

const Roulette = () => {
	const [mustSpin, setMustSpin] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [list, updateList] = useState(data);

	const location = useGeolocation();
	/**
	 *  set geo location information
	 */
	if (location.loaded) {
		latitude = location.coordinates.lat;
		longitude = location.coordinates.lng;
	}

	/**
	 * function handles the wheel spin
	 * generates and sets a random prize number in which the wheel will end its spinning animation
	 */
	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
	};

	finalCusine = data[prizeNumber].option;

	/**
	 *
	 * @returns The results button with bath to results page
	 */
	const ResultsBtn = () => {
		return (
			<NavBtn style={{ marginLeft: "2rem" }}>
				<NavBtnLink to="/results">See Results</NavBtnLink>
			</NavBtn>
		);
	};

	/**
	 * handles the current selected cuisine type to be displayed in the select element
	 * @param {*} e event
	 */
	const handleSelectChange = (e) => {
		setSelectedOption(e);
	};

	/**
	 * function gets the index of the selected cusine type to remove and searches for the index in the data array.
	 * the updateList hook is then called with the splices array without the removed cuisine type
	 */
	const removeCuisine = () => {
		if (typeof selectedOption === "object" && selectedOption !== null) {
			const indexToRemove = data.findIndex((object) => {
				return object.option === selectedOption.option;
			});

			updateList(data.splice(indexToRemove, 1));
			console.log(list);
		}
	};

	const addCusine = () => {};

	// rendering
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

				<div>
					<h2>
						{!mustSpin
							? data[prizeNumber].option
							: "Spinnng the Wheel..."}
					</h2>
				</div>

				<div
					style={{
						width: "43%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<label htmlFor="remove">
						Remove cusine type from the wheel
					</label>
					<Select
						placeholder="Select"
						value={selectedOption}
						options={data}
						onChange={handleSelectChange}
						name="remove"></Select>
					<button onClick={removeCuisine}>Remove</button>
				</div>
				<div
					style={{
						width: "43%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<label htmlFor="add">Add a cusine type to the wheel</label>
					<input type="text" name="add"></input>
					<button onClick={addCusine}>Add</button>
				</div>
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

export { longitude, latitude, finalCusine };
export default Roulette;
