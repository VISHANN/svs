import Hero from '../src/components/hero'
import Navbar from '../src/components/navbar'

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <div className="element">
        <div className="row">
          <h1 className="title">
            About Us
          </h1>
          <div className="intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.
              <br />
              <br />
            </p>
          </div>
          <p className="margin-top">
            <a className='btn btn-outline' href="#">
              Contact Us
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .element {
          position: relative;
          background: #f4f5ef;
        }

        .row {
          width: 100%;
          max-width: 75rem;

          margin-inline: auto;
          padding-block: 3rem;
        }
        h1 {
          margin-bottom: 1.5rem;
          color: #555;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 3rem;
        }

        .btn {
          display: inline-block;
          font-size: 1.125rem;
          color: #333;

          padding: 0.5rem 1rem 0.5635rem;
          text-align: center;
        }
        .btn-outline {
          background: transparent;
          font-weight: 200;

          border: 1px solid #333;
        }
        p {
          margin-bottom: 0.75rem;
        }
        .margin-top {
          .margin-top: 1.5rem ;
        }
        .intro {
          font-size: 1.75rem;
          font-weight: 200;
        }
      `}</style>
    </>
  )
}