import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Laba1 } from "./pages/Laba1/Laba1";
import { Nav } from "./pages/Nav";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Nav />
                </Route>
                <Route path="/Laba1">
                    <Laba1 />
                </Route>
            </Switch>
        </Router>
    );
};
