import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/logIn">
          <LogInPage />
        </Route>
        <Route path="/signUp">
          <SignUpPage/>
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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
      <li>
        <Link to="/logIn">Log In</Link>
      </li>
    </ul>
  </div>
  );
}

function SignUpPage() {
  return <h2>signup page</h2>;
}

function LogInPage() {
  return <h2>Login Page</h2>;
}