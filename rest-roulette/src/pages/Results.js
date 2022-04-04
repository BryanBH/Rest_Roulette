// import axios from "axios";
// import React from "react";
import React from "react";
import ApiResult from "../components/ApiCall/ApiResult";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import { finalCusine } from "./Roulette";

export default class Result extends React.Component {
	render() {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}>

				<ApiResult />


			</div>
		);
	}
}
// const Results = () => {
// 	const [data, setData] = useState(null);

// 	function getresult(result) {
// 		axios
// 			.get(
// 				`${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?categories=${finalCusine}&location=boston`,
// 				{
// 					headers: {
// 						Authorization: `Bearer e1wKGcbUYGY-WsYjSvhbF3R0my11_JefuLR3z-W4gdGf2PZYJdvD2GEwolroAdtlDoTX7TIoAscQbDwiS3v02h1k3lYAJefop2mmi_7CSgSRhY2N7D20eDx6vss4YnYx`,
// 					},
// 					params: {
// 						categories: { finalCusine },
// 					},
// 				}
// 			)
// 			.then((res) => {
// 				console.log(console.log(res.data.businesses));
// 				const myData = res.data.businesses;
// 				setData(myData);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}

// 	useEffect(() => getresult(), []);

// 	if (!data) {
// 		console.log("didn't work");
// 	}

// 	return (
// 		<>
// 			<div>
// 				<ul>
// 					<li>{data[0].name}</li>
// 				</ul>
// 				<div
// 					style={{
// 						display: "flex",
// 						justifyContent: "center",
// 						alignItems: "center",
// 					}}>
// 					<NavBtn>
// 						<NavBtnLink to="/roulette">Back to wheel</NavBtnLink>
// 					</NavBtn>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Results;
