import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Submit">
        Log in
      </button>
    </form>
  );
};
