import { Fragment } from 'react';

export default function Table({ records }) {
  return (
    <div className='table'>
      <div className="table-grid">
        <>
          <span className='head'>
            Name
          </span>
          <span className='head'>
            Father's Name
          </span>
          <span className='head'>
            Class
          </span>
          <span className='head'>
            Percent
          </span>
        </>
        {records.map(record => {
          return(
            <Fragment key={record._id}>
              <span>
                {record.name}
              </span>
              <span>
                {record.fatherName}
              </span>
              <span>
                {record.className}
              </span>
              <span>
                {record.percentage}%
              </span>
            </Fragment>
          )
        })}
      </div>
      <style jsx>{`
        .table {
          position: relative;
          overflow-x: scroll;
        }
        .table-grid {
          display: grid;
          grid-template-rows: auto;
          grid-template-columns: repeat(4, max-content);

          padding: 3rem 1.5rem .5rem;
        }
        .head {
          color: #333;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: capitalize;
          font-size: 1.1rem;
          padding-bottom: 1rem !important;
        }
        .table-grid > * {
          padding: 0.75rem 1.5rem;
          border-bottom: 1px solid #777;
          text-align: center;
        }
      `}</style>
    </div>
  )
}