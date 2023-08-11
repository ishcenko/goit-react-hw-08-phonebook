import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  Paragraph,
  FloatLabel,
  Input,
  Button,
} from './UserForm.styled';

function USerForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 className="form-title">{isLoginForm ? 'Sing in' : 'Sing up'}</h2>
      {isLoginForm ? null : (
        <Paragraph>
          <FloatLabel className="floatLabel" htmlFor="name">
            Name
          </FloatLabel>
          <Input type="text" name="name" ref={nameInputRef} required />
        </Paragraph>
      )}
      <Paragraph>
        <FloatLabel className="floatLabel" htmlFor="email">
          Email
        </FloatLabel>
        <Input type="email" name="email" ref={emailInputRef} required />
      </Paragraph>
      <Paragraph>
        <FloatLabel className="floatLabel" htmlFor="password">
          Password
        </FloatLabel>
        <Input
          type="password"
          name="password"
          minLength={7}
          ref={passwordInputRef}
          required
        />
      </Paragraph>
      <Button type="submit">
        {isLoginForm ? 'Sing In' : 'Create my account'}
      </Button>
    </StyledForm>
  );
}

USerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default USerForm;
