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
    percentage: "", // can be a number too
    class: "", // string
  }
  const [record, setRecord] = useState(initialState);

  function handleChange(e) {
    setRecord({
      ...record,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitRecord(record);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={record.name} type="text" name="name"/>
      <input onChange={handleChange} value={record.fatherName} type="text" name="fatherName"/>
      <input onChange={handleChange} value={record.class} type="text" name="class"/>
      <input onChange={handleChange} value={record.percentage} type="text" name="percentage"/>
      <button>Submit</button>
    </form>
  )
}
async function submitRecord(record) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(record)
  }
  const res = await fetch('http://localhost:4000/people', options);
}