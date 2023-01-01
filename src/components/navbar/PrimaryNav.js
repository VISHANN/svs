import Burger from "./Burger";

export default function PrimaryNav() {
  // First file to use camelcase for class naming
  return (
    <div className="brand-bar">
      <nav className="primary-nav">
        <ul>
          <li><a href="#">Home</a> </li>
        </ul>

        <ul className="primary-nav-sections">
          <li>
            <a href="#"> Admission </a>
          </li>
          <li>
            <a href="#"> Achievements </a>
          </li>
          <li>
            <a href="#"> About Us </a>
          </li>
          <li>
            <a href="#"> Gallery </a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
        </ul>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <style jsx>{`
        .brand-bar {
          position: sticky;
          top: 0;
          z-index: 10;
          
          color: #fff;
          background: #044836;
        }
        .primary-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          width: 100%;
          height: 3rem;
          max-width: 75rem;
          margin-inline: auto;
          padding-inline: 1rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .primary-nav a {
          padding: .875rem .5rem .625rem;
          /* line-height creating the unwanted whitespace */
          line-height: 1;

          text-transform: uppercase;
          text-decoration: none;
          color: white;
          font-weight: 600;
        }
        .primary-nav-sections {
          display: none;
          margin-left: auto;
        }
        @media all and (min-width: 760px) {
          .primary-nav-sections {
            display: flex;
          }
        }

        .burger {
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .burger > div {
          width: 14px;
          height: 2px;
          background: #fff;
        }
        @media all and (min-width: 760px) {
          .burger {
            display: none;
          }
        }
      `} </style>
    </div>
  )
}