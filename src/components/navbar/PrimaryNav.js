export default function PrimaryNav() {
  // First file to use camelcase for class naming
  return (
    <div className="brand-bar">
      <nav className="primary-nav">
        <ul>
          <li>Home</li>
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
      </nav>
      <style jsx>{`
        .brand-bar {
          position: sticky;
          top: 0;
          z-index: 10;

          color: #fff;
        }
        .primary-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding-inline: 15%;
          background: #044836;
        }
        ul {
          list-style: none;
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
          display: flex;
        }
      `} </style>
    </div>
  )
}