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
        <div className="container">
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
      <div className="element bg-secondary text-white">
        <div className="container col-two">
          <div className="col-lg-4 px-2">
            <img src="https://www.harker.org/uploaded/themes/corporate-2015/img/2019-05_US_Gradution_MK_0172.jpg" alt="" />
          </div>
          <div className="col-lg-8 px-3">
            <h2 className="">
              The Vivekanand School: A World-Class Education for Tomorrow’s Leaders
            </h2>
            <p className="lead">
            Harker students receive a well-rounded education grounded in academics, enriching extracurricular activities and clubs, team-building athletics and an unwavering emphasis on character development that attracts college acceptances from top universities across the country. And, most importantly, students develop a lifelong passion for learning.

            Why families choose Harker:

              Leading academics: We offer an exceptional academic program characterized by an innovative, challenging curriculum.
              Robust programs and extracurricular activities: Our global learning opportunities, competitive sports teams and rich, varied student clubs inspire our students to reach their full potential.
              Experienced teachers: Our teaching team is the cornerstone of a Harker education. With a passion for their craft, their goal is your child’s success.
              Outstanding facilities: Our students enjoy fully equipped facilities with leading-edge technology to support dynamic, experiential learning inside the classroom and outdoors.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .element {
          position: relative;
          background: #f4f5ef;
        }
        .bg-secondary {
          background: #63a70a;
        }
        .text-white {
          color: white;
        }
        .container {
          width: 100%;
          max-width: 75rem;

          margin-inline: auto;
          padding: 3rem 1rem;

          line-height: 1.5;
          font-size: 1rem;
        }

        @media screen and (min-width: 760px) {
          .col-lg-4 {
            flex: 4;
          }
          .col-lg-8 {
            flex: 8;
          }
          .col-two {
            flex-direction: row !important;
          }
        }
        .col-two {
          flex-direction: column;
          display: flex;
        }
        .px-2 {
          padding-inline: 1rem;
        }
        .px-3 {
          padding-inline: 3rem 1rem;
        }
        
        h1 {
          margin-bottom: 1.5rem;
          color: #555;
          text-transform: uppercase;
          font-size: 3rem;
          font-weight: 700;
        }
        h2 {
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: 700;
        }
        .intro {
          font-size: 1.75rem;
          font-weight: 200;
        }
      `}</style>
    </>
  )
}