export default function Hero() {
  return(
    <div className="hero">
      <div className="hero-img">
        <img 
          src="https://images.unsplash.com/photo-1573894999291-f440466112cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          alt="girls in classroom" />
      </div>
      <div className="hero-text">
        <div className="row">
          <div className="column">
            <h2 className="hero-title">
              About Us
            </h2>
            <p className="hero-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ad modi natus quae qui eum at ipsam. Facere atque at voluptates quam, harum veritatis, optio, quae commodi unde explicabo maxime.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          z-index: 0;
          width: 100vw;
          height: 100vh;
        }
        .hero-img {
          position: fixed;
          top: 0; left: 0;

          z-index: -25;

          width: 100%;
          height: 100%;
        }
        img {
          position: absolute;
          top: -20%;

          min-width: 100%;
          min-height: 100%; 
        }

        .hero-text {
          width: 100%;
          height: 100%;

          color: #fff;
          background: rgba(0, 0, 0, 0.2)
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
      `} </style>
    </div>
  )
}