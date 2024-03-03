import { Link } from "react-router-dom";

const MainContainer = () => {
	return (
		<>
			<div className="slide" data-hash="work-1" data-color="#e4c7ae">
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
			<div className="slide" data-hash="work-2" data-color="#bed1e0">
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
			<div className="slide" data-hash="work-3" data-color="#f3c98d">
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
			<div className="slide" data-hash="work-4" data-color="#f4f434">
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
		</>
	);
};

export default MainContainer;
