import React, { useState } from 'react';



const App = () => {

  const state = useState();

  //count is the current state, we are changing the state from setCount
  const [count, setCount]  = useState(0);// 0 is initial state

  const IncNum = () => {
    //console.log('clicked');
    setCount(count+1);
  }


  return (
    <>
      <div className='container'>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
      </div>
    </>
  );
};

export default App;