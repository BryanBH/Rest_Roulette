import Logo from "../images/forks-transparent.png";
import image from "../images/image.jpg";
import "../css/Homepage.css";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import "../css/user.css";
// import EditButton from 'react-edit-button'
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";

const User = () => {
	var nameIsShown = false;
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [printName, setPrintN] = useState(false);
	const [printEmail, setPrintE] = useState(false);
	const [showN, setShowN] = useState(false);
	const [showE, setShowE] = useState(false);
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();
	function getName(val) {
		setName(val.target.value);
	}
	function getEmail(val) {
		setEmail(val.target.value);
	}

	async function handleLogout() {
		setError("");

		try {
			await logout();
			navigate("/log-in");
		} catch {
			setError("Failed to log out");
		}
	}

	const dbInstance = collection(database, "Restaurants");
	const [restaurantTable, setRestaurantTable] = useState();
	
	const getData = async () => {
		const data = await getDocs(dbInstance);
		console.log(`User id: ${currentUser._delegate.uid}`);
		const obj = data.docs.map((item) => {
			return { ...item.data(), id: item.id };
		});
		console.log(obj);
		const userArray = [];
		for (let index of obj) {
			console.log(index);
			if (currentUser._delegate.uid === index.userId) {
				userArray.push(index);
			}
		}

		console.log(userArray);
		return (
			<div>
				{userArray &&
					userArray.map((item) => {
						const {
							image,
							phoneNumber,
							rating,
							restaurantName,
							id,
						} = item;

						<div>
							<img src={image} alt="restaurant" />
							<h2 key={id}>{restaurantName}</h2>
							<h3>{phoneNumber}</h3>
							<h3>{rating}</h3>
						</div>;
					})}
			</div>
		);
	};

	return (
		<>
			<div>
				<div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<img
							src={image}
							alt="logo"
							className="image-logo"
							style={{
								width: "200px",
								height: "200px",
								borderRadius: "100px",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<h1>Name</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						{currentUser ? (
							<h4>{currentUser.name}</h4>
						) : (
							"William Jordan"
						)}

						<button onClick={() => setShowN(!showN)}>Edit</button>
						{showN ? (
							<input
								type="text"
								onChange={getName}
								required={true}
							/>
						) : null}
						{showN ? (
							<button onClick={() => setPrintN(true)}>
								Confirm
							</button>
						) : null}
					</div>
					<br></br>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<h1>Email</h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						{printEmail ? <h4>{email}</h4> : "JordanW1@wit.edu"}
						<button onClick={() => setShowE(!showE)}>Edit</button>
						{showE ? (
							<input
								type="text"
								onChange={getEmail}
								required={true}
							/>
						) : null}
						{showE ? (
							<button onClick={() => setPrintN(true)}>
								Confirm
							</button>
						) : null}
					</div>
					<br></br>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<h1>Bookmarks</h1>
						<button onClick={getData}>See BookMarks</button>
					</div>
				</div>
			</div>

			<div className="w-100 text-center mt-2">
				<button variant="link" onClick={handleLogout}>
					Log Out
				</button>
			</div>
		</>
	);
};

export default User;
