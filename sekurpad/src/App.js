import StartPage from "./StartPage";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router";
import KeynumPage from "./KeynumPage";
import EndPage from "./EndPage";
import InstructionPage from "./InstructionPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/start/:stage" exact component={StartPage} />
                <Route path="/keynum/:stage/pin=:pin" exact component={KeynumPage} />
                <Route path="/" exact component={InstructionPage} />
                <Route path="/end" exact component={EndPage} />
            </Switch>
        </Router>
    );
}

export default App;
