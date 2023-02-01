import { useState } from "react"
export default function Admin() {
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

  function handleChange(e) {
    const index = e.target.dataset.index,
      name = e.target.name,
      value = e.target.value;

    // assigning state to tempState copies the array ref not the array itself
    const tempState = [...state];
    tempState[index] = {
      ...tempState[index],
      [name]: value
    }    

    setState(tempState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = state;
    // formData percentage will always be a number string, or a number
    formData.percentage = Number(formData.percentage);
    submitRecord(formData);
  }
  
  function toggleLock(index) {
    const tempState = [...state];
    tempState[index] = {
      ...tempState[index],
      isLocked: !tempState[index].isLocked,
    }
    setState(tempState);
  }
  return(
    <main>
      <h1>Welcome svs_admin</h1>
      <div className="container">
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
        name="name"/>

      <input 
        onChange={handleChange}
        data-index={index} 
        value={data.fatherName} 
        type="text" 
        name="fatherName"/>

      <span>
          <label>
            <input 
              data-index={index}
              checked={data.class === "XII"}
              onChange={handleChange}
              type="checkbox" 
              name="class"
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
        step={.01}
        min={0}
        max={100}/>

      <button onClick={() => toggleLock(index)}>
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
  // const res = await fetch('http://localhost:4000/people', options);
}

// Custom Layout for Admin Page, that returns the page as it is`

Admin.getLayout = (page) => page;