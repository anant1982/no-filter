import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div id="menu-bar">
				<Link to="/" id="logo" className="is-uppercase">
					NoFiltr
				</Link>
			</div>
			<Link to="/" id="contact" className="is-hidden-touch">
				<img
					alt="Nofiltr logo"
					style={{ width: "40px" }}
					src={process.env.PUBLIC_URL + "/images/nofiltr-black.png"}
				/>
			</Link>
		</>
	);
};

export default Header;
