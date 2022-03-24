import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from './forks.jpg';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1>
						<i>Rest Roulette</i>
					</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="about" activestyle="true">
						About
					</NavLink>
					<NavLink to="contact-us" activestyle="true">
						Contact Us
					</NavLink>
					<NavLink to="User" activestyle="true">
						Profile
					</NavLink>
					<NavLink to="Sign-up" activestyle="true">
						Sign Up
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="log-in">Log In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
