import Hero from '../components/hero'
import Footer from '../components/footer'
import PrimaryNav from '../components/navbar/PrimaryNav'

export default function Home() {
  
  return (
    <>
      <PrimaryNav type="header"/>
      <Hero 
        title = "About Us"
        subtitle = "The Vivekanand School is one of the nations top college prep schools for offering students in kindergarten-grade 12 a high-quality, well-rounded and world-class education."/>
      
      <PrimaryNav />
      <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className='h1'>
                About Us
              </h1>
              <p className="intro">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia ab commodi cum recusandae ullam eveniet nihil, aliquam impedit repudiandae sit illum, cupiditate odio omnis magni saepe quos incidunt. Nam deleniti error aspernatur cumque saepe perspiciatis repudiandae temporibus commodi? Est quisquam expedita quia repellat eaque sunt inventore accusantium facilis veniam.
                <br />
                <br />
              </p>
              <p className="mt-3">
                <a className='btn btn-outline-white' href="#">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <img src="https://www.harker.org/uploaded/themes/corporate-2015/img/2019-05_US_Gradution_MK_0172.jpg" alt="" />
            </div>
            <div className="col-12 col-lg-8">
              <h2 className='h2'>
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
      </div>
      <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <img 
                src="https://www.harker.org/uploaded/themes/corporate-2015/img/2015-09_LS_Full_Dress_MK_0078.jpg" 
                alt="school kid" />
            </div>
            <div className="col-12 col-lg-8 pl-4">
              <h2 className="h2">
                Our Philosophy and Mission
              </h2>
              <p className="lead">
                Our Patron Swami Vivekananda envisioned knowledge as path to  a peaceful, prosperous future and we at the Vivekananda School are committed to realizing it.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Swami_Vivekananda-1893-09-signed.jpg" 
                alt="Swami Vivekananda" />
            </div>
            <div className="col-12 col-lg-8">
              <h2 className="h2">
                Our Patron
              </h2>
              <p className="lead">
                Our patron, Narendra Nath Dutta (1863-1902), popularly known as Swami Vivekananda, was an Indian Hindu monk, philosopher, author, religious teacher. 
                <br></br>
                Swami Vivekananda was a Hindu monk and one of the most celebrated spiritual leaders of India. He was more than just a spiritual mind; he was a prolific thinker, great orator and passionate patriot. He carried on the free-thinking philosophy of his guru, Ramakrishna Paramhansa forward into a new paradigm. He worked tirelessly towards betterment of the society, in servitude of the poor and needy, dedicating his all for his country. He was responsible for the revival of Hindu spiritualism and established Hinduism as a revered religion on world stage. His message of universal brotherhood and self-awakening remains relevant especially in the current backdrop of widespread political turmoil around the world. The young monk and his teachings have been an inspiration to many, and his words have become goals of self-improvement especially for the youth of the country. For this very reason, his birthday, January 12, is celebrated as the National Youth Day in India.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slice">
        <div className="container">
          <blockquote>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ipsum amet necessitatibus asperiores, delectus quod?
            </p>
            <cite>Swami Vivekananda</cite>
          </blockquote>
        </div>
      </div>
      <Footer></Footer>
      <style jsx>{`
        
      `}</style>
    </>
  )
}