import React from "react";
import "../css/Aboutpage.css";

const About = () => {
	return (
		<div className="about-container">
			<div className="info">
				<h1 className="about-title">Can&#39;t decide where to eat?</h1>
				<p className="text">
					Rest Roulette provides a chance-based approach to picking
					out a restaurant. Simply spin the wheel and get recommended
					restaurants near you based on the results. <br></br>Sign up
					and save your favorite restaurants to visit them in the
					future!
				</p>
			</div>
			<div className="collaborators-container">
				<h2 className="collab-title">Collaborators</h2>
				<div className="collaborators-wrapper">
					<div className="collaborator">
						<h3 className="name">Bryan Benjumea</h3>
						<ul>
							<li>
								<a
									href="https://github.com/BryanBH"
									target="_blank"
									rel="noreferrer">
									Github
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/bryan-benjumea/"
									target="_blank"
									rel="noreferrer">
									Linkedin
								</a>
							</li>
						</ul>
					</div>
					<div className="collaborator">
						<h3 className="name">Kevin Obssuth</h3>
						<ul>
							<li>
								<a
									href="https://github.com/kevinobssuth"
									target="_blank"
									rel="noreferrer">
									Github
								</a>
							</li>
						</ul>
					</div>
					<div className="collaborator">
						<h3 className="name">Ryan Li</h3>
						<ul>
							<li>
								<a
									href="https://github.com/ryanli189"
									target="_blank"
									rel="noreferrer">
									Github
								</a>
							</li>
						</ul>
					</div>
					<div className="collaborator">
						<h3 className="name">Will Jordan</h3>
						<ul>
							<li>
								<a
									href="https://github.com/JordanW1atWIT"
									target="_blank"
									rel="noreferrer">
									Github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
