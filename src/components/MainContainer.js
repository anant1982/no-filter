import { Link } from "react-router-dom";

const MainContainer = () => {
	return (
		<>
			<div className="swiper-slide site-intro">
				<ul className="contact-infos small-text">
					<li>
						<a href="mailto:no-filtr@info.com">no-filtr@info.com</a>
					</li>
					<li>+36 1234 5678</li>
				</ul>

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

				<p className="scroll-hint">
					<span className="is-hidden-mobile">Scroll</span>
					<span className="is-hidden-tablet">Swipe</span>
				</p>

				<h1>
					We are a <br />
					digital agency <br />
					specialize in
					<br />
					branding.
				</h1>

				<p className="small-text intro-text">
					In excepteur pariatur id officia minim irure amet culpa pariatur. In
					mollit est exercitation laborum esse ea veniam.
				</p>
			</div>

			<div
				className="swiper-slide work"
				data-hash="work-1"
				data-color="#e4c7ae">
				<div className="inner">
					<Link to="/vision">
						<img
							style={{
								borderRadius: "16px",
							}}
							src={process.env.PUBLIC_URL + "/images/IMG_1636.webp"}
							alt="work 1"
						/>
					</Link>
					<h2>Vision</h2>
				</div>
			</div>
			<div
				className="swiper-slide work"
				data-hash="work-2"
				data-color="#bed1e0">
				<div className="inner">
					<Link to="/small-talk">
						<img
							style={{
								borderRadius: "16px",
							}}
							src={process.env.PUBLIC_URL + "/images/IMG_1637.webp"}
							alt="work 2"
						/>
					</Link>
					<h2>Small Talk</h2>
				</div>
			</div>
			<div
				className="swiper-slide work"
				data-hash="work-3"
				data-color="#f3c98d">
				<div className="inner">
					<Link to="/speed-dial">
						<img
							style={{
								borderRadius: "16px",
							}}
							src={process.env.PUBLIC_URL + "/images/IMG_1638.webp"}
							alt="work 3"
						/>
					</Link>
					<h2>Speed Dial</h2>
				</div>
			</div>
			<div
				className="swiper-slide work"
				data-hash="work-4"
				data-color="#f4f434">
				<div className="inner">
					<Link to="/inside-jokes">
						<img
							style={{
								borderRadius: "16px",
							}}
							src={process.env.PUBLIC_URL + "/images/IMG_1639.webp"}
							alt="work 4"
						/>
					</Link>
					<h2>Inside Jokes</h2>
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

export default MainContainer;
