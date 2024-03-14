import { items } from "../utils/visionData";
import Slider from "./Slider";
const Vision = () => {
	return (
		<div id="wrapper" className="still-slide-wrapper">
			<div className="still-slide work">
				<div className="inner">
					<img
						src={process.env.PUBLIC_URL + "/images/IMG_1636.webp"}
						alt="work 1"
					/>
				</div>
			</div>
			<>
				<div className="inner-top">
					<h2>VISION</h2>
				</div>
				<Slider items={items} />
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</>
		</div>
	);
};

export default Vision;
