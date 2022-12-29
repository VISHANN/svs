import Burger from './Burger'

export default function Navbar() {
  return(
    <>
      <nav>
        <div className="nav-brand">
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
          font-size: 1.5rem;
          padding-inline: 20%;

          display: flex;
          justify-content: space-between;
          align-items: center;


          background: #1e3932;
        }
        
        .nav-brand {
          color: #fff;
          font-weight: 800;
        }
        
        .nav-items {
          display: flex;
          justify-content: space-around;
          list-style: none;
        }
        
        .nav-link {
          display: inline-block;
          padding: 1rem 1rem;

          /* Center vertical nav links*/
          width: 100%;
          text-align: center;
          color: #fff;
          border-bottom: 4px solid #1e3932;
        }
        
        .nav-link:hover, .nav-link:focus {
          border-color: white;
        }
        @media screen and (max-width: 760px) {
          /* Styles for Mobile view */
          nav {
            padding: 0.7rem 1rem;
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

            background: #1e3932;
          }
          .nav-link {
            border: none;
          }
        }

        .open {
          transform: translateX(0);
        }
      `}</style>
    </>
  )
}