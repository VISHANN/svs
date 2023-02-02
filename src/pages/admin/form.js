import { useEffect, useState } from "react"

export default function Form() {
  const totalEntries = 5;
  const initialState = [];
  for ( let i=0; i < totalEntries ; i++) {
    initialState.push({
      isLocked: false,
      name: "",
      fatherName: "",
      percentage: 0, // can be a number too
      class: "", // string
    });
  }
  const [state, setState] = useState(initialState);
  const [year, setYear] = useState(new Date().getFullYear() - 1);
  const [isValidYear, setIsValidYear] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/people/${year}`)
      .then(res => res.json())
      .then(people => (people.length > 0) ? setIsValidYear(false) : setIsValidYear(true))
      .catch(err => console.log(err));
  }, [year]);
  
  function handleChange(e) {
    const index = e.target.dataset.index,
      name = e.target.name,
      value = e.target.value;
      
    // if the record isLocked, don't change the state
    if (state[index].isLocked === true) return;

    // assigning state to tempState copies the array ref not the array itself
    const tempState = [...state];
    
    // followed a different approach to update record inside toggleLock
    tempState[index] = {
      ...tempState[index],
      [name]: value
    }
    setState(tempState);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // filter records which are locked
    let records = state.filter(record => record.isLocked && record);

    // map returns a new array after applying the function
    const data = records.map(record => {
      // percentage is String due to e.target.value
      record.percentage = Number(record.percentage);

      record.year = year;
      return record;
    });

    submitRecord(data);
  }
  
  function toggleLock(index) {
    const tempState = [...state];

    // as long as tempState points to different reference react registers 
    // state change and re-renders
    tempState[index].isLocked = !tempState[index].isLocked;
    setState(tempState);
  }

  function addRow () {
    const tempState = [...state];
    tempState.push({
      isLocked: false,
      name: "",
      fatherName: "",
      percentage: 0, 
      class: "", 
    })
    setState(tempState);
  }
  return(
    <main>
      <h1>Welcome svs_admin</h1>
      <div className="container">
        <label>
          Session:
          <input 
            type={"number"}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            min="2000"
          />
          -
          {year+1}
        </label>
        <span>
          {isValidYear ? "valid" : "invalid"}
        </span>
        <button onClick={addRow}>
          Add another record
        </button>
        <form onSubmit={handleSubmit}>
          {state.map((record, index) => (
              <InputRow 
                key={index}
                index={index}
                data={record}
                handleChange={handleChange}
                toggleLock={toggleLock}
              />)
          )}
        </form>
      </div>
      <style jsx>{`
        main {
          min-height: 100vh;
          min-width: 100%;
          background: var(--light);
        }
      `}</style>
    </main>
  )
}

function InputRow({ data, handleChange, index, toggleLock }) {  
  return (
    <div className="inline-form">
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
              checked={data.class === "XII"}
              onChange={handleChange}
              type="checkbox" 
              name="class"
              placeholder="class"
              value="XII"
            /> 
            XII
          </label>
          <label>
            <input 
              data-index={index}
              checked={data.class === "X"}
              onChange={handleChange}
              type="checkbox" 
              name="class"
              placeholder="class"
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

      <button 
        type="button"
        onClick={() => toggleLock(index)}
      >
        {data.isLocked ? "Unlock" : "Lock"}
      </button>
    </div>
  )
}
async function submitRecord(data) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  console.log(data);
  const res = await fetch('http://localhost:4000/people', options);
}

// Custom Layout for Admin Page, that returns the page as it is`

Form.getLayout = (page) => page;