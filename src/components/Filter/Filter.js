import s from './Filter.module.css';

function Filter({ filter, setFilter }) {
  return (
    <label>
      Пошук контактів:
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </label>
  );
}

export default Filter;
