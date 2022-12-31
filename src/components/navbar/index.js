import Burger from './Burger'
import Menu from './Menu'

export default function Navbar() {
  return(
    <>
      <nav>
        <div className="nav-brand">
          SVS
        </div>
        
        <Menu />
        <Burger />
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          z-index: 10; /* To keep it on top of hero image */
          
          /* Positioned elements have their width calculated to fit content */
          width: 100%; 
          
          font-size: 1.5rem;
          padding-inline: 20%;
          background: transparent;
        }
        @media screen and (max-width: 760px) {

          nav {
            padding: 0.7rem 1rem;
          }
        }
        
        .nav-brand {
          color: #fff;
          font-weight: 800;
        }
      `}</style>
    </>
  )
}