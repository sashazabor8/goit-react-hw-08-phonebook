import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

import s from './LoginView.module.css';

function LoginView() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const resetForm = () => {
    setPassword('');
    setEmail('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'email':
        return setEmail(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    resetForm();
  };
  return (
    <div>
      <h1>Сторінка логіна</h1>

      <form className={s.loginForm} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label}>
          Пошта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <button type="submit" className={s.button}>
          Увійти
        </button>
      </form>
    </div>
  );
}

export default LoginView;
