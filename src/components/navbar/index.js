import Burger from './Burger'

export default function Navbar() {
  return(
    <>
      <nav>
        <div className="brand-banner">
          SVS
        </div>
        
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#" className="nav-link">Admission</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Achievements</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact Us</a>
          </li>
        </ul>

        <Burger />
      </nav>
      <style jsx>{`
        /* Remove default margin and padding of ul and ol*/
        ul {
          margin: 0;
          padding: 0;
        }
        nav {
          padding-inline: 20%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          position: relative;
        }

        .nav-items {
          display: flex;
          justify-content: space-around;
          list-style: none;
        }
        @media screen and (max-width: 760px) {
          nav {
            padding-inline: 1rem;
          }
          .nav-items {
            transform: translateX(-100%);
            transition: transform 0.3s linear;

            flex-direction: column;
            justify-content: center;
            align-items: stretch;

            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            background: black;
          }
          .nav-item .nav-link{
            color: white;
          }
        }

        .nav-link {
          padding: 1rem;
        }
        
        .nav-item {
          text-align: center;
          border: 1px solid red;
        }

        .open {
          transform: translateX(0);
        }
      `}</style>
    </>
  )
}