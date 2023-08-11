import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from 'components/UserForm/UserForm';
import { login } from 'redux/user/operations';

function Login() {
  const dispatch = useDispatch();
  const handleLogin = FormData => {
    dispatch(login(FormData));
  };

  return (
    <div>
      <UserForm onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
