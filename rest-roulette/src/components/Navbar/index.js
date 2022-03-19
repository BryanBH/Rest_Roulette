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
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/contact-us" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/Sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/log-in">Log In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
