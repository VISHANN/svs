import Hero from '../src/components/hero'
import Navbar from '../src/components/navbar'
import PrimaryNav from '../src/components/navbar/PrimaryNav'

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <PrimaryNav />
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
      <div className="element ">
        <div className="row">

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
          padding: 3rem 1rem;
        }
        h1 {
          margin-bottom: 1.5rem;
          color: #555;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 3rem;
        }
        
        .intro {
          font-size: 1.75rem;
          font-weight: 200;
        }
      `}</style>
    </>
  )
}