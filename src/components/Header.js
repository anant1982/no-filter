import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { swiperInitialize } from "../swiperInit";

const Header = () => {
	const FullYear = new Date();
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<>
			<div id="menu-bar">
				<Link to="/" id="logo" className="is-uppercase">
					NoFiltr
				</Link>
			</div>
			<Link to="/" id="contact" className="is-hidden-touch">
				<img
					alt="close icon"
					style={{ width: "20px" }}
					src={process.env.PUBLIC_URL + "/images/close.png"}
				/>
			</Link>
		</>
	);
};

export default Header;
