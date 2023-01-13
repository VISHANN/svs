import Hero from '../components/hero'
import PrimaryNav from '../components/navbar/PrimaryNav'
import Slice from '../components/slice'

export default function Achievements() {
  return(
    <>
      <Hero 
        title = "Our Achievements"
        subtitle = "A glimpse of what our students and Vivekananda team has achieved."
      />
      <PrimaryNav />
      <div className="slice">
        <div className="container">
          <h1 className="h1">
            Our Achievements
          </h1>
          <p className="intro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus velit ea, maxime quibusdam consequatur tempore, at omnis consectetur eligendi modi nemo quia amet inventore doloremque nihil. Distinctio quos assumenda error!
          </p>
        </div>
      </div>
      
      <div className="facts">
        <div className="container">
          <span className="fact">
            <div className="number">
              2884
            </div>
            <div className="label">
              Students Educated
            </div>
          </span>
          <span className="fact">
            <div className="number">
              500
            </div>
            <div className="label">
              First Division
            </div>
          </span>
          <span className="fact">
            <div className="number">
              95%
            </div>
            <div className="label">
              Pass Percentage
            </div>
          </span>
        </div>
      </div>

      <Slice 
        img = {{ src: "https://images.unsplash.com/photo-1582886986704-b8a1b2a74548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }}
        heading = "Priyansh Yadav"
        subheading = "92.42%, XII Board, 2022"
        lead = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.        "
        />

      <Slice 
        img = {{ src: "https://images.unsplash.com/photo-1582886986704-b8a1b2a74548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }}
        heading = "Yash Sharma"
        subheading = "82.42%, XII Board, 2022"
        lead = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.        "
        />

      <div className='results'>
        <nav className="years">
          <ul className='year-links'>
            <li>
              <button>2022</button>
            </li>
            <li>
              <button>2022</button>
            </li>
            <li>
              <button>2022</button>
            </li>
            <li>
              <button>2022</button>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
          <div className="t-row">
            <span> Riya Sharma </span>
            <span> 91.04%, XII </span>
          </div>
        </div>
      </div>
      <style jsx>{`

        .facts {
          position: relative;
          background: #fff;
        }
        .fact {
          display: inline-block;
          width: 100%;
          text-align: center;
          padding-bottom: 1rem;
        }
        .number {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--secondary);
        }
        .label {
          font-size: 1.25rem;
          text-transform: capitalize;
          color: var(--dark);
        }

        .results {
          position: relative;
          background: var(--light);
          color: var(--dark);
        }
        .year-links {
          display: flex;
          justify-content: space-around;

          background: var(--primary);
          color: white;
        }
        .year-links button {
          padding: 1rem 0.5rem;
          background: transparent;
          color: inherit;
          border: none;
        }

        .t-row {
          display: flex;
          justify-content: space-between;
          padding-block: 0.5rem;
          font-size: 1.1rem;
          border-bottom: 1px solid var(--dark);
        }
        @media screen and (min-width: 47em) {
          .fact {
            width: 33.33333%;
          }
        }
      `} </style>
    </>
  )
} 