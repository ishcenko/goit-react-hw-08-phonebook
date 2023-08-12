import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  Paragraph,
  Floatlabel,
  Input,
  Button,
} from './UserForm.styled';

function UserForm({ onSubmit, isLoginForm = false }) {
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
      <h2 className="form-title">{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
      {isLoginForm ? null : (
        <Paragraph>
          <Floatlabel className="floatLabel" htmlFor="name">
            Name
          </Floatlabel>
          <Input type="text" name="name" ref={nameInputRef} required />
        </Paragraph>
      )}
      <Paragraph>
        <Floatlabel className="floatLabel" htmlFor="email">
          Email
        </Floatlabel>
        <Input type="email" name="email" ref={emailInputRef} required />
      </Paragraph>
      <Paragraph>
        <Floatlabel className="floatLabel" htmlFor="password">
          Password
        </Floatlabel>
        <Input
          type="password"
          name="password"
          minLength={7}
          ref={passwordInputRef}
          required
        />
      </Paragraph>

      <Button type="submit">
        {isLoginForm ? 'Sign In' : 'Create My Account'}
      </Button>
    </StyledForm>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
