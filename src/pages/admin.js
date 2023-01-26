import { useState } from "react"
import Hero from "../components/hero";

export default function Admin() {
  
  return(
    <>
      <Hero />
      <div className="slice container">
        <Form />
      </div>
    </>
  )
}

function Form() {
  // this does not accomodate year
  const initialState = [];
  for ( let i = 0; i < 5; i++ ) {
    initialState.push(
      {
      isLocked : false,
      name: "Ujjwal",
      fatherName: "",
      percentage: "", // can be a number too
      class: "", // string
      });
  }

  const [state, setState] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
  function handleChange(e) {
    let name = e.target.name,
      value = e.target.value;
    let targetIndex = Number(e.target.dataset.index);

    setState(prevState => {
      const record = prevState[targetIndex];
      prevState[targetIndex] = {
        ...record,
        [name]: value
      }
      return prevState;
    })

    e.target.value = state[targetIndex].name
    console.log(state);
  }
  const list = state.map((record, index) => 
        <div key={index}>
          <input onChange={handleChange} data-index={index} name="name" value={state[index].name} type="text"/>
          <input onChange={handleChange} data-index={index} name="fatherName" value={state[index].fatherName} type="text"/>
          <input onChange={handleChange} data-index={index} name="class" value={state[index].class} type="text"/>
          <input onChange={handleChange} data-index={index} name="percentage" value={state[index].percentage} type="text"/>
        </div>
      )

  return (
    <form onSubmit={handleSubmit}>
      {list}

      <input type="submit"></input>
    </form>
  )
}

async function addStudentToDB(student) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  }
  const res = await fetch('http://localhost:4000/people', options);
}