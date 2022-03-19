import React from "react";
import Logo from '../images/forks-transparent.png'
import '../css/Homepage.css';

const Home = () => {
	return (
		<section class="title-container">
			<img
				src={Logo}
				alt="logo"
				class="main-logo"
			/>
			<h1 class="title">Rest Roulette</h1>
			<button type="button" class="start-btn">
				<a href="#">Start Now!</a>
			</button>
		</section>
	);
};

export default Home;
