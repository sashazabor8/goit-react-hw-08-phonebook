import { useDispatch } from 'react-redux';

import contactsOperation from 'redux/contacts/contacts-operations';
import Loader from 'components/Loader';
import s from './Contacts.module.css';

import React, { useState } from 'react';

function ContactsItem({ name, id, number }) {
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteContact = async () => {
    try {
      setIsDeleting(true);
      await dispatch(contactsOperation.fetchDeleteContact(id));
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className={s.contactsItem}>
      <p className={s.contactsText}>
        {name}: {number}
      </p>
      <button
        disabled={isDeleting}
        type="button"
        className={s.contactsBtn}
        onClick={deleteContact}
      >
        {isDeleting ? <Loader width={20} /> : <span>видалити</span>}
      </button>
    </li>
  );
}

export default ContactsItem;
