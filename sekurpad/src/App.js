import ShowPinPage from "./ShowPinPage";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from "react-router";
import EnterPinPage from "./EnterPinPage";
import EndPage from "./EndPage";
import InstructionPage from "./InstructionPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/show_pin/:stage" exact component={ShowPinPage} />
                <Route path="/enter_pin/:stage/pin=:pin" exact component={EnterPinPage} />
                <Route path="/" exact component={InstructionPage} />
                <Route path="/end" exact component={EndPage} />
            </Switch>
        </Router>
    );
}

export default App;
