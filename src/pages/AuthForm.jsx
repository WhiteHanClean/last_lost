import React, { useEffect } from "react";
import "./auth.css";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../store/Actions/userActions";
// import Message from "../components/LoadingError/Error";
// import Loading from "../components/LoadingError/Loading";

const AuthForm = ({ location, history }) => {
  const [swapPanel, setSwapPanel] = useState(false);

  const signUpButton = () => {
    setSwapPanel(true);
  };
  const signInButton = () => {
    setSwapPanel(false);
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const dispatch = useDispatch();

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // const userLogin = useSelector((state) => state.userLogin);
  // const { error, loading, userInfo } = userLogin;

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [userInfo, history, redirect]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(login(email, password));
  // };
  return (
    <div>
      <div
        className={["container", swapPanel ? "right-panel-active" : null]
          .filter(Boolean)
          .join(" ")}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={signUpButton}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            action="#"
            // onSubmit={submitHandler}
          >
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <button onClick={signInButton}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                type="button"
                className="ghost"
                id="signIn"
                onClick={signInButton}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                type="button"
                onClick={signUpButton}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
