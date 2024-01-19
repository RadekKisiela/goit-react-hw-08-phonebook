import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (
      !form.elements.name.value ||
      !form.elements.email.value ||
      !form.elements.password.value
    ) {
      setError('Please complete all form fields.');
      return;
    }

    try {
      await dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        Email:
        <input type="text" name="email" placeholder="Email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};
