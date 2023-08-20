import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/auth-operations';
import s from './Register.module.css';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };
  return (
    <div>
      <h1>Сторінка реєстрації</h1>

      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label}>
          Ім'я
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.input}
          />
        </label>

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
          Зареєструватися
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
