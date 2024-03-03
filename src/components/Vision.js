import React, { useEffect } from "react";
import VisionDetails from "./VisionDetails";
import { swiperInitialize } from "../swiperInit";
const Vision = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper">
			<div className="swiper-container" id="gallery">
				<div className="swiper-wrapper">
					<VisionDetails />
				</div>
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</div>
		</div>
	);
};

export default Vision;
