import { useDispatch, useSelector } from 'react-redux';
import { Authactions } from '../store';
import classes from './Header.module.css';



const Header = () => {
  const auth = useSelector(state=>state.authreducer.isAuthenticated);
  const dispatch= useDispatch();
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{auth===true?<>
        <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li></>:''}
          <li>
            <button onClick={()=>dispatch(Authactions.logouthandler())}>{auth?'LOGOUT':'LOGIN'}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
