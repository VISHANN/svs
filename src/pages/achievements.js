import Hero from '../components/hero'
import PrimaryNav from '../components/navbar/PrimaryNav'
import Slice from '../components/slice'
import { clientPromise } from '../lib/mongodb'

export default function Achievements() {
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
    
    </>
  )
} 

export async function getStaticProps(context) {
  try {
    const client = await clientPromise,
      db = client.db("svs");

     await db.command({ ping: 1 }) ;
     console.log("Connected to svs db successfully");
     return {
      props: {}
     }
  } catch(e) {
    console.error(e);
  }
}