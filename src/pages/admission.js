import PrimaryNav from "../components/navbar/PrimaryNav";
import Hero from "../components/hero"
import Slice from "../components/slice";

export default function Admission() {
  return(
    <>
      <PrimaryNav type="header" />
      <Hero 
        title = "Admission"
        subtitle = "Learn about The Harker School's admission process."
      />
      <PrimaryNav />
      <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className='h1'>
                Admission
              </h1>
              <p className="intro">
                Namaste!
                  Thank you for your interested in The Vivekananda School. 
                  We are so excited to share our wonderful community with you, 
                  and we are eager to share the people and programs that make 
                  us special. We welcome you to explore our website to learn more about Harker, 
                  and we encourage you to contact us with your questions and how we can help your family get to know us better. 
                  Our admission team can’t wait to get to know YOU!

                  Mukesh Goswami, Director of Admission

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
      <Slice 
        img={{src:"https://www.harker.org/uploaded/themes/corporate-2015/img/Applying_to_Harker.jpg"}}
        head = "Our Community"
        lead = "We are a community of kind, dedicated, passionate learners, and constantly seek ways to understand, improve and explore new ideas and perspectives. From student classrooms to parent education events there is a shared love of learning that permeates the Vivekananda community. We are committed to welcoming and celebrating a diverse community of students, and fostering an inspiring, supportive and inclusive space for all. We work with families to make Vivekanand accessible and affordable, and our new scholarship endowment makes that even more possible. We are excited for the ways this endowment will enhance our community.Finally, we look for families who support our mission and want to partner with us to build a community where students are supported on their own unique journeys, growing at their own pace into the global citizens of tomorrow."
      />
      <Slice
        img = {{src:"https://www.harker.org/uploaded/themes/corporate-2015/img/Applying_to_Harker.jpg"}}
        head = "What makes us special?"
        lead = "Many things make Harker special, however our attention to each child’s journey is especially unique. Beginning in the lower school, and continuing throughout each student’s Harker journey, we carefully evaluate the course placement that best meets a student’s talents and interests to ensure that each is challenged, encouraged, engaged and inspired to be their personal and academic best. A vital part of that process involves the offering of extensive curricular and extracurricular offerings to help students discover and nurture talents they may not otherwise known they have. Our goal (and greatest joy) is to help all students uncover their unique gifts. We do this through our deep and varied offerings and through our incredible and inspiring faculty, for whom we search nationwide. Many hold advanced degrees, and all are passionate about teaching and focused on individual student success."
       /> 
    </>
  )
}