export default function Menu() {
  return(
    <>
      <ul className="nav-items">
        <li>
          <a href="#" className="nav-link">Admission</a>
        </li>
        <li>
          <a href="#" className="nav-link">Achievements</a>
        </li>
        <li>
          <a href="#" className="nav-link">About Us</a>
        </li>
        <li>
          <a href="#" className="nav-link">Gallery</a>
        </li>
        <li>
          <a href="#" className="nav-link">Contact Us</a>
        </li>
      </ul>
      <style jsx>{`
        /* Remove default margin and padding of ul and ol*/
        ul {
          margin: 0;
          padding: 0;
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
      `} </style>
    </>
  )
}