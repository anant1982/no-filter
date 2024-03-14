import { useEffect } from "react";
import { items } from "../utils/imageData";
import SliderInfinite from "./SliderInfinite";
import hoverEffect from "hover-effect";

const Home = () => {
	useEffect(() => {
		Array.from(document.querySelectorAll(".my-div")).forEach((el) => {
			const imgs = Array.from(el.querySelectorAll("img"));
			new hoverEffect({
				parent: el,
				intensity: el.dataset.intensity || undefined,
				speedIn: el.dataset.speedin || undefined,
				speedOut: el.dataset.speedout || undefined,
				easing: el.dataset.easing || undefined,
				hover: el.dataset.hover || undefined,
				image1: imgs[0].getAttribute("src"),
				image2: imgs[1].getAttribute("src"),
				displacementImage: el.dataset.displacement,
				imagesRatio: 848 / 563,
			});
		});
	}, []);
	return (
		<div id="wrapper" style={{ background: "#b5b5c1" }}>
			<SliderInfinite className="slider-infinite" items={items} />
		</div>
	);
};

export default Home;
