import React, { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
import SpecialDialDetails from "./SpecialDialDetails";

const SpecialDial = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper">
			<div className="swiper-container" id="gallery">
				<div className="swiper-wrapper">
					<SpecialDialDetails />
				</div>
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</div>
		</div>
	);
};

export default SpecialDial;
