export const RegisterForm = () => {
  return (
    <form>
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
        <input type="text" name="password" placeholder="Password" />
      </label>
    </form>
  );
};
