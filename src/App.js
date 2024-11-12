import './App.css';
import Controller from './etc/Controller';
import Viewer from './etc/Viewer';
import Even from './etc/Even';

import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("시작");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = e => {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log("업데이트 :", count, text)
  }, [count, text])

  return (
    <div className="App">
      <h1>        Simple Count!      </h1>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : '홀수'}
      </section>

      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>

      <div>
        <input
          value={text}
          onChange={handleSetText}
        />
        {text}
      </div>

    </div>
  );
}

export default App;