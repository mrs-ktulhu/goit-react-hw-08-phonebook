import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/AuthOperations';
import { Link } from 'react-router-dom';
import {
  RegisterWrap,
  RegisterBtn,
  RegisterInput,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      userRegister({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterWrap>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <RegisterInput>
          Username
          <br />
          <input type="text" name="name" />
        </RegisterInput>
        <br />
        <RegisterInput>
          Email
          <br />
          <input type="email" name="email" />
        </RegisterInput>
        <br />
        <RegisterInput>
          Password
          <br />
          <input type="password" name="password" />
        </RegisterInput><br />
        <RegisterBtn type="submit">Sign up</RegisterBtn>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in now!</Link>{' '}
      </p>
    </RegisterWrap>
  );
};
