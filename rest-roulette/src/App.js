import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Roulette from "./pages/Roulette";
import Results from "./pages/Results";
import ResultsWIP from "./pages/ResultsWIP"
import User from "./pages/User";
// import Fecth from "./components/Fetch/Fecth";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import {firebaseConfig} from "./firebase"




function App() {
	return (

		<Router>
			<Navbar />
			<AuthProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="roulette" element={<Roulette />} />
				<Route	path="results" element={<Results/>}/>
				<Route	path="resultsWIP" element={<ResultsWIP/>}/>
				<Route path="about" element={<About />} />
				<Route path="contact-us" element={<Contact />} />
				<Route path="Sign-up" element={<SignUp />} />
				<Route path="log-in" element={<LogIn />} />
				<Route path="User" element={<User />} />
			</Routes>
			</AuthProvider>
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
