import React from "react";
import { Link } from "react-router-dom";

const VisionDetails = () => {
	return (
		<>
			<div
				className="swiper-slide service"
				data-hash="work-2"
				data-color="#bed1e0">
				<div className="inner">
					<h2 className="is-uppercase">Vision</h2>
					<p>
						Exercitation velit dolor veniam aute commodo ex culpa duis culpa
						sint ut nostrud voluptate in. Velit sint dolor consectetur aliquip
						non et dolor nulla eu in aute nulla. Ex aute dolor exercitation qui
						velit culpa commodo culpa occaecat qui exercitation tempor. Anim
						anim aute elit amet quis sint aute ad incididunt in. Excepteur enim
						exercitation ipsum laborum pariatur incididunt laboris commodo. Quis
						Lorem ullamco labore eu. Esse nulla cupidatat dolor nulla irure
						Lorem.
					</p>
				</div>
			</div>
			<div className="swiper-slide contact-info">
				<div className="inner">
					<h2>
						<Link to="/">
							Back<i className="icon-arrows-slim-right"></i>
						</Link>
					</h2>
					<p className="address small-text">
						6000 King, Ste. 2009 <br />
						Los Angeles, CA 80016, USA
					</p>
					<ul className="contact-infos small-text">
						<li>
							<a href="mailto:no-filtr@info.com">no-filtr@info.com</a>
						</li>
						<li>+36 1234 5678</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default VisionDetails;
