import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValue] = useState([]);

  const handleClick = () => {
    setCounter(counter + 1);
    setValue(values.concat(counter));
  };

  return (
    <div className="container">
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
      <div>{counter}</div>
    </div>
  );
};

export default App;
