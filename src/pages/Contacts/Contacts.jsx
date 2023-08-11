import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { getIsloading } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Title, Block } from './Contacts.styled';

function Contacts() {
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Block>
      {isLoading && <Loader />}
      <Title>Contacts list:</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </Block>
  );
}
export default Contacts;
