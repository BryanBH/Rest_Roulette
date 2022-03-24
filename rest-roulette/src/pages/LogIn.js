import React from "react";
import "../css/LogIn.css";


const LogIn = () => {
	return (
		<div className="login-container">
			<form className="form-login">

				<h3 className="title">Log In</h3>

				<div className="form-group">
					<label className="form-label">Email</label>
					<input type="email" className="form-control" placeholder="Enter email" />
				</div>

				<div className="form-group">
					<label >Password</label>
					<input type="password" className="form-control" placeholder="Enter password" />
				</div>

 
				<div className="form-group">
					<button type="submit" className="login-button">Sign in</button>
				</div>
				



				<p className="forgot-password text-right">
					Forgot <a href="/#">password?</a>
				</p>
			</form>
		</div>
	);
};

export default LogIn;


