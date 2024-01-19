// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


export default function App() {
  // const [age, setAge] = useState(18);
  const [fvalue, setfvalue] = useState();
  const [svalue, setsvalue] = useState();
  const [op, setop] = useState();
  const [result, setresult] = useState();
  let handleclick = () => {
    if (op == "+") {
      setresult(fvalue + svalue);
    } else if (op == "-") {
      setresult(fvalue - svalue);
    } else if (op == '*') {
      setresult(fvalue * svalue);
    } else {
      setresult(fvalue / svalue);
    }
  }
  return (
    <div>
      <input onChange={(e) => { setfvalue(parseInt(e.target.value)) }} />
      <select onChange={(e) => { setop(e.target.value) }}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input onChange={(e) => { setsvalue(parseInt(e.target.value)) }} />
      <button onClick={handleclick}>Calculate</button>
      <br />
      <h2>The Result is {result}</h2>
      {/* {age < 18 ? <h2>You are child</h2> : age == 18 ? <h2>Your age is 18</h2> : <h2>You are adult</h2>} */}
    </div>
  );
}



