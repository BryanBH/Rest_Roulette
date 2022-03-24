import React from "react";
import Logo from "../images/forks-transparent.png";
import "../css/Homepage.css";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";

const Home = () => {
	return (
		<>
			<section className="title-container">
				<img src={Logo} alt="logo" className="main-logo" />
				<h1 className="title">Rest Roulette</h1>
				<NavBtn style={{margin: "2rem"}}>
					<NavBtnLink to="roulette">Start Now!</NavBtnLink>
				</NavBtn>
			</section>
		</>
	);
};

export default Home;
