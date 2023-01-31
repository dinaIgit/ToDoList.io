import { useState } from "react";
import { loginAction, registrationAction } from "../todo_store/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector } from "../todo_store/authReducer";

const Auth = () => {
  const [state, setState] = useState({ email: "", pass: "" });

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This project was created in Firebase React</h1>
      <h2>To create a To-Do List you need to register.</h2>
      <h3>
        The password must contain at 6 symbols. If you want to test the To-Do
        List without registering, use:
      </h3>
      <p>Login: admin@gmail.com </p>
      <p>Password: 123456 </p>
      {error && <h3>{error}</h3>}
      <form className="row login">
        <input
          type="text"
          name="email"
          placeholder="type your email"
          value={state.email}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <input
          type="text"
          name="pass"
          placeholder="type your password"
          value={state.pass}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <div className="login-btns">
          <button
            type="submit"
            name="reg"
            onClick={(e) => {
              e.preventDefault();
              dispatch(registrationAction(state.email, state.pass));
              setState({ email: "", pass: "" });
            }}
          >
            registration
          </button>
          <button
            type="submit"
            name="login"
            onClick={(e) => {
              e.preventDefault();
              dispatch(loginAction(state.email, state.pass));
              setState({ email: "", pass: "" });
            }}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
