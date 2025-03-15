import useNavigateIfTokenExists from '../hooks/useNavigateIfTokenExists';
import useSignup from '../hooks/useSignup';
import SignupForm from '../components/SignupForm';
import SignupSuccessMessage from '../components/SignupSuccessMessage';
import SignupErrorMessage from '../components/SignupErrorMessage';

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
              <SignupSuccessMessage signupMessage={signupMessage} />
              <SignupErrorMessage error={error} />
              <SignupForm handleSignup={handleSignup} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
