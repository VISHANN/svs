export default function Footer () {
  return(
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <ul className="footer-links">
              <a href="/about">
                About
              </a>
              <a href="/admission">
                Admission
              </a>
              <a href="#">
                Contact
              </a>
              <a href="#">
                About
              </a>
              <a href="#">
                About
              </a>
            </ul>
          </div>
          <div className="col-12 col-lg-8">
            <div className="logo">
              SVS
            </div>
            <div className="footer-legal">
              <span>
                Copyright © 2022
              </span>
              <span>
                The Vivekananda School
              </span>
              <span>
                9 Nehru Nagar, Alwar, RA 301001
              </span>
              <span>
                902 402 1906 | Contact Us | Sustainability at Vivekananda |
                Diversity, Equity & Inclusion at Vivekananda
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          position: relative;
          background: var(--primary);
          color: var(--light);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          padding-bottom: 0.5rem;
        }
        .footer-links {
          padding-bottom: 1.75rem;
        }
        .footer-links > a {
          display: block;
          font-weight: 500;
          padding-block: 0.5rem;
          text-transform: uppercase;
          border-bottom: 1px solid var(--light);
        }
        .footer-legal {
          font-size: 14px;
          text-align: center;
          max-width: 30rem;
          margin-inline: auto;
        }
        .footer-legal > span::after {
          content: " • ";
          width: 8px;
          height: 100%;
        }
      `} </style>
    </section>
  ) 
}