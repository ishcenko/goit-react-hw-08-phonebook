import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import {
  Input,
  Form,
  Label,
  ImPhoneStyled,
  ImUserPlusStyled,
} from './ContactForm.styled';
import { Button } from 'components';
import { selectContacts } from 'redux/selectors';
import { FiUserPlus } from 'react-icons/fi';

export function ContactForm({ onSubmit }) {
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const inputChange = event => {
    const { name, value } = event.tardet;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isExist = contacts.find(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert('This contact is existed!');
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        {' '}
        <ImUserPlusStyled />{' '}
      </Label>
      <Input
        onChange={inputChange}
        value={name}
        type="text"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">
        {' '}
        <ImPhoneStyled />{' '}
      </Label>
      <Input
        onChange={inputChange}
        value={number}
        type="tel"
        name="number"
        placeholder="+380671234567"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button className="selected" type="submit">
        <FiUserPlus />
      </Button>
    </Form>
  );
}
