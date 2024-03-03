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
				<div id="menu-icon">
					<span className="top"></span>
					<span className="middle"></span>
					<span className="bottom"></span>
				</div>
				<Link to="/" id="logo">
					NoFiltr
				</Link>
			</div>

			<a href="contact.html" id="contact" className="is-hidden-touch">
				Contact
			</a>

			<nav id="menu">
				<ul className="socials">
					<li>
						<a href="http://facebook.com">Facebook</a>
					</li>
					<li>
						<a href="http://linkedin.com">LinkedIn</a>
					</li>
					<li>
						<a href="http://twitter.com">Twitter</a>
					</li>
					<li>
						<a href="http://instagram.com">Instagram</a>
					</li>
				</ul>
				<div className="columns contact-infos is-hidden-mobile">
					<div className="column">
						<p className="small-text">
							6913 King Green Ste.
							<br />
							2689 Los Angeles
							<br />
							CA 80016
						</p>
					</div>
					<div className="column">
						<ul className="small-text">
							<li>
								<a href="mailto:no-filtr@info.com">no-filtr@info.com</a>
							</li>
							<li>+36 1234 5678</li>
						</ul>
					</div>
				</div>
				<ul id="menu-items">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="about.html">About</a>
					</li>
					<li>
						<a href="portfolio.html">Portfolio</a>
					</li>
					<li>
						<a href="contact.html">Contact</a>
					</li>
					<li>
						<a href="blog.html">Blog</a>
					</li>
				</ul>
				<div id="copyright">
					<p>&copy; {FullYear.getFullYear()} NoFiltr. All rights reserved.</p>
				</div>
			</nav>
		</>
	);
};

export default Header;
