import React from 'react';
import { useDispatch } from 'react-redux';

import UserForm from 'components/UserForm/UserForm.jsx';
import { login } from 'redux/user/operations';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(login(formData));
  };

  return (
    <div>
      <UserForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default Login;
