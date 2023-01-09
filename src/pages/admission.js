import PrimaryNav from "../components/navbar/PrimaryNav";
import Hero from "../components/hero"

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
    </>
  )
}