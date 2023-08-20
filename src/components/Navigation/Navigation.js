import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <NavLink to="/contacts" className={s.link}>
        Контакти
      </NavLink>
      <NavLink to="/favoriteContacts" className={s.link}>
        Вибрані контаки
      </NavLink>
    </>
  );
}

export default Navigation;
