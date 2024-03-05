import React from "react";
import { Link } from "react-router-dom";

const SpecialDialDetails = () => {
	return (
		<>
			<div
				className="swiper-slide service"
				data-hash="work-2"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Forms</h2>
					<h4>- Work with Us</h4>
					<h4>- Sign with Us</h4>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-3"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Address | Location</h2>
					<p className="address">
						6000 King, Ste. 2009 <br />
						Los Angeles, CA 80016, USA
					</p>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-4"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Email | Contact</h2>
					<ul className="contact-info">
						<li>
							Email: <a href="mailto:no-filtr@info.com">no-filtr@info.com</a>
						</li>
						<li>Phone: +36 1234 5678</li>
					</ul>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-5"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Policies</h2>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-6"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Socials</h2>
				</div>
			</div>
			<div className="swiper-slide contact-info">
				<div className="inner">
					<h2>
						<Link to="/">
							Back<i className="icon-arrows-slim-right"></i>
						</Link>
					</h2>
					<p className="address small-text">
						6000 King, Ste. 2009 <br />
						Los Angeles, CA 80016, USA
					</p>
					<ul className="contact-infos small-text">
						<li>
							<a href="mailto:no-filtr@info.com">no-filtr@info.com</a>
						</li>
						<li>+36 1234 5678</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SpecialDialDetails;
