import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import "./assets/style.css";

function App() {
    return (

        <Router>
            <div>
                <Navbar />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create" component={Create} />
                <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
            
    );
}

export default App;