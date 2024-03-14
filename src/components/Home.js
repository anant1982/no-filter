import { items } from "../utils/imageData";
import SliderInfinite from "./SliderInfinite";
const Home = () => {
	return (
		<div id="wrapper" style={{ background: "#b5b5c1" }}>
			<SliderInfinite className="slider-infinite" items={items} />
		</div>
	);
};

export default Home;
