import Image from 'next/image'
import Hero from '../components/hero'
import PrimaryNav from '../components/navbar/PrimaryNav'
import { Tabs } from '../components/achievements';
import DummyImg from '../../public/img/students/dummy.jpg'
import Blockquote from '../components/common/Blockquote';

export default function Achievements({ records }) {
  return (
    <>
      <Hero 
        title = "Our Achievements"
        subtitle = "A glimpse of what our students and Vivekananda team has achieved."
      />
      <PrimaryNav />
      
      <article className="main">
        <section className="slice">
          <div className='container'>
            <h1 className="h1">
              Our Achievements
            </h1>
            <p className="intro">
              Our students have done us proud again and again, consitently performing excellently, be it in academics
              or extracurricular activities. Our faculty and students have worked in tandem to achieve such remarkable
              feats, and we could not my prouder.
            </p>
          </div>
        </section>

        <section className="slice">
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
        </section>

        <section className="slice">
          <div className="container">
            <div className="cards-wrapper">
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
            </div>
          </div>
        </section>
      </article>
 
      <section className='slice'>
        <div className="tabs container">
          
          <div className="review">
            <Blockquote
              quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsum amet necessitatibus asperiores, delectus quod?"
              cite="Jilsana Bano, XII, 2022" />
          </div>

          <div className="tab-container">
            <Tabs records={records} />  
          </div>

        </div>
      </section>     
      <style jsx>{`
        .main {
          position: relative;
        }
        .tabs {
          position: relative;
          padding-block: min(10%, 5rem);
          background: var(--light);
          
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .tab-container {
          width: 100%;
          max-width: max-content;
          margin-inline: auto;
          background: white;
          border-radius: 2rem;
          padding: 3rem 1.5rem;
        }

        .cards-wrapper {
          display: flex;
          gap: 20px;
          width: 100%;
          justify-content: space-around;
        }

        .review {
          flex: 1 1;
        }
      `} </style> 
    </>
  )
} 

function ResultCard() {
  const imgStyle = {
    borderRadius: "0.7rem 0.7rem 0 0",
  }
  return(
    <div className='result-card'>
      <Image 
        src={DummyImg}
        width={190}
        height={190}
        style={imgStyle} />

      <div className='caption'>
        <p className="name">
          Jilsana Bano
        </p>
        <p className="result">
          90.24%, XII (2022)
        </p>
      </div>    

      <style jsx>
        {`
          .result-card {
            background: white;
            border-radius: 0.7rem;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
          }
          .caption {
            text-align: center;
            font-family: Merriweather, serif;
            color: #555;
            padding-block: 0.5rem 0.7rem;
          }
          .name {
            font-size: 1.1rem;
            margin-bottom: .2rem;
          }
          .result {
          }
        `}
      </style>
    </div>
  )
}

export async function getStaticProps(context) {
  let year = new Date().getFullYear();
  const LAST_EXISTING_YEAR = 2019;
  const records = {};

  while (Object.keys(records).length < 4 && year !== LAST_EXISTING_YEAR) {
    const yearRecords = await fetch(`http://localhost:4000/people/${year}`).then(res => res.json());
    if (yearRecords.length > 0) records[year] = yearRecords;
    year--;
  }

  return {
    props: {
      records,
    },
  }
}