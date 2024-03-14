import React from "react";
import Slider from "./Slider";
import { items } from "../utils/speedDialData";

const SpecialDial = () => {
	return (
		<div id="wrapper" className="still-slide-wrapper">
			<div className="still-slide work">
				<div className="inner">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1638.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<>
				<div className="inner-top">
					<h2>SPEED DIAL</h2>
				</div>
				<Slider items={items} />
			</>
		</div>
	);
};

export default SpecialDial;
