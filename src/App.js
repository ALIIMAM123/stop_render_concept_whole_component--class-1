import "./styles.css";
import { useState } from "react";

function Counter() {
  console.log("counter called");
  const [val, setVal] = useState(0);

  const appFunction = () => {
    setVal(val + 1);
  };

  return (
    <>
      <button onClick={appFunction}>button</button>
      <h1>{val}</h1>
    </>
  );
}

export default function App() {
  console.log("App called");
  return (
    <>
      <Counter />
      <h1>jodhee ecoenbeoce eoenfbeof </h1>
      <h1>jodhee ecoenbeoce eoenfbeof </h1>
      <h1>jodhee ecoenbeoce eoenfbeof </h1>
      <h1>jodhee ecoenbeoce eoenfbeof </h1>
    </>
  );
}
