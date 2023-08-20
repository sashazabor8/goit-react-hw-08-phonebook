import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperation from 'redux/contacts/contacts-operations';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import FormAddContact from 'components/FormAddContact';
import Contacts from 'components/Contacts';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchAllContacts());
  }, [dispatch]);

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const isFetchAllContactsLoading = useSelector(
    contactsSelectors.getIsFetchAllContactsLoading
  );

  return (
    <>
      {!isFetchAllContactsLoading && (
        <div>
          <FormAddContact />
          {allContacts.length > 0 && <Contacts />}
        </div>
      )}
    </>
  );
}

export default ContactsView;
