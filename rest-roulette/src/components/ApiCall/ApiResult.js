import React, { useEffect, useState } from "react";
import "../../css/Results.css";
import "../../css/bootstrap.min.css";
import "../../css/simple-line-icons.css"
import { NavBtn, NavBtnLink } from "../../components/Navbar/NavbarElement";
import axios from "axios";
import { finalCusine, longitude, latitude } from "../../pages/Roulette";
import { Map, Marker } from "pigeon-maps"
import { stamenTerrain } from 'pigeon-maps/providers'

const ApiResult = () => {
	const [businesses, setBusinesses] = useState();
	const [cords, setCords] = useState();
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
										<div className="detail-filter-text" style={{
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
												<NavBtnLink to="/roulette">Back to wheel</NavBtnLink>
											</NavBtn>
										</div>
									</div>
									<div className="col-md-8 featured-responsive">
									</div>
								</div>
								<div className="row light-bg detail-options-wrap">
									{businesses &&
										businesses.map((business) => {
											const { name, rating, phoneNumber, imageUrl, address, price, reviewNum, distance, url, street, city, state, zipcode, longitude, latitude } = business;
											return (
												<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
													<div className="featured-place-wrap">

														<img src={imageUrl} height="400px" overflow="hidden" alt="#" />
														<span className="featured-rating-orange ">{rating}</span>
														<div className="featured-title-box">
															<h5>{name}</h5>
															{reviewNum} Reviews <span> • </span> {price}
															<ul>
																<li><span className="icon-location-pin" />
																	{street}, {city}, {state} {zipcode}
																</li>
																<li><span className="icon-screen-smartphone" />
																	{phoneNumber}
																</li>
																<li><span className="" />
																	<a href={url} target="_blank">See More Info</a>
																</li>
																<li>

																	<button onClick={() => setCords({ latitude }, { longitude })}>
																		Location
																	</button>

																	{latitude} {longitude}
																</li>
															</ul>
															<div className="bottom-icons">
																<span className="ti-bookmark" />
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
										<div className="container" height="1000px">
											<br></br>
											<p>{cords}</p>

											<Map height={900} defaultCenter={[{cords}]} defaultZoom={16} provider={stamenTerrain}>
												<Marker width={50} anchor={[{cords}]} />
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