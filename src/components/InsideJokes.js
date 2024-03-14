import React from "react";
import Slider from "./Slider";
import { items } from "../utils/insideJokesData";

const InsideJokes = () => {
	return (
		<div id="wrapper" className="still-slide-wrapper">
			<div className="still-slide work">
				<div className="inner">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1639.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<>
				<div className="inner-top">
					<h2>INSIDE JOKES</h2>
				</div>
				<Slider items={items} />
			</>
		</div>
	);
};

export default InsideJokes;
