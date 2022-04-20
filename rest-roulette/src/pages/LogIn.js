import "../css/LogIn.css";
import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


/**
 * Login function to be export for react use
 */
const LogIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();

	const [error, setError] = useState("");

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();


	/**
	 * Function to handle form submit. Uses form refs to verify user login
	 * Navigates to roulette page upon successful login
	 * @param {*} event
	 */
	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError(" ");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			navigate("/Roulette");
		} catch {
			setError("failed to sign in");
		}
		setLoading(false);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit} className="form-login">
				<h3 className="title" style={{ margin: "3rem" }}>
					Log In
				</h3>

				<div className="form-group">
					<label className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						ref={emailRef}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						ref={passwordRef}
					/>
				</div>

				<div className="form-group">
					<button
						disable={loading}
						type="submit"
						className="login-button">
						Sign in
					</button>
				</div>

				<p className="forgot-password text-right">
					Forgot <a href="/#">password?</a>
				</p>
			</form>
		</div>
	);
};

export default LogIn;
