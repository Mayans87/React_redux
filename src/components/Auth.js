import classes from './Auth.module.css';
// import {   } from 'react-redux/es/hooks/useSelector';
// import store from './store';
import { Authactions } from '../store';
import { useDispatch,useSelector } from 'react-redux';

const Auth = () => {
  const authicator = useSelector(state=>state.authreducer.isAuthenticated);
  const dispatcher = useDispatch();
  function loginhandler(){
    dispatcher(Authactions.loginhandler());
  }
  return (
    <main className={classes.auth}>
      <section>{authicator===false?
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginhandler}>Login</button>
        </form>
        :<p style={{fontWeight:'bold',fontSize:'2rem'}}>Welcome! MAYANK &#128516;</p>}
      </section>
    </main>
  );
};

export default Auth;
