import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {incrementAction, decrementAction} from './Redux/Actions';
function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit and save to reloadas. {counter}
        </p>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={() => dispatch(decrementAction())}>-</button>
      </header>
    </div>
  );
}

export default App;
