const style = () => {
  const output = {
    root: {
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      touchAction: 'pan-y',
      paddingBottom: 0,
      height: '100%',
      '& *': {
        cursor: 'grab',
        userSelect: 'none',
        userDrag: 'none',
      },
    },
    slider: {
      position: 'relative',
      zIndex: 1,
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    isDragging: {
      '& *': {
        cursor: 'grabbing',
      },
    },

    /*------------------------------
    Slide
    ------------------------------*/
    slide: {
      position: 'absolute',
      zIndex: 1,
      width: '30vw',
      height: '80vh',
      padding: '20px',
      '& button': {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        display: 'block',
        '--skew': 'calc(var(--speed) * .1deg)',
        transform: 'skewX(var(--skew))',
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '16px',
        '--scale': 'calc(1 + var(--speed-abs) * 0.001)',
        '--swipe': 'calc(var(--speed) * 1px)',
        transform: 'scaleX(var(--scale)) translateX(var(--swipe))',
      },

      '& h2': {
        color: '#333',
        margin: "10px 0 0",
        fontSize: 25,
        fontFamily: "\"Work Sans\", sans-serif",
        '& span': {
          position: 'absolute',
          zIndex: -1,
          left: -20,
          bottom: -30,
          fontSize: 100,
          lineHeight: 1,
          opacity: 0.2,
        },
      },
    },
  }

  /*------------------------------
  SM
  ------------------------------*/
  output['@media (max-width: 768px)'] = {
    slide: {
      width: '70vw',
      height: "80vh",
      padding: 20,
    },
  }

  return output
}

export default style
