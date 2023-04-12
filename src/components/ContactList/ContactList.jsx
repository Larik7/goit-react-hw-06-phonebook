import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filterContacts = useSelector(getFilter);

  const getVisibleContacts = () => {
    if (!filterContacts) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
