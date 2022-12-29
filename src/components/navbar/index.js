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
          font-size: 1.5rem;
          padding-inline: 20%;

          display: flex;
          justify-content: space-between;
          align-items: center;


          background: #1e3932;
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