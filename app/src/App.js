import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/user">
                    <p>Page</p>
                </Route>
                <Route path="/">
                    <div className="App">
                        <header className="App-header">
                            IC Hello World!
                            <Link to="/user">User page</Link>
                        </header>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
