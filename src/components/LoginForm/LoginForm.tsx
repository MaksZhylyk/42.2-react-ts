import Button from "../Button/Button";
import Input from "../Input/Input";
import "./style.css";

function LoginForm() {
  return (
    <form className="login-form-wrapper">
      <div className="login-form-title">Login form</div>
      <div className="inputs-container">
        <Input
          name="email"
          id="user_email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="password"
          id="user_password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="submit" onClick={() => {}} />
    </form>
  );
}

export default LoginForm;
