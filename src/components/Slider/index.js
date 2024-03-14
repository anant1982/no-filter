import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { useGesture } from "react-use-gesture";
import useRaf from "@rooks/use-raf";
import { lerp, clamp } from "../../utils/index";
import style from "./style";
import { Link } from "react-router-dom";

const useStyles = createUseStyles(style);

const Slider = ({
	className,
	items,
	soap = 2,
	soapWheel = 1,
	wheel = true,
}) => {
	const classes = useStyles();
	const $root = useRef();
	const $slider = useRef();
	const viewport = useRef(0);
	const maxDistance = useRef(0);
	const x = useRef(0);
	const actualX = useRef(0);
	const newX = useRef(0);
	const speed = useRef(0);
	const progress = useRef(0);
	const [isDragging, setIsDragging] = useState(false);

	/*------------------------------
        Gestures
        ------------------------------*/
	useGesture(
		{
			onDrag: ({ movement: [mx], first, last }) => {
				x.current = -mx * soap;
				if (first) actualX.current = newX.current;

				setIsDragging(Math.abs(mx) > 10);
				if (last)
					setTimeout(() => {
						setIsDragging(false);
					}, 20);
			},
			onWheel: ({ movement: [mx, my], first, last, event }) => {
				if (!wheel) return;
				x.current = my * soapWheel;
				if (first) actualX.current = newX.current;

				setIsDragging(Math.abs(my) > 10);
				if (last)
					setTimeout(() => {
						setIsDragging(false);
					}, 20);

				if (!last) event.preventDefault();
			},
		},
		{ domTarget: $root, eventOptions: { passive: false } }
	);

	/*------------------------------
        Handle Resize
        ------------------------------*/
	const handleResize = () => {
		viewport.current = $root.current.getBoundingClientRect().width;
		maxDistance.current =
			$slider.current.getBoundingClientRect().width - viewport.current / 2;
	};

	/*------------------------------
        Init
        ------------------------------*/
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize, false);

		return () => {
			window.removeEventListener("resize", handleResize, false);
		};
	}, []);

	/*------------------------------
        RAF
        ------------------------------*/
	useRaf(() => {
		const lerpX = clamp(actualX.current - x.current, -maxDistance.current, 0);
		newX.current = lerp(newX.current, lerpX, 0.1);
		speed.current = (newX.current - lerpX).toFixed(2);
		progress.current = (-newX.current / maxDistance.current).toFixed(3);

		$slider.current.style.transform = `translateX(${newX.current}px)`;

		// CSS Vars
		$root.current.style.setProperty("--speed", speed.current);
		$root.current.style.setProperty("--speed-abs", Math.abs(speed.current));
		$root.current.style.setProperty("--progress", progress.current);
	}, true);

	/*------------------------------
        Render Slides
        ------------------------------*/
	const renderSlides = () =>
		items.map((item) => (
			<div className={classes.slide} key={item.title.toString()}>
				<button
					onClick={() => {
						if (!isDragging) window.console.log("slide:", item.title);
					}}>
					{item.title === "Back" ? (
						<h2 className="is-uppercase contact-info-heading">
							<Link to="/">
								{item.title}
								<i className="icon-arrows-slim-right"></i>
							</Link>
						</h2>
					) : (
						<h2 className="is-uppercase">{item.title}</h2>
					)}
					{typeof item.description === "object" ? (
						<p>
							{item.description[0]} <br /> {item.description[1]}
						</p>
					) : (
						<p>{item.description}</p>
					)}
					{item.address1 && (
						<>
							<p className="address small-text">
								{item.address1}
								<br />
								{item.address2}
							</p>
							<ul className="contact-infos small-text">
								<li>
									<a href={"mailto:" + item.email}>{item.email}</a>
								</li>
								<li>{item.phone}</li>
							</ul>
						</>
					)}
					{item.telephone && (
						<>
							<ul
								className="contact-info"
								style={{
									fontFamily: "Work Sans",
									textAlign: "left",
									fontSize: "1rem",
									color: "#555",
								}}>
								<li>
									<a href={"mailto:" + item.email}>{item.email}</a>
								</li>
								<li>{item.telephone}</li>
							</ul>
						</>
					)}
					{item.description1 && (
						<>
							<p>
								{item.description1}
								<br />
								{item.description2}
							</p>
						</>
					)}
				</button>
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
				})}
				ref={$slider}>
				{renderSlides()}
			</div>
		</div>
	);
};

export default Slider;
