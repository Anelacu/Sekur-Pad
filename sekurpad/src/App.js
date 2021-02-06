import StartPage from "./start-page";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from "react-router";
import KeynumPage from "./KeynumPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={StartPage}/>
                <Route path="/keynum" exact component={KeynumPage}/>
            </Switch>
        </Router>
    );
}

export default App;
