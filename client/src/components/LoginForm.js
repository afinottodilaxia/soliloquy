import { Link } from 'react-router-dom';
import LabeledInputField from './LabeledInputField';

function LoginForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <LabeledInputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
      />
      <LabeledInputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
      />
      <div className="form-group mb-3">
        <button className="btn btn-primary">Login</button>
        <Link to="/signup" className="btn m-3">
          Sign Up
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;