import useNavigateIfTokenExists from '../hooks/useNavigateIfTokenExists';
import useSignup from '../hooks/useSignup';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';

function SignupPage() {
  const { handleSignup, isLoading, signupMessage, error } = useSignup();
  useNavigateIfTokenExists();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              <h4>Sign Up</h4>
            </div>
            <div className="card-body">
              {signupMessage && (
                <div className="alert alert-success" role="alert">
                  {signupMessage} Please <Link to="/login">login</Link>
                </div>
              )}
              {error && (
                <div className="alert alert-success" role="alert">
                  {error}
                </div>
              )}
              <SignupForm handleSignup={handleSignup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
