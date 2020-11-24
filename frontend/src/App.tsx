import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Laba1 } from "./pages/Laba1/Laba1";
import { Login } from "./pages/Laba1/Login";
import { Registration } from "./pages/Laba1/Registration";
import { Laba2 } from "./pages/Laba2";
import { Laba3 } from "./pages/Laba3";
import { Laba4 } from "./pages/Laba4";
import { Laba5 } from "./pages/Laba5";
import { Laba6 } from "./pages/Laba6";
import { Laba7 } from "./pages/Laba7";
import { Laba8 } from "./pages/Laba8";
import { Laba9 } from "./pages/Laba9";
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
                <Route path="/Laba3">
                    <Laba3 />
                </Route>{" "}
                <Route path="/Laba4">
                    <Laba4 />
                </Route>
                <Route path="/Laba5">
                    <Laba5 />
                </Route>
                <Route path="/Laba6">
                    <Laba6 />
                </Route>
                <Route path="/Laba7">
                    <Laba7 />
                </Route>
                <Route path="/Laba8">
                    <Laba8 />
                </Route>
                <Route path="/Laba9">
                    <Laba9 />
                </Route>
            </Switch>
        </Router>
    );
};
