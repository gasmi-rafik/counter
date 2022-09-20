
import './App.css';
import {useSelector , useDispatch} from "react-redux"
import { decrement, increment } from './redux/action/action';
function App() {
  const count = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const addOne =()=>{
    return dispatch(increment())
  }

  const minusOne =()=>{
    return dispatch(decrement())
  }
  return (
    <div className="App">
     <button onClick={addOne}>+</button>
     <span>{count}</span> 
     <button onClick={minusOne}>-</button>
    </div>
  );
}

export default App;
