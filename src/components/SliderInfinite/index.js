import { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import useRaf from "@rooks/use-raf";
import gsap from "gsap";
import { useGesture } from "react-use-gesture";
import { lerp } from "../../utils/index";
import style from "./style";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(style);

const SliderInfinite = ({
	className,
	items,
	soap = 2,
	soapWheel = 1,
	wheel = true,
}) => {
	const classes = useStyles();
	const $root = useRef();
	const minLimit = useRef(0);
	const maxLimit = useRef(0);
	const startX = useRef(0);
	const scrollX = useRef(0);
	const oldX = useRef(0);
	const actualX = useRef(0);
	const speedX = useRef(0);
	const [isDragging, setIsDragging] = useState(false);
	const [slides, setSlides] = useState([]);

	/*------------------------------
  Gestures
  ------------------------------*/
	useGesture(
		{
			onDrag: ({ movement: [mx], last }) => {
				scrollX.current = startX.current + mx * soap;
				setIsDragging(Math.abs(mx) > 10);
				if (last) {
					startX.current = scrollX.current;
					setTimeout(() => {
						setIsDragging(false);
					}, 100);
				}
			},
			onWheel: ({ movement: [_, my], last, event }) => {
				if (!wheel) return;
				scrollX.current = startX.current - my * soapWheel;

				setIsDragging(Math.abs(my) > 10);
				if (last) {
					startX.current = scrollX.current;
					setTimeout(() => {
						setIsDragging(false);
					}, 100);
				}

				if (!last) event.preventDefault();
			},
		},
		{ domTarget: $root, eventOptions: { passive: false } }
	);

	/*------------------------------
  Handle Resize
  ------------------------------*/
	const handleResize = () => {
		if (!slides.length) return;
		minLimit.current = slides[0].getBoundingClientRect().width;
		maxLimit.current = minLimit.current * items.length;
	};

	/*--------------------
  Dispose
  --------------------*/
	const dispose = (scroll) => {
		gsap.set(slides, {
			x: (i) => {
				return i * minLimit.current + scroll;
			},
			modifiers: {
				x: (x) => {
					const s = gsap.utils.wrap(
						-minLimit.current,
						maxLimit.current - minLimit.current,
						parseInt(x, 10)
					);
					return `${s}px`;
				},
			},
		});
	};

	/*------------------------------
  Init
  ------------------------------*/
	useEffect(() => {
		setSlides($root.current.querySelectorAll(`.${classes.slide}`));

		return () => {
			window.removeEventListener("resize", handleResize, false);
		};
	}, []);

	/*------------------------------
  Slides Ready
  ------------------------------*/
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize, false);
	}, [slides]);

	/*------------------------------
  RAF
  ------------------------------*/
	useRaf(() => {
		if (!slides.length) return;
		actualX.current = lerp(actualX.current, scrollX.current, 0.1);
		dispose(actualX.current);
		speedX.current = actualX.current - oldX.current;
		oldX.current = actualX.current;

		// CSS Vars
		$root.current.style.setProperty("--speed", speedX.current);
		$root.current.style.setProperty("--speed-abs", Math.abs(speedX.current));
	}, true);

	/*------------------------------
  Render Slides
  ------------------------------*/
	const renderSlides = () =>
		items.map((item, index) => (
			<div className={classes.slide} key={item.title.toString()}>
				<Link to={item.title.replace(" ", "-").toLowerCase()}>
					<button
						className="my-div"
						data-displacement={process.env.PUBLIC_URL + "/images/disp.jpg"}>
						<img src={item.image} alt={item.title} className="slider-image" />
						<img src={item.image} alt={item.title} className="slider-image" />
						<h2>{item.title}</h2>
					</button>
				</Link>
			</div>
		));

	return (
		<div
			className={classNames({
				[classes.root]: true,
				[className]: className,
				[classes.isDragging]: isDragging,
			})}
			ref={$root}>
			<div
				className={classNames({
					[classes.slider]: true,
				})}>
				{renderSlides()}
			</div>
		</div>
	);
};

export default SliderInfinite;
