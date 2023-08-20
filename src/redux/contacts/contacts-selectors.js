const getAllContacts = state => state.contacts.items;

const getIsFetchAllContactsLoading = state =>
  state.contacts.isFetchAllContactsLoading;

const getIsFetchDeleteContact = state => state.contacts.isFetchDeleteContact;

const contactsSelectors = {
  getAllContacts,
  getIsFetchAllContactsLoading,
  getIsFetchDeleteContact,
};

export default contactsSelectors;
