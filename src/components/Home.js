import MainContainer from "./MainContainer";
import { useEffect } from "react";
import { swiperInitialize } from "../swiperInit";
const Home = () => {
	useEffect(() => {
		swiperInitialize();
	}, []);
	return (
		<div id="wrapper">
			<div className="home-page-wrapper">
				<MainContainer />
			</div>
		</div>
	);
};

export default Home;
