import { useSelector } from 'react-redux';
import { useState } from 'react';

import contactsSelectors from 'redux/contacts/contacts-selectors';

import s from './Contacts.module.css';
import Filter from 'components/Filter';
import ContactsItem from './ContactsItem';

function Contacts() {
  const [filter, setFilter] = useState('');

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const filteredList = () => {
    const optimizedFilter = filter.toLocaleLowerCase().trim();
    return allContacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(optimizedFilter)
    );
  };
  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <ul className={s.contacts}>
        {filteredList().map(contact => {
          return <ContactsItem key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
}

export default Contacts;
