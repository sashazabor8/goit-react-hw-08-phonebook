import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.container}>
      <p className={s.text}>
        Вы вошли в аккаунт:
        <br />{' '}
        <NavLink to="/userInfo" className={s.email}>
          {email}
        </NavLink>
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Выйти
      </button>
    </div>
  );
}

export default UserMenu;
