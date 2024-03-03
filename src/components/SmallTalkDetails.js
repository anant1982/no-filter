import { Link } from "react-router-dom";

const SmallTalkDetails = () => {
	return (
		<>
			<div
				className="swiper-slide work"
				data-hash="work-1"
				data-color="#e4c7ae">
				<div className="inner">
					<img
						style={{
							borderRadius: "16px",
						}}
						src={process.env.PUBLIC_URL + "/images/IMG_1637.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-2"
				data-color="#bed1e0">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="inner">
					<h2 className="is-uppercase">About Us</h2>
					<p>
						We see communication as a radical thing. We realized people need
						more forms of communication to support their belief system, they
						need more personal feelings. So, We made some superhumans that made
						people realize they are essential, profound and should only invest
						in cool sneakers. Sadly, people took the sneaker part too seriously.
						<br />
						<br />
						We gave humans aspiration and brands their bedtime stories. Brands
						peak familiarity when they narrate their story through our
						storytellers. We map out capability for our creators and then make
						them live above that. We have been setting up the industry and its
						standards as we have been going through things.
						<br />
						<br />
						Some people see us as first doers we see ourselves as the last
						one’s.
					</p>
				</div>
			</div>
			<div
				className="swiper-slide service"
				data-hash="work-3"
				data-color="#bed1e0">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="inner">
					<h2 className="is-uppercase">Roster</h2>
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
			<div
				className="swiper-slide service"
				data-hash="work-4"
				data-color="#bed1e0">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="inner">
					<h2 className="is-uppercase">Brands</h2>
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
			<div
				className="swiper-slide service"
				data-hash="work-5"
				data-color="#bed1e0">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="inner">
					<h2 className="is-uppercase">Teams | Services</h2>
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
			<div
				className="swiper-slide service"
				data-hash="work-6"
				data-color="#bed1e0">
				<div className="inner-top">
					<h2>SMALL TALK</h2>
				</div>
				<div className="inner">
					<h2 className="is-uppercase">Culture</h2>
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

export default SmallTalkDetails;
