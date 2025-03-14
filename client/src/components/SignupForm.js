import InputField from './InputField';

function SignupForm({ handleSignup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(
      e.target.displayName.value,
      e.target.email.value,
      e.target.password.value
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Email" type="email" id="email" />
      <InputField label="Display Name" type="text" id="displayName" />
      <InputField label="Password" type="password" id="password" />
      <div className="form-group mb-3">
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </form>
  );
}

export default SignupForm;