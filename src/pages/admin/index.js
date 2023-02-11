import { useState } from 'react';

const recordSchema = {
  isLocked: false,
  name: "",
  fatherName: "",
  percentage: 0,
  className: "",
}

export default function Admin () {
  return(
    <div className='container'>
      <h1>Welcome, Admin</h1>
      <Form />
    </div>
  )
}

function Form (props) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isUpdate, setIsUpdate] = useState(false);
  const [records, setRecords] = useState(getInitialState())

  function handleYearChange(e) {
    let value = Number(e.target.value);

    fetch(`http://localhost:4000/people/${value}`)
      .then(res => res.json())
      .then(records => {
        setYear(value);

        if (records.length === 0) {
          setIsUpdate(false);
          setRecords(getInitialState());
          return;
        }

        setIsUpdate(true);
        setRecords(DBToState(records));
        return;
      })
  }
  function addRow() {
    const t = [...records];
    t.push(recordSchema);
    setRecords(t);
  }
  function handleChange(e) {
    const index = e.target.dataset.index,
      name = e.target.name,
      value = e.target.value;
      
    // if the record isLocked, don't change the records
    if (records[index].isLocked === true) return;

    // assigning records to tempState copies the array ref not the array itself
    const tempState = [...records];
    
    // followed a different approach to update record inside toggleLock
    tempState[index] = {
      ...tempState[index],
      [name]: value
    }
    setRecords(tempState);
  }
  function toggleLock(index) {
    const tempState = [...records];

    // as long as tempState points to different reference react registers 
    // records change and re-renders
    tempState[index].isLocked = !tempState[index].isLocked;
    setRecords(tempState);
  }
  async function deleteRecord(index) {
    const t = [...records];
    // delete an existing document in DB
    if (t[index]._id) {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }

      const res = await fetch('http://localhost:4000/people/'+t[index]._id, options);
      if(!res.ok) alert("Update failed");
    }

    // now pop from array and set this array as state
    t.splice(index, 1);
    setRecords(t);

  }
  function handleSubmit(e) {
    e.preventDefault();

    // filter records which are locked
    let temp = records.filter(record => record.isLocked && record);

    // stop empty db calls
    if (!temp.length) return;

    // map returns a new array after applying the function
    const data = temp.map(record => {
      // percentage is String due to e.target.value
      record.percentage = Number(record.percentage);

      record.year = year;
      return record;
    });

    submitRecord(data, isUpdate);
  }

  return(
    <div style={{paddingTop: "1rem"}}>
      <div>
        <label>
            Session:
            {year - 1}
            -
            <input 
              type={"number"}
              value={year}
              onChange={handleYearChange}
              min="2000"
            />
          </label>
          <span className='isUpdate'>
            {(isUpdate) ? 'records found' : 'records not found'}
          </span>
          <button 
            type='button'
            onClick={addRow}>
              Add row
            </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid-row">
            <span>
              Name
            </span>
            <span>
              Father's Name
            </span>
            <span>
              Class
            </span>
            <span>
              Percent
            </span>
            <span>
              Actions
            </span>
          </div>
          {records.map((record, index) => {
            return (
              <div className='grid-row' key={index}>
                <InputRow 
                  index={index}
                  data={record}
                  handleChange={handleChange}
                  toggleLock={toggleLock}
                  deleteRecord={deleteRecord}
                />
              </div>
            )
          })}
          <button type={'submit'}>
            {isUpdate ? 'Update' : 'Add New Year'}
          </button>
        </form>
        <style jsx>{`
          .grid-row {
            display: grid;
            grid-template-rows: min-content;
            grid-template-columns: repeat(5, minmax(7rem, 15rem));
            gap: 1rem;
          }
        `}</style>
    </div>
  )
}

function InputRow({ data, index, handleChange, toggleLock, deleteRecord }) {  
  return (
    <>
      <input 
        onChange={handleChange}
        data-index={index} 
        value={data.name} 
        type="text" 
        name="name"
        placeholder="name"
      />
      <input 
        onChange={handleChange}
        data-index={index} 
        value={data.fatherName} 
        type="text" 
        name="fatherName"
        placeholder="fatherName"
      />
      <span>
        <label>
          <input 
            data-index={index}
            checked={data.className === "XII"}
            onChange={handleChange}
            type="checkbox" 
            name="className"
            placeholder="className"
            value="XII"
          /> 
          XII
        </label>
        <label>
          <input 
            data-index={index}
            checked={data.className === "X"}
            onChange={handleChange}
            type="checkbox" 
            name="className"
            placeholder="className"
            value="X"
          /> 
          X
        </label>
      </span>
      <input 
        onChange={handleChange}
        data-index={index} 
        value={data.percentage} 
        type="number" 
        name="percentage"
        placeholder="percentage"
        step={.01}
        min={0}
        max={100}/>

      <div>
        <button 
          type="button"
          onClick={() => toggleLock(index)}>

          {data.isLocked ? "Unlock" : "Lock"}
        </button>
        <button 
          type="button"
          onClick={() => deleteRecord(index)}>
          D
        </button>
      </div>
    </>
  )
}

function getInitialState() {
  let initialState = [];

  for (let i = 0; i < 5; i++) {
    initialState.push(recordSchema);
  }
  return initialState;
}
function DBToState(records) {
  // Add isLocked to records fetched from database
  records.forEach(record => {
    record.isLocked = false;
  });
  return records;
}

async function submitRecord(data, isUpdate) {
  const body = {
    data,
    isUpdate,
  }
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  fetch('http://localhost:4000/people', options)
    .then(res => res.status === 200 ? alert('Update Successful') : alert('Update Unsuccessful'))
    .catch(err => alert(err));
}


Admin.getLayout = (page) => page;