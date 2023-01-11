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
      <Slice 
        img = {{ src: "https://images.unsplash.com/photo-1582886986704-b8a1b2a74548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }}
        heading = "Priyansh Yadav"
        subheading = "92.42%, XII Board, 2022"
        lead = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.        "
        />
      <div className="slice facts">
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
        heading = "Yash Sharma"
        subheading = "82.42%, XII Board, 2022"
        lead = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.        "
        />

      <style jsx>{`
        span {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        span + span {
          padding-top: 1rem;
        }
        .number {
          font-size: 2.5rem;
          font-weight: 600;
        }
        .label {
          font-size: 1.25rem;
          text-transform: capitalize;
        }
        @media screen and (min-width: 47em) {
          span {
            width: 33.33333%;
          }
        }
      `} </style>
    </>
  )
} 