import Hero from '../components/hero'
import PrimaryNav from '../components/navbar/PrimaryNav'
import Slice from '../components/slice'
import { Tabs } from '../components/achievements';

export default function Achievements({ records }) {
  return (
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
      
      
      
      <section>
        <div className="tab-container">
          <Tabs records={records} />  
        </div>
      </section>     
      <style jsx>{`
        section {
          position: relative;

          padding-block: min(10%, 5rem);
          background: var(--light);

        }
        .tab-container {
          position: relative;

          width: 100%;
          max-width: max-content;

          margin-inline: auto;
          
          background: white;
          border-radius: 2rem;

          padding: 3rem 1.5rem;
        }
      `} </style> 
    </>
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