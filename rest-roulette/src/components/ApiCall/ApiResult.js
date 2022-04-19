import React, { useEffect, useState } from "react";
import "../../css/Results.css";
import "../../css/bootstrap.min.css";
import "../../css/simple-line-icons.css";
import { NavBtn, NavBtnLink } from "../../components/Navbar/NavbarElement";
import axios from "axios";
import { finalCusine, longitude, latitude } from "../../pages/Roulette";
import { Map, Marker } from "pigeon-maps";
import { stamenTerrain } from "pigeon-maps/providers";
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

// Photos
import defaultPhoto from "../../images/foodDefault.jpg";
import yelpicon from "../../images/yelp.png";
import bookmarkicon from "../../images/bookmark.png";


// DB stuff
import { database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

let cords = [];
const ApiResult = () => {
	const [businesses, setBusinesses] = useState();
	const [coordinates, setCords] = useState([]);

	useEffect(() => {
		// call to local server
		axios
			.get("/getYelpAPI", {
				params: {
					categories: finalCusine,
					latitude: latitude,
					longitude: longitude,
				},
			})
			.then((response) => {
				const responseBusinesses = response.data.object;
				setBusinesses(responseBusinesses);
			});
	}, []);

	// Map Marker Update on Click
	const handleCordsUpdate = (latitude, longitude) => {
		cords = [latitude, longitude];
		console.log(`cords updated: ${cords}`);
		setCords(cords);
	};

	// Sort By functions
	const sortByRating = () => {
		const sorted = [
			...businesses.sort((a, b) => {
				return b.rating - a.rating;
			})
		];
		setBusinesses(sorted);
	};

	const sortByDistance = () => {
		const sorted = [
			...businesses.sort((a, b) => {
				return a.distance - b.distance;
			})
		];
		setBusinesses(sorted);
	};

	const sortByReviews = () => {
		const sorted = [
			...businesses.sort((a, b) => {
				return b.reviewNum - a.reviewNum;
			})
		];
		setBusinesses(sorted);
	};

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
	console.log(businesses)
	return (
		<>
			<div>
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
												Results For {" "}
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
											{/* Sort By function */}
											<DropdownButton id="dropdown-item-button" title="Sort By:">
												<Dropdown.Item as="button">
													<div onClick={sortByRating}>Rating</div></Dropdown.Item>
												<Dropdown.Item as="button">
													<div onClick={sortByDistance}>Distance</div>
												</Dropdown.Item>
												<Dropdown.Item as="button">
													<div onClick={sortByReviews}>Review Count</div>
												</Dropdown.Item>
											</DropdownButton>
										</div>
									</div>
									<div className="col-md-8 featured-responsive"></div>
								</div>
								<div className="row light-bg detail-options-wrap">
									{/* Mapping Function for businesses */}
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
												distance
											} = business;
											return (
												<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
													<div className="featured-place-wrap" onClick={() => handleCordsUpdate(
														coordinates.latitude,
														coordinates.longitude
													)}>
														<img
															src={imageUrl ? imageUrl : defaultPhoto}
															height="400px"
															overflow="hidden"
															alt="#"
														/>
														<span className="featured-rating-orange">
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
																	<span className="icon-compass" />
																	{
																		(distance * 0.000621371).toFixed(1)
																	} miles
																</li>
															</ul>

															<div className="bottom-icons">
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
											{/* Map Function */}
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
								</>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ApiResult;
