import React, { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
import InsideJokesDetails from "./InsideJokesDetails";

const InsideJokes = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper" className="still-slide-wrapper">
			<div className="still-slide work" data-hash="work-1" data-color="#e4c7ae">
				<div className="inner">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1639.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<div className="swiper-container" id="gallery">
				<div className="inner-top">
					<h2>INSIDE JOKES</h2>
				</div>
				<div className="swiper-wrapper">
					<InsideJokesDetails />
				</div>
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</div>
		</div>
	);
};

export default InsideJokes;
