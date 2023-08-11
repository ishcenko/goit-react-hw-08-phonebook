import React from 'react';
import { useDispatch } from 'react-redux';
import USerForm from 'components/UserForm/UserForm';
import { register } from 'redux/user/operations';

function Register() {
  const dispatch = useDispatch();
  const handleRegister = FormData => {
    console.log(FormData);
    dispatch(register(FormData));
  };

  return (
    <div>
      <USerForm onSubmit={handleRegister} />
    </div>
  );
}

export default Register;
