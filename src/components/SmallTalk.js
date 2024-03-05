import React, { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
import SmallTalkDetails from "./SmallTalkDetails";

const SmallTalk = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper" className="still-slide-wrapper">
			<div className="still-slide work" data-hash="work-1" data-color="#e4c7ae">
				<div className="inner">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1637.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<div
				className="swiper-container"
				style={{
					borderTopLeftRadius: "16px",
					borderBottomLeftRadius: "16px",
				}}
				id="gallery">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="swiper-wrapper">
					<SmallTalkDetails />
				</div>
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</div>
		</div>
	);
};

export default SmallTalk;
