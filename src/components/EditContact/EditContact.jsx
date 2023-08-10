import PropTypes from 'prop-types';
import { useRef } from 'react';
import { FiTool, FiUserCheck } from 'react-icons/fi';
import { Button } from 'components/ContactList/ContactList.styled';
import {
  Label,
  Input,
  ImPhoneStyled,
  ImUserPlusStyled,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { Backdrop, Modal, Form } from './EditContact.styled';

export const EditContact = ({ onSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const numberInputRef = useRef();
  const nameInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      number: nameInputRef.current.value,
      name: nameInputRef.current.value,
    };

    onSubmit(formData);
    event.target.reset();
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(!setShowModal);
  };

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        <FiTool />
      </Button>
      {showModal && (
        <Backdrop onClick={toggleModal}>
          <Modal onClick={event => event.stopPropagation()}>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">
                <ImUserPlusStyled />{' '}
              </Label>
              <Input
                ref={nameInputRef}
                type="text"
                name="name"
                placeholder="Name"
                bg="white"
              />
              <Label htmlFor="number">
                <ImPhoneStyled />{' '}
              </Label>
              <Input ref={numberInputRef} name="number" placeholder="Number" />
              <Button type="submit" className="selected">
                <FiUserCheck />
              </Button>
            </Form>
          </Modal>
        </Backdrop>
      )}
    </>
  );
};

EditContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
