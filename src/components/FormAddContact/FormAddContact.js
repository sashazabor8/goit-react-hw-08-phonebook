import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperation from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';

import s from './FormAddContact.module.css';

function FormAddContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const isFetchAllContactsLoading = useSelector(
    contactsSelectors.getIsFetchAllContactsLoading
  );

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };
    dispatch(contactsOperation.fetchAddContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <>
      {!isFetchAllContactsLoading && (
        <form className={s.form} onSubmit={onSubmitForm}>
          <h3 className={s.title}>
            {allContacts.length === 0
              ? 'Додайте ваш перший контакт!'
              : 'Додайте контакт!'}
          </h3>
          <label className={s.label}>
            Ім'я:
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={s.label}>
            Номер телефону:
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={s.button}>
            Додати контакт
          </button>
        </form>
      )}
    </>
  );
}

export default FormAddContact;
