import { useState } from "react";
import Table from "./Table";

export default function Tabs({ records }) {
  const sortedYears = Object.keys(records).sort(descendCompareFn); // ['2022', '2021]
  
  const [activeYear, setActiveYear] = useState(sortedYears[0]);

  return (
    <>
      <ul className='tab-items'>
        {sortedYears.map(year => {
          return (
            <li 
              key={year}
              className="tab-item"
            >
              <a 
                className={`tab-link ${year === activeYear ? "active" : ""}`}
                type='button'
                onClick={() => setActiveYear(year)}
                >
                {year}
              </a>
            </li>
          )
        })}
      </ul>
      <Table records={records[activeYear]} />
      <style jsx>{`
        .tab-items {
          position: relative;
          display: flex;

          padding-left: 1.5rem;
        }
        .tab-item {
          padding-inline: 1rem;
        }
        .tab-link {
          cursor: pointer;
          padding: 0.75rem 0.25rem;

          color: #333;
          font-weight: 500;
          font-size: 1.2rem;
        }
        .active {
          border-bottom: 3px solid #333;
        }
      `}</style>
    </>
  )
}

function descendCompareFn(a, b) {

  /* 
    for ascending return value,
      positive means a > b
      negative means a < b
      zero     means a = b
  */

  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}