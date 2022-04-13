import React, { useRef, useState } from "react";
// import '../css/LogIn.css'
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const nameRef = useRef();
	const confirmRef = useRef();
	const { signup, currentUser } = useAuth();

	const [error, setError] = useState("");

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const dbInstanace = collection(database, "users");
	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmRef.current.value) {
			return setError("Passwords do not match");
		}

		console.log(currentUser);
		try {
			setError(" ");
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			addDoc(dbInstanace, {
				uid: currentUser._delegate.uid,
				name: nameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
			})
				.then(() => {
					alert("data sent");
				})
				.catch((err) => {
					alert(err.message);
				});
			navigate("/Roulette");
		} catch {
			setError("failed to create an account");
		}
		setLoading(false);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit} className="form-group">
				<h3 className="title" style={{ margin: "10rem 0 3rem 0 " }}>
					Register
				</h3>
				{/* {error && <Alert variant="danger">{error}</Alert>} */}

				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Name"
						name="name"
						ref={nameRef}
					/>
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						ref={emailRef}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						name="password"
						ref={passwordRef}
					/>
				</div>

				<div className="form-group">
					<label>Confirm Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Confirm Password"
						ref={confirmRef}
					/>
				</div>

				<button
					disable={loading}
					type="submit"
					className="login-button">
					Register
				</button>

				<p className="forgot-password text-right">
					Already registered <a href="/log-in">log in?</a>
				</p>
			</form>
		</div>
	);
}

// export default SignUp;
