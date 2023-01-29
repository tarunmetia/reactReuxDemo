import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {incrementAction, decrementAction} from './Redux/Actions';
import {incrementAction, decrementAction} from './Redux/allAction';
function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const AC = bindActionCreators({incrementAction, decrementAction}, dispatch);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit and save to reloadas. {counter} a
        </p>
        <button onClick={() => AC.incrementAction(12)}>+</button>
        <button onClick={() => AC.decrementAction(12)}>-</button>
      </header>
    </div>
  );
}

export default App;
