const style = () => {
	const output = {
		root: {
			position: "relative",
			zIndex: 1,
			overflow: "hidden",
			touchAction: "pan-y",
			paddingBottom: 0,
			width: "100vw",
			left: "475px",
			fontFamily: '"Work Sans", sans-serif',
			textAlign: "left",
			background: "#bed1e0",
			"& *": {
				cursor: "grab",
				userSelect: "none",
				userDrag: "none",
			},
		},
		slider: {
			display: "inline-flex",
			height: "100%",
			textAlign: "left",
			alignItems: "baseline",
		},
		isDragging: {
			"& *": {
				cursor: "grabbing",
			},
		},

		/*------------------------------
    Slide
    ------------------------------*/
		slide: {
			width: "50vw",
			height: "100%",
			padding: "0 95px",
			"--skew": "calc(var(--speed) * .01deg)",
			transform: "skewX(var(--skew))",
			textAlign: "left",
			borderLeft: "1px solid #bbb",
			position: "relative",
			top: "-75px",
			"& button": {
				width: "100%",
				height: "100%",
				padding: 0,
				border: "none",
				background: "none",
				position: "relative",
				zIndex: 1,
				overflow: "hidden",
			},
			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "cover",
				"--scale": "calc(1 + var(--speed-abs) * 0.001)",
				"--swipe": "calc(var(--speed) * .5px)",
				transform: "scaleX(var(--scale)) translateX(var(--swipe))",
			},

			"& h2": {
				color: "#333",
				margin: "10px 0 1.6rem",
				fontSize: "1.80203rem",
				lineHeight: "2.24rem",
				fontFamily: '"Work Sans", sans-serif',
				textAlign: "left",
			},
			"& p": {
				lineHeight: "1.6rem",
				marginBottom: "1.6rem",
				marginTop: 0,
				fontFamily: '"Work Sans", sans-serif',
				textAlign: "left",
				fontSize: "1rem",
				color: "#555",
			},
		},

		/*------------------------------
    Progress
    ------------------------------*/
		progress: {
			position: "absolute",
			zIndex: 1,
			bottom: 0,
			left: 20,
			width: "calc(100vw - 40px)",
			height: 2,
			background: "rgba(0, 0, 0, .1)",
			"&:before": {
				content: '""',
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 1)",
				transformOrigin: "0 0",
				transform: "scaleX(var(--progress))",
			},
		},
	};

	/*------------------------------
  SM
  ------------------------------*/
	output["@media (max-width: 768px)"] = {
		slide: {
			width: "70vw",
			height: "100%",
			padding: 20,
		},
	};

	return output;
};

export default style;
