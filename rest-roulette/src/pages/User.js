import Logo from "../images/forks-transparent.png";
import image from "../images/image.jpg";
import "../css/Homepage.css";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement"
import "../css/user.css";
// import EditButton from 'react-edit-button'
import React, { useState } from 'react'
const User = () => {
	var nameIsShown = false;
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [printName, setPrintN] = useState(false);
	const [printEmail, setPrintE] = useState(false);
	const [showN, setShowN] = useState(false);
	const [showE, setShowE] = useState(false);
	function getName(val)
	{
		setName(val.target.value)
	}
	function getEmail(val) {
		setEmail(val.target.value)
	}
	return (
		<>
			<div>
				<div>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						<img src={image} alt="image" className="image-logo" style={{ width: "200px", height: "200px", borderRadius: "100px" }} />
						
					</div>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						<h1>Name</h1>
						
					</div>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						{
							printName ? <h4>{name}</h4>  : "William Jordan"
						}
						
						<button onClick={() => setShowN(!showN)}>Edit</button>
						{
							showN ? <input type="text" onChange={getName} required={true} /> : null
						}
						{
							showN ? < button onClick={() => setPrintN(true)}>Confirm</button> : null
						}
					</div>
					<br></br>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						<h1>Email</h1>

					</div>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						{
							printEmail? <h4>{email}</h4> : "JordanW1@wit.edu"
						}
						<button onClick={() => setShowE(!showE)}>Edit</button>
						{
							showE ? <input type="text" onChange={getEmail} required={true} /> : null 
						}
						{
							showE ? < button onClick={() => setPrintN(true)}>Confirm</button> : null
						}
					</div>
					<br></br>
					<div style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						margin: "18px,0px"
					}}>
						<h1>Bookmarks</h1>
					</div>
				</div>
			</div>
		</>
	);
};




export default User;


