export default function Burger() {
  function toggleNavbar(e) {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('open');
    
    const burger = document.querySelector('.burger');
    burger.classList.toggle('burger-open');
  }
  return (
    <button className="burger" onClick={toggleNavbar}>
      <div />
      <div />
      <div />

      <style jsx>{`
        button {
          /* Reset button default style */
          border: none;
          padding: 0;

          /* Dimensions of the button */
          height: 2rem;
          aspect-ratio: 1;

          /* Position the bars */
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          background: transparent;
        }
        div {
          /* Dimensions three bars */
          width: 2rem;
          height: 0.25rem;

          /* Color of bars */
          background: #fff;
          border-radius: 2rem;

          /* Common properties for toggle animation */
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
        
        .burger {
          /* Show button when menu open */
          position: relative;
          top: 0;
        }

        @media screen and (min-width: 760px) {
          .burger {
            display: none;
          }
        }

        /* Toggle burger */
        .burger-open > div:first-child {
          transform: rotate(45deg);
        }
        .burger-open > div:nth-child(2) {
          opacity: 0;
          transform: translateX(100%);
        }
        .burger-open > div:nth-child(3) {
          transform: rotate(-45deg);
        }
      `} </style>
    </button>
  )
}