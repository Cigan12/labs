import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Laba1 } from "./pages/Laba1/Laba1";
import { Login } from "./pages/Laba1/Login";
import { Registration } from "./pages/Laba1/Registration";
import { Laba2 } from "./pages/Laba2";
import { Nav } from "./pages/Nav";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Nav />
                </Route>
                <Route path="/Laba1" exact>
                    <Laba1 />
                </Route>
                <Route path="/Laba1/login">
                    <Login />
                </Route>
                <Route path="/Laba1/register">
                    <Registration />
                </Route>
                <Route path="/Laba2" exact>
                    <Laba2 />
                </Route>
            </Switch>
        </Router>
    );
};
