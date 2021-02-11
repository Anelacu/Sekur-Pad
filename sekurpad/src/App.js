import StartPage from "./StartPage";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from "react-router";
import KeynumPage from "./KeynumPage";
import InstructionPage from "./InstructionPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/start" exact component={StartPage}/>
                <Route path="/keynum/:pin" exact component={KeynumPage}/>
                <Route path="/" exact component={InstructionPage}/>
            </Switch>
        </Router>
    );
}

export default App;
