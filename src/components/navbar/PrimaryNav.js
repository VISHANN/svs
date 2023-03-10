import { useState } from 'react'
export default function PrimaryNav(props) {
  // First file to use camelcase for class naming
  const [isOpen, setIsOpen]= useState(false);
  const isHeader = (props.type == "header") ? true : false;

  function toggleMenu() {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <div className="brand-bar">
      <nav className="nav">
        <ul>
          <li><a href="#"> Home </a></li>
        </ul>

        <ul className="nav-sections">
          <li>
            <a href="/about"> About </a>
          </li>
          <li>
            <a href="/admission"> Admission </a>
          </li>
          <li>
            <a href="#"> Achievements </a>
          </li>
          <li>
            <a href="#"> Gallery </a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <style jsx>{`
        .brand-bar {
          position: ${isHeader ? "absolute": "sticky"};
          top: 0;
          z-index: 10;
          
          color: #fff;
          background: ${isHeader ? "transparent" : "var(--primary)"};
          width: 100%;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          width: 100%;
          height: 3rem;
          max-width: 75rem;
          margin-inline: auto;
          padding-inline: 1rem;
        }
        .nav a {
          display: inline-block;
          padding: .875rem .5rem .625rem;
          
          /* line-height creating the unwanted whitespace */
          line-height: 1;

          text-transform: uppercase;
          text-decoration: none;
          color: white;
          font-weight: 600;
        }
        .nav-sections {
          display: flex;
          flex-direction: column;

          position: fixed;
          top: 0;
          left: 0;
          width: 90%;
          height: 100vh;

          background: var(--primary);

          transform: translateX(${isOpen ? "0" : "-100%"});
          transition: transform 0.3s linear;
        }
        @media all and (min-width: 760px) {
          .nav-sections {
            display: flex;
            flex-direction: row;
            align-items: center;
            
            position: static;
            width: fit-content;
            height: 100%;
            
            background: inherit;
            transform: translateX(0);
            margin-left: auto;
          }
        }

        .burger {
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          position: relative;
          cursor: pointer;
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