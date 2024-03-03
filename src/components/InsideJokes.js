import React, { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
import InsideJokesDetails from "./InsideJokesDetails";

const InsideJokes = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper">
			<div className="swiper-container" id="gallery">
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
