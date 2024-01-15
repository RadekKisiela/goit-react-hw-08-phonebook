import React from 'react';

export const LoginForm = () => {
  return (
    <form>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      <button type="submit" value="Submit">
        Log in
      </button>
    </form>
  );
};
