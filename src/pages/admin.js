import { useState } from "react"
import Hero from "../components/hero";

export default function Admin() {
  const n = 5;
  
  return(
    <>
      <Hero />
      <div className="slice container">
      {[...Array(n).keys()].map((record, index) => <Form key={index} />)}
      </div>
    </>
  )
}

function Form() {
  const initialState = {
    name: "",
    fatherName: "",
    percentage: 0, // can be a number too
    class: "", // string
  }
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = state;
    // formData percentage will always be a number string, or a number
    formData.percentage = Number(formData.percentage);
    submitRecord(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        value={state.name} 
        type="text" 
        name="name"/>

      <input 
        onChange={handleChange} 
        value={state.fatherName} 
        type="text" 
        name="fatherName"/>

      <span 
        onChange={handleChange} >
          <label>
            <input 
              type="radio" 
              name="class"
              value="XII"
              defaultChecked/> 
              XII
          </label>
          <label>
            <input 
              type="radio" 
              name="class"
              value="X"/> 
              X
          </label>
      </span>

      <input 
        onChange={handleChange} 
        value={state.percentage} 
        type="number" 
        name="percentage"
        step={.01}
        min={0}
        max={100}/>

      <button>Submit</button>
    </form>
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