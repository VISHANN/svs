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

      <section>
        <div className="tab-container">
          <Tabs records={records} />  
        </div>
      </section>     
      <style jsx>{`
        section {
          position: relative;
          background: white;

          padding-block: 0.5rem;
          background: var(--light);
        }
        .tab-container {
          position: relative;

          width: max-content;

          margin-inline: auto;
          margin-top: 5rem;
          
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