import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import useGeolocation from "../hooks/useGeolocation";
import Select from "react-select";
import allowedCategories from "../json/categories.json";

/**
 * Initial cuisine type data
 */
const data = [
	// { option: "chinese", label: "Chinese" },
	{ option: "Mexican", label: "Mexican" },
	{ option: "Italian", label: "Italian" },
	{ option: "Korean", label: "Korean" },
	{ option: "Greek", label: "Greek" },
	{ option: "Spanish", label: "Spanish" },
	{ option: "Moroccan", label: "Moroccan" },
	{ option: "Japanese", label: "Japanese" },
	{ option: "Colombian", label: "Colombian" },
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
	const [userInput, setUserInput] = useState("");

	/**
	 * creates list with all major retaurant categories from the json file
	 */
	const restaurantCategoryList = allowedCategories.filter(
		(object) => object.parents[0] === "restaurants"
	);

	/**
	 *  set geo location information
	 */
	const location = useGeolocation();
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

	// sets resulting cuisine type from the wheel spin
	finalCusine = data[prizeNumber].option.toLowerCase();

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
			const newPrizeNumber = Math.floor(Math.random() * data.length);
			setPrizeNumber(newPrizeNumber);
			console.log(list);
		}
	};

	/**
	 * sets the userinput value
	 */
	const handleUserInput = (e) => {
		setUserInput(e.target.value);
	};

	/**
	 * Helper function that checks to see if the user input is the restaurant catergory list
	 * @param {userInput} input
	 * @returns true if it is, false if its not
	 */
	const isInputInCatgeoryList = (input) => {
		const isFound = restaurantCategoryList.some((object) => {
			let bool = false;
			if (object.alias === input.toLowerCase()) {
				bool = true;
			}
			return bool;
		});
		return isFound;
	};

	/**
	 * Helper function that checks to see if the user input is already in the data object
	 * @param {userInput} input
	 * @returns true if it is, false other wise
	 */
	const isInData = (input) => {
		let bool = false;
		for (let object of data) {
			if (object.option === input.toLowerCase()) {
				bool = true;
			} else bool = false;
		}

		return bool;
	};

	/**
	 * function compares user input to category list and data list. If it is an acceptable category, it is aded to the data list, if not the user is alerted with the reason.
	 */
	const addCusine = () => {
		const isInList = isInputInCatgeoryList(userInput);
		const alreadyInData = isInData(userInput);

		if (alreadyInData) {
			alert(
				`${userInput} is already on the wheel, Try different cusine type`
			);
			setUserInput("");
		} else if (isInList && !alreadyInData) {
			data.push({
				option: userInput.toLowerCase(),
				label: userInput.charAt(0).toUpperCase() + userInput.slice(1),
			});
			updateList(data);
			// console.log(data);
			setUserInput("");
		} else if (!isInList) {
			alert(
				`${userInput} is not a major category. Try different cusine type`
			);
			setUserInput("");
		}
	};

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
							? `${finalCusine
									.charAt(0)
									.toUpperCase()}${finalCusine.slice(1)}`
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
					<input
						type="text"
						value={userInput}
						onInput={handleUserInput}
						name="add"></input>
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
