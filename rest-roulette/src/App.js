import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/Sign-up" element={<SignUp />} />
				<Route path="/log-in" element={<LogIn />} />
			</Routes>
		</Router>

		// <Router>
		// 	<Navbar />
		// 	<Routes>
		// 		<Route exact path="/" element={<Home />} />
		// 		<Route path="/logIn" element={<LogIn />} />
		// 		<Route path="/signUp" element={<SignUp />} />
		// 	</Routes>
		// </Router>
	);
}

export default App;
