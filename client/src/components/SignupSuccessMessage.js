import { Link } from 'react-router-dom';

function SignupSuccessMessage({ signupMessage }) {
  return (
    signupMessage && (
      <div className="alert alert-success" role="alert">
        {signupMessage} Please <Link to="/login">login</Link>
      </div>
    )
  );
}

export default SignupSuccessMessage;