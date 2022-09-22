import { useEffect, useState } from 'react';
import './App.css';

/* function App() {
  console.log("clicked");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100);



  function updateCount() {
    setCount(count + 1);
  }

  function updateCount1() {
    setCount1(count1 - 1);
  }


  useEffect(function () {
    // this usereffect is triggered on every ender (every update) of the component
    console.log("Effect in react");
  });

  useEffect(function () {
    //this usereffect triggered  every time the count state variable is updated
    console.log("counter state variable was updated");
  },
    [count]
  );

  useEffect(function () {
    console.log("component rendered for the first time only");
  },
    []
  );


  return (
    <div className="App">
      <div>
        <h2> count: {count} </h2>
      </div>
      <button onClick={updateCount}>add Count</button>

      <div>
        <h2>sub count: {count1} </h2>
      </div>
      <button onClick={updateCount1}>Sub Count</button>

    </div>
  );
}

export default App; */

function App() {
  //  state called color => string
  const [color, setColor] = useState('yellow');
  useEffect(() => {
    console.log('Color of h1 changed to', color);
  }, [color]);
  //  //This is run every time instead of on just one particular state variable change
  useEffect(() => {
    console.log('Color of h1 changed to', color);
  });
  function changeColor() {
    setColor('red');
  }
  return (
    <>
      <h1 style={{ background: color }}>Today is only Thursday</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}
export default App;



