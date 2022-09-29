import { useState } from 'react';
import Counter from './components/counter';
function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);
  return (
    <>
      <h1> We are working  branches</h1>
      <p> new files </p>
      <Counter count={count} updateCount={updateCount} color="orange"></Counter>
      <br />
      <Counter count={count} updateCount={updateCount} color="blue"></Counter>
      <br />
      <Counter count={count} updateCount={updateCount} color="green"></Counter>
    </>
  );
}
export default App;