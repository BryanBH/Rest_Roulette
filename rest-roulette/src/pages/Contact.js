import React, { useState } from "react";
import "../css/Contactpage.css";

const Contact = () => {
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch("/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<div className="contactpage-conatiner">
			<div className="form-info">
				<h1>Give us your feedback!</h1>
				<p>
					Let us know what you think about Rest Roulette and how we
					can improve this page
				</p>
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div className="form-section">
						<label htmlFor="name" className="label">
							Name:
						</label>
						<input type="text" id="name" required />
					</div>
					<div className="form-section">
						<label htmlFor="email" className="label">
							Email:
						</label>
						<input type="email" id="email" required />
					</div>
					<div className="form-section">
						<label htmlFor="message" className="label">
							Message:
						</label>
						<textarea id="message" required />
					</div>

					<div className="btn">
						<button type="submit">{status}</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
