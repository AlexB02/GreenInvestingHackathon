import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


var firebase = require('firebase');
var firebaseui = require('firebaseui');

const firebaseConfig = {
  apiKey: "AIzaSyBMY-qC5lI8ZCW5MoJcj--D2ZyswABHkII",
  authDomain: "greeninvestment-9d42a.firebaseapp.com",
  databaseURL: "https://greeninvestment-9d42a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "greeninvestment-9d42a",
  storageBucket: "greeninvestment-9d42a.appspot.com",
  messagingSenderId: "952304435921",
  appId: "1:952304435921:web:f8da6e6e19290e034f7bf0",
  measurementId: "G-ELHN28XH1B"
};

firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUpPage/>
        </Route>
        <Route path="/logIn">
          <LogInPage />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

function HomePage() {
  return (
  <div>
    <ul>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
      <li>
        <Link to="/logIn">Log In</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>
  );
}

function SignUpPage() {
  return (
  <div>
    <h2>
      signup page
    </h2>
    <div>
      {/* <Login/> */}
    </div>
  </div>
  );
}

function LogInPage() {
  return <h2>Login Page</h2>;
}