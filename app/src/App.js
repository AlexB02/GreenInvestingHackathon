import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import firebase from "firebase";

import {Button, Card} from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


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

export default function App() {
    return (
            <Router>

                <Switch>
                    <Route path="/signUp">
                        <SignUpPage/>
                    </Route>
                    <Route path="/logIn">
                        <LogInPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/dashboard">
                        <DashboardPage/>
                    </Route>
                    <Route path="/addStocks">
                        <AddStocksPage/>
                    </Route>
                </Switch>
            </Router>
    );
}


function DashboardPage() {
    return (
        <Card>

        </Card>
    );
}

function AddStocksPage() {

}


function HomePage() {
    return (
        <div>
            <h1>WELCOME TO KINDER</h1>
            <h3>where we are kinder to your wallet and the environment</h3>
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
                {/* {googleSignInPopup(googleProvider())} */}
            </div>
        </div>
    );
}

function LogInPage() {
    return <h2>Login Page</h2>;
}

function googleProvider() {
    // [START auth_google_provider_create]
    var provider = new firebase.auth.GoogleAuthProvider();
    // [END auth_google_provider_create]

    // [START auth_google_provider_scopes]
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // [END auth_google_provider_scopes]

    // [START auth_google_provider_params]
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    // [END auth_google_provider_params]
    return provider;
}

function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    // [END auth_google_signin_popup]
}