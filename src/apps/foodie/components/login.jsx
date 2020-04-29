import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ReactComponent as FoodieLogo } from "../assets/images/foodie-logo.svg";
const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  // const [loading, setloading] = useState(false);
  // const [error, setError] = useState({ has: false, message: "" });
  const history = useHistory();

  const handleFormSubmit = (data) => {
    navigate();
  };
  const navigate = () => {
    history.push("/foodie/home");
  };

  return (
    <div className="container-fluid">
      <div className="center-text">
        <FoodieLogo />
      </div>
      <div className="app-form-row">
        <h3>Please enter your login credentials</h3>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="app-form-row">
          <label className="block form-prompt">Email address</label>
          <input ref={register({ required: true })} name="emailAddress" type="text" className="text-box full-width" placeholder="jon.snow@winterfel.north" />
          {errors.emailAddress && <span className="error-text">Please enter your email address</span>}
        </div>
        <div className="app-form-row">
          <label className="block form-prompt">Password</label>
          <input ref={register({ required: true })} name="password" type="password" className="text-box full-width" placeholder="********" />
          {errors.emailAddress && <span className="error-text">Please enter your password</span>}
        </div>
        <div className="app-form-row">
          <span className="form-prompt">Forgot password?</span>
        </div>
        <div className="app-form-row">
          <button type="submit" className="app-button full-width bg-foodie text-white">
            Login
          </button>
        </div>
        <div className="app-form-row center-text">
          <span>
            New user <span className="text-foodie bold link-up">Create account</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
