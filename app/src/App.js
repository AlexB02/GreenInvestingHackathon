import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './components/Login'



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
      <Login/>
    </div>
  </div>
  );
}

function LogInPage() {
  return <h2>Login Page</h2>;
}