import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counteractions } from '../store';

const Counter = () => {
  const counter = useSelector(state=>state.counterreducer.counter);
  const toggleCounter = useSelector(state=>state.counterreducer.toggle)
  const dispatch=useDispatch();
  const Incrementhandler=()=>{
    dispatch(counteractions.Incrementhandler());
  }
  const Decrementhandler=()=>{
    dispatch(counteractions.Decrementhandler());
  }
  const Dynamichandler=()=>{
    dispatch(counteractions.Dynamichandler(10));
  }
  const toggleCounterHandler = () => {
    dispatch(counteractions.togglehandler());
  };

  return (<>
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!toggleCounter &&
      <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={Incrementhandler}>Increment</button>
        <button onClick={Dynamichandler}>Dynamic</button>
        <button onClick={Decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    </>
  );
};

export default Counter;
