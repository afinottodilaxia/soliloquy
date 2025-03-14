import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginCard({ email, setEmail, password, setPassword, handleSubmit, loginErr, isLoading }) {
  return (
    <div className="card mt-5">
      <div className="card-header">
        <h4>Login</h4>
      </div>
      <div className="card-body">
        {loginErr && (
          <div className="alert alert-danger" role="alert">
            {loginErr}
          </div>
        )}
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default LoginCard;