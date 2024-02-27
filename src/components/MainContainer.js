import { Link } from "react-router-dom";

const MainContainer = () => {
	return (
		<div className="mt-10 mb-8">
			<div className="grid grid-cols-4 gap-10 text-center">
				<Link to="/vision" className="cursor-pointer">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1636.webp"}
						alt="img-1"
						className="rounded-2xl overflow-hidden mb-4"
					/>
					<p>Vision</p>
				</Link>
				<Link to="/small-talk">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1637.webp"}
						alt="img-2"
						className="rounded-2xl overflow-hidden mb-4"
					/>
					<p>Small Talk</p>
				</Link>
				<Link to="/special-dial">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1638.webp"}
						alt="img-3"
						className="rounded-2xl overflow-hidden mb-4"
					/>
					<p>Special Dial</p>
				</Link>
				<Link to="/inside-jokes">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1639.webp"}
						alt="img-4"
						className="rounded-2xl overflow-hidden mb-4"
					/>
					<p>Inside Jokes</p>
				</Link>
			</div>
		</div>
	);
};

export default MainContainer;
