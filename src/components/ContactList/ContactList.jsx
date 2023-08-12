import PropTypes from 'prop-types';
import { Button, List, Item } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact, updateContact } from 'redux/operations';
import { EditContact } from 'components/EditContact/EditContact';
import { FiTrash2, FiPhone } from 'react-icons/fi';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const handleEdit = (id, formData) => {
    dispatch(updateContact({ id, formData }));
  };

  const handleCall = number => {
    window.open(`tel:${number}`);
  };

  return (
    <List>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <p>
                <b>{name}: </b>{' '}
              </p>{' '}
              <p>{number}</p>
              <Button onClick={() => handleDelete(id)}>
                <FiTrash2 />
              </Button>
              <EditContact
                id={id}
                onSubmit={formData => handleEdit(id, formData)}
              />
              <Button className="selected" onClick={() => handleCall(number)}>
                <FiPhone />
              </Button>
            </Item>
          );
        })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
