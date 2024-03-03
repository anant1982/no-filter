import MainContainer from "./MainContainer";
import { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
const Home = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper">
			<div className="swiper-container" id="gallery">
				<div className="swiper-wrapper">
					<MainContainer />
				</div>
				<a className="scroll-to-beginning">
					<i className="icon-arrows-slim-left"></i>
				</a>
			</div>
		</div>
	);
};

export default Home;
