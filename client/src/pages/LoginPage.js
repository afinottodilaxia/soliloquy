import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import LoginCard from '../components/LoginCard';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmit, loginErr, isLoading } = useLogin(email, password);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <LoginCard
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            loginErr={loginErr}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
