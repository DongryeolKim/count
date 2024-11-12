import './App.css';
import Controller from './etc/Controller';
import Viewer from './etc/Viewer';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>        Simple Count!      </h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;