import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="px-10 pt-10 fixed top-0 z-20">
			<Link to="/" className="uppercase text-xl">
				NoFiltr
			</Link>
		</header>
	);
};

export default Header;
