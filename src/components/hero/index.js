import { useEffect, useRef } from "react"

export default function Hero(props) {
  // imgRef.current will get the initial value null
  const imgRef = useRef(null);

  function resizeImg (img) {
    let f = img.naturalWidth / img.naturalHeight ;
    let b = window.innerWidth,
      c = window.innerHeight,
      h = "", 
      i = "", 
      j = "", 
      k = "";
    
    b / c < f 
      ? ((h = c * f), (k = -(h - b) / 2))
      : ((i = b / f), (j = -(i - c) / 2))
    img.style.cssText += `width: ${h}px; left: ${k}px; height: ${i}px; top: ${j}px`;
  }

  useEffect(() => {
    let img = imgRef.current;
    if(img && img.complete) {
      resizeImg(img);
    }
  })
  return(
    <div className="hero">
      <div className="hero-img">
        <img ref={imgRef} onLoad={() => resizeImg(imgRef.current)}
          src="https://images.unsplash.com/photo-1573894999291-f440466112cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="girls in classroom" />
      </div>
      <div className="hero-text">
        <div className="row">
          <div className="column">
            <h1 className="hero-title">
              {props.title}
            </h1>
            <p className="hero-subtitle">
              {props.subtitle}             
            </p>
            <a href="#" className="btn btn-white">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100vh;
        }
        .hero-img {
          position: fixed;
          top: 0; left: 0;

          z-index: -25;

          width: 100%;
          height: 100%;
        }
        .hero-img > img {
          display: block;

          position: absolute;
          top: 0;
          left: 0;

          min-width: 100%;
          min-height: 100%; 

          /* To override reset.css max-width set to 100% */
          max-width: none;
        }

        .hero-text {
          width: 100%;
          height: 100%;

          color: #fff;
          background: rgba(0, 0, 0, 0.2)
        }

        .hero-title {
          text-transform: uppercase;
          line-height: 1em;
          font-weight: 700;

          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          display: none;
        }
        @media all and (min-width: 760px) {
          .hero-subtitle {
            font-size: 1.5rem;
            line-height: 1.5em;
            margin-bottom: 1.5em;
            display: block;
          }
        }
        .row {
          position: relative; 
          top: 50%;
          transform: translateY(-50%);

          width: 100%;
          max-width: 75rem;

          /* Horizontal Center */
          margin-inline: auto;
        }

        .column {
          width: 55%;
          margin-left: auto;
        }

        .btn {
          display: inline-block;
          font-size: 1.125rem;
          font-weight: 400;
          color: var(--dark);

          padding: 0.5rem 1rem 0.5635rem;
          text-align: center;
        }
        .btn-white {
          background: #fff;
        }
      `} </style>
    </div>
  )
}