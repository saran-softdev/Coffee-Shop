import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../scss/login-signup.css";
import {
  loginUserEmail,
  loginUserName,
  loginUserImage
} from "../Redux/ReduxUserData/UserDataAction";
import { useDispatch } from "react-redux";

function SignUp() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Dummy API endpoints (replace with actual endpoints)
  const signUpEndpoint = `${BACKEND_URL}/api/signup`; // Replace with the actual URL
  const signInEndpoint = `${BACKEND_URL}/api/signin`; // Replace with the actual URL

  // Sign up post api
  const formHandle = async () => {
    const data = { userName, password, email };

    try {
      // Replace this with actual Axios call to the sign-up endpoint
      const response = await axios.post(signUpEndpoint, data);
      console.log(data);
      console.log("Data Submitted Successfully");
    } catch (err) {
      console.error(err);
    }
  };

  // Sign in post api
  const formSigninHandle = async () => {
    const data = { userName, password };

    try {
      // Replace this with actual Axios call to the sign-in endpoint
      const response = await axios.post(signInEndpoint, data);
      console.log("Authentication Successful");
      navigate("/home");
    } catch (err) {
      console.error(err);
      setErrorMessage("Invalid username or password");
    }
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("auth_container");

    signUpButton.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );
    signInButton.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );

    return () => {
      // Clean up the event listeners when the component unmounts
      signUpButton.removeEventListener("click", () =>
        container.classList.add("right-panel-active")
      );
      signInButton.removeEventListener("click", () =>
        container.classList.remove("right-panel-active")
      );
    };
  }, []);

  const handleGoogleLogin = () => {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  };

  useEffect(() => {
    const getUser = () => {
      fetch(`${BACKEND_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((res) => {
          setUser(res.user);
          console.log(res.user);
          dispatch(loginUserName(res.user.userName));
          dispatch(loginUserEmail(res.user.email));
          dispatch(loginUserImage(res.user.userProfile));
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div className="bg-white d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
      <div className="auth_container" id="auth_container">
        <div className="login_container form-container sign-up-container">
          <form action="#">
            <h1 className="heading-1">Create Account</h1>
            <span className="span_container">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button_class" type="button" onClick={formHandle}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1 className="heading-1 ">Sign in</h1>
            <div className="social-container">
              <Button
                variant="white"
                onClick={handleGoogleLogin}
                className=" border border-danger d-flex justify-content-center align-items-center"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="px-3">Google</span>
              </Button>
            </div>
            <span className="span_container">or use your account</span>
            <input
              type="userName"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="anchor" href="#">
              Forgot your password?
            </a>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button
              className="button_class"
              type="button"
              onClick={formSigninHandle}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="heading-1">Welcome Back!</h1>
              <p className="para">
                To keep connected with us please login with your personal info
              </p>
              <button className="button_class ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="heading-1">Hello, Friend!</h1>
              <p className="para">
                Enter your personal details and start the journey with us
              </p>
              <button className="button_class ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
