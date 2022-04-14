import React, { useEffect, useState } from "react";
import "../../css/Results.css";
import "../../css/bootstrap.min.css";
import "../../css/simple-line-icons.css";
import { NavBtn, NavBtnLink } from "../../components/Navbar/NavbarElement";
import axios from "axios";
import { finalCusine, longitude, latitude } from "../../pages/Roulette";
import { Map, Marker } from "pigeon-maps";
import locationicon from "../../images/locationicon.png";
import yelpicon from "../../images/yelp.png";
import bookmarkicon from "../../images/bookmark.png";
import { stamenTerrain } from "pigeon-maps/providers";
// import { Dropdown } from 'react-bootstrap';
// import { DropdownButton } from 'react-bootstrap';

// DB stuff
import { database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

let cords = [];
// let sort = "";
const ApiResult = () => {
	const [businesses, setBusinesses] = useState();
	const [coordinates, setCords] = useState([]);
	// const [sort_by, setSort] = useState("best_match");

	useEffect(() => {
		// call to local server
		axios
			.get("/getYelpAPI", {
				params: {
					categories: finalCusine,
					latitude: latitude,
					longitude: longitude,
					sort_by: "distance",
				},
			})
			.then((response) => {
				const responseBusinesses = response.data.object;
				setBusinesses(responseBusinesses);
			});
	}, []);

	const handleCordsUpdate = (latitude, longitude) => {
		cords = [latitude, longitude];
		console.log(`cords updated: ${cords}`);
		setCords(cords);
	};

	// const handleSortUpdate = (sortby) => {
	// 	// if (sort_by == null){
	// 	// }
	// 	sort = [sortby];
	// 	console.log(`sortby updated: ${sort}`);
	// 	setSort(sort)
	// }

	// restaurant name, image, phone number and rating
	const dbInstance = collection(database, "Restaurants");
	const { currentUser } = useAuth();
	const saveRestaurant = (business) => {
		addDoc(dbInstance, {
			restaurantName: business.name,
			image: business.imageUrl,
			phoneNumber: business.phoneNumber,
			rating: business.rating,
			userId: currentUser._delegate.uid,
		})
			.then(() => {
				alert("Restaurant was saved");
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<>
			<div>
				{/*============================= DETAIL =============================*/}
				<section>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-7 responsive-wrap">
								<div className="row detail-filter-wrap">
									<div className="col-md-4 featured-responsive">
										<div
											className="detail-filter-text"
											style={{
												display: "flex",
												justifyContent: "space-evenly",
											}}>
											<p>
												Results For{" "}
												{`${finalCusine
													.charAt(0)
													.toUpperCase()}${finalCusine.slice(
														1
													)}`}
											</p>
											<NavBtn>
												<NavBtnLink to="/roulette">
													Back to wheel
												</NavBtnLink>
											</NavBtn>
											{/* <DropdownButton id="dropdown-item-button" title="Sort By:">
												<Dropdown.Item as="button">
													<div onChange={() => handleSortUpdate("best_match"
																		)}>Best Match</div></Dropdown.Item>
												<Dropdown.Item as="button">
												<div onChange={() => handleSortUpdate("distance"
																		)}>Distance</div>
												</Dropdown.Item>
												<Dropdown.Item as="button">
												<div onChange={() => handleSortUpdate("rating"
																		)}>Ratings</div>
												</Dropdown.Item>
											</DropdownButton> */}
										</div>
									</div>
									<div className="col-md-8 featured-responsive"></div>
								</div>
								<div className="row light-bg detail-options-wrap">
									{businesses &&
										businesses.map((business) => {
											const {
												name,
												rating,
												phoneNumber,
												imageUrl,
												price,
												reviewNum,
												url,
												street,
												city,
												state,
												zipcode,
												coordinates,
											} = business;
											return (
												<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
													<div className="featured-place-wrap" onClick={() => handleCordsUpdate(
																			coordinates.latitude,
																			coordinates.longitude
																		)}>
														<img
															src={imageUrl}
															height="400px"
															overflow="hidden"
															alt="#"
														/>
														<span className="featured-rating-orange ">
															{rating}
														</span>
														<div className="featured-title-box">
															<h5>{name}</h5>
															{
																reviewNum
															} Reviews{" "}
															<span> • </span>{" "}
															{price}
															<ul>
																<li>
																	<span className="icon-location-pin" />
																	{street},{" "}
																	{city},{" "}
																	{state}{" "}
																	{zipcode}
																</li>
																<li>
																	<span className="icon-screen-smartphone" />
																	{
																		phoneNumber
																	}
																</li>
																<li>
																	{/* <button><img src={locationicon} className="icon" 
																		onClick={() => handleCordsUpdate(
																			coordinates.latitude,
																			coordinates.longitude
																		)}/>
																		
																	</button> */}
																	{/* <p>&nbsp;&nbsp;</p>
																	<button>
																		<a href={url}
																			target="_blank"
																			rel="noreferrer">
																			<img src={yelpicon} className="yelp" />
																		</a>
																	</button>
																	<p>&nbsp;&nbsp;</p>
																	<button><img src={bookmarkicon} className="icon" onClick={() =>
																		saveRestaurant(
																			business
																		)
																	} />
																	</button> */}
																</li>
															</ul>

															<div className="bottom-icons">
																{/* <span className="ti-bookmark" /> */}
																<button>
																		<a href={url}
																			target="_blank"
																			rel="noreferrer">
																			<img src={yelpicon} className="yelp" />
																		</a>
																	</button>
																	<p>&nbsp;&nbsp;</p>
																	<button><img src={bookmarkicon} className="icon" onClick={() =>
																		saveRestaurant(
																			business
																		)
																	} />
																	</button>
															</div>
														</div>
													</div>
												</div>
											);
										})}
								</div>
							</div>
							<div className="col-md-5 featured-responsive">
								<br></br>
								<br></br>
								<>
									<br></br>
									<section className="light-bg booking-details_wrap, sticky-top">
										<div
											className="container"
											height="1000px">
											<br></br>

											<Map
												height={900}
												defaultCenter={[
													latitude,
													longitude,
												]}
												defaultZoom={15}
												provider={stamenTerrain}>
												<Marker
													width={50}
													anchor={[
														latitude,
														longitude,
													]}
													color={`hsl(240,100%,50%,1.0)`}
												/>
												<Marker
													width={50}
													anchor={
														coordinates
															? coordinates
															: null
													}
													color={`hsl(0, 100%, 50%, 1.0)`}
												/>
											</Map>

											<br></br>
										</div>
									</section>
									{/*//END BOOKING DETAILS */}
								</>
							</div>
						</div>
					</div>
				</section>
				{/*//END DETAIL */}
				{/* jQuery, Bootstrap JS. */}
				{/* jQuery first, then Popper.js, then Bootstrap JS */}
			</div>
		</>
	);
};

export default ApiResult;
