import React, {useState} from "react";
import "./Login.css";
import AmazonLogo from "./Images/amazon_logo.jpg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { db } from "./firebase";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
          console.log(auth);
          if(auth){
            history.push('/');
          }
        })
        .catch(error => alert(error.message))
    // some fansy firebase login things !!!!!!
  };

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          // it succesfully created user with Email and Password
          console.log(auth);
          if(auth){
            history.push('/');
          }
        })
        .catch(error => alert(error.message))

    //  do some fansy register !!!!!!
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to AMAZON DEMO CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interest
          based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create Your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
