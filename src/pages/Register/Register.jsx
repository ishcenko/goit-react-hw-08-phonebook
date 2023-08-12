import React from 'react';
import { useDispatch } from 'react-redux';

import UserForm from 'components/UserForm/UserForm.jsx';
import { register } from 'redux/user/operations';

function Register() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    console.log(formData);
    dispatch(register(formData));
  };

  return (
    <div>
      <UserForm onSubmit={handleRegister} />
    </div>
  );
}

export default Register;
