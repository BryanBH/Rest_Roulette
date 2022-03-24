import React from "react";
import "../css/Results.css";
import "../css/bootstrap.min.css";
import featured from "../images/featured1.jpg";
import featured2 from "../images/featured2.jpg";
import customer1 from "../images/customer-img1.jpg";
import map from "../images/map.jpg";
import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElement";
import { finalCusine } from "./Roulette";

const Results = () => {

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
						  <div className="detail-filter-text">
							<p>x Results For <span>CUISINE-TYPE</span></p>
						  </div>
						</div>
						<div className="col-md-8 featured-responsive">
						</div>
					  </div>
					  <div className="row light-bg detail-options-wrap">
						<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
						  <div className="featured-place-wrap">
							<a href="#">
							  <img src={featured} className="img-fluid" alt="#" />
							  <span className="featured-rating-orange ">1.0</span>
							  <div className="featured-title-box">
								<h6>Restaurant NAME</h6>
								<p>ASIAN </p> <span>• </span>
								<p>x Reviews</p> <span> • </span>
								<p><span>$$$</span>$$</p>
								<ul>
								  <li><span className="icon-location-pin" />
									<p>1 Boston St, Boston, MA</p>
								  </li>
								  <li><span className="icon-screen-smartphone" />
									<p>+1 617 000 0000</p>
								  </li>
								  <li><span className="icon-link" />
									<p>https://test.com</p>
								  </li>
								</ul>
								<div className="bottom-icons">
								  <div className="closed-now">CLOSED NOW</div>
								  <span className="ti-heart" />
								  <span className="ti-bookmark" />
								</div>
							  </div>
							</a>
						  </div>
						</div>
						<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
						  <div className="featured-place-wrap">
							<a href="#">
							  <img src={featured} className="img-fluid" alt="#" />
							  <span className="featured-rating-orange ">1.0</span>
							  <div className="featured-title-box">
								<h6>Restaurant NAME</h6>
								<p>ASIAN </p> <span>• </span>
								<p>x Reviews</p> <span> • </span>
								<p><span>$$$</span>$$</p>
								<ul>
								  <li><span className="icon-location-pin" />
									<p>1 Boston St, Boston, MA</p>
								  </li>
								  <li><span className="icon-screen-smartphone" />
									<p>+1 617 000 0000</p>
								  </li>
								  <li><span className="icon-link" />
									<p>https://test.com</p>
								  </li>
								</ul>
								<div className="bottom-icons">
								  <div className="closed-now">CLOSED NOW</div>
								  <span className="ti-heart" />
								  <span className="ti-bookmark" />
								</div>
							  </div>
							</a>
						  </div>
						</div>
						<div className="col-sm-6 col-lg-12 col-xl-6 featured-responsive">
						  <div className="featured-place-wrap">
							<a href="#">
							  <img src={featured} className="img-fluid" alt="#" />
							  <span className="featured-rating-orange ">1.0</span>
							  <div className="featured-title-box">
								<h6>Restaurant NAME</h6>
								<p>ASIAN </p> <span>• </span>
								<p>x Reviews</p> <span> • </span>
								<p><span>$$$</span>$$</p>
								<ul>
								  <li><span className="icon-location-pin" />
									<p>1 Boston St, Boston, MA</p>
								  </li>
								  <li><span className="icon-screen-smartphone" />
									<p>+1 617 000 0000</p>
								  </li>
								  <li><span className="icon-link" />
									<p>https://test.com</p>
								  </li>
								</ul>
								<div className="bottom-icons">
								  <div className="closed-now">CLOSED NOW</div>
								  <span className="ti-heart" />
								  <span className="ti-bookmark" />
								</div>
							  </div>
							</a>
						  </div>
						</div>
					  </div>
					</div>
					<div className="col-md-5 featured-responsive">
					<br></br>
					<br></br>
						<>
						  <section className="light-bg booking-details_wrap">
							<div className="container">
							<br></br>
							<img src={featured2} className="img-fluid" alt="#" />
							  <div className="row">
								<div className="col-md-8 responsive-wrap">
								  <div className="booking-checkbox_wrap">
									<div className="booking-checkbox">
									  <br></br>
									  <br></br>
									  <h4>Restaurant Name</h4>
									</div>
								  </div>
								  <div className="booking-checkbox_wrap mt-4">
									<h5>34 Reviews</h5>
									<hr />
									<div className="customer-review_wrap">
									  <div className="customer-img">
										<img src={customer1} className="img-fluid" alt="#" />
										<p>Amanda G</p>
										<span>35 Reviews</span>
									  </div>
									  <div className="customer-content-wrap">
										<div className="customer-content">
										  <div className="customer-review">
											<h6>Best noodles in the Newyork city</h6>
											<span />
											<span />
											<span />
											<span />
											<span className="round-icon-blank" />
											<p>Reviewed 2 days ago</p>
										  </div>
										  <div className="customer-rating">8.0</div>
										</div>
										<p className="customer-text">
										  REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE REVIEW HERE 
										</p>
									
									
									  </div>
									</div>
									<hr />
								  </div>
								</div>
								<div className="col-md-4 responsive-wrap">
								  <div className="contact-info">
									<br></br>
									<img src={map} className="img-fluid" alt="#" />
									<div className="address">
									  <span className="icon-location-pin" />
									  <p>
										{" "}
										1 Boston St
										<br /> Boston, MA
										
									  </p>
									</div>
									<div className="address">
									  <span className="icon-screen-smartphone" />
									  <p> +1 617 000 0000</p>
									</div>
									<div className="address">
									  <span className="icon-link" />
									  <p>https://test.com</p>
									</div>
									<div className="address">
									  <span className="icon-clock" />
									  <p>
										Mon - Sun 09:30 am - 05:30 pm <br />
										<span className="open-now">OPEN NOW</span>
									  </p>
									</div>
								  </div>
								 
								</div>
							  </div>
							</div>
						  </section>
						  {/*//END BOOKING DETAILS */}
						</>

					</div>
				  </div>
				</div>
			  </section>
			  {/*//END DETAIL */}
			  {/*============================= FOOTER =============================*/}
			  <footer className="main-block dark-bg">
				<div className="container">
				  <div className="row">
					<div className="col-md-12">
					  <div className="copyright">
					  </div>
					</div>
				  </div>
				</div>
			  </footer>
			  {/*//END FOOTER */}
			  {/* jQuery, Bootstrap JS. */}
			  {/* jQuery first, then Popper.js, then Bootstrap JS */}
			  
			</div>

		</>
	);
};

export default Results;
