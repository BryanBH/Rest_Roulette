import Logo from "../images/forks-transparent.png";
import profile from "../images/image.jpg";
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
	const [userName, setUserN] = useState();
	const [restName, setName] = useState([]);
	const [restNum, setNum] = useState([]);
	const [restRate, setRate] = useState([]);
	const [restImage, setImage] = useState([]);
	useEffect(() => {
		getData();
	  }, []);
	  const Frame = () => {
		return (
			<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
				<div className="featured-place-wrap">
					<img
					src={restImage}
					height="400px"
					overflow="hidden"
					alt="#"
					/>
					<span className="featured-rating-orange ">
						{restRate}
					</span>
					<div className="featured-title-box">
						<h5>{restName}</h5>
						<ul>
							<li>
								<span className="icon-screen-smartphone" />
								{
									restNum
								}
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

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
	const username = collection(database, "users");
	const [restaurantTable, setRestaurantTable] = useState();
	
	
	const getData = async () => {
		const data = await getDocs(dbInstance);
		const names = await getDocs(username);
		const obj = data.docs.map((item) => {
			return { ...item.data(), id: item.id };
		});
		const o = names.docs.map((t) => {
			return { ...t.data(), id: t.id };
		});
		const userArray = [];
		const nameArray = [];
		for (let index of obj) {
			if (currentUser._delegate.uid === index.userId) {
				userArray.push(index);
			}
		}
		for (let i of o) {
			if(currentUser._delegate.uid == i.uid)
			{
				nameArray.push(i);
			}
		}
		
		console.log(nameArray)
		return (
			<div>
				{nameArray &&
					nameArray.map((item) => {
						const {
							uid,
							name
						} = item;
						setUserN(name)
						console.log(name)
					})}
				{userArray &&
					userArray.map((item) => {
						const {
							image,
							phoneNumber,
							rating,
							restaurantName,
							id,
						} = item;
						setName(restaurantName)
						setImage(image)
						setNum(phoneNumber)
						setRate(rating)
						
					})}
					
			</div>
		);
	};

	return (
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
							src={profile}
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
						<h1><strong>Name</strong></h1>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						{currentUser ? (
							<h4>{userName}</h4>
						) : (
							""
						)}

						
					</div>
					<br></br>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<h1><strong>Email</strong></h1>
						<br></br>
						<div><h3>{" " + currentUser.email}</h3></div>
							
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>

					</div>
					<br></br>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}>
						<h1><strong>Bookmarks</strong></h1>
						
					</div>
					<br></br>
					<div style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px,0px",
						}}> <Frame></Frame>
				</div>
			</div>

			<div className="w-100 text-center mt-2">
			<button variant="link" onClick={handleLogout}>
					Log Out
				</button>
			</div>
			<div>
				<br></br>
			</div>
			</div>
	);
};
export default User;