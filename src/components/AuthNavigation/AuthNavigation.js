import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

function AuthNavigation() {
  return (
    <div className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/login" className={s.link}>
            Логін
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/register" className={s.link}>
            Реєстрація
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AuthNavigation;
