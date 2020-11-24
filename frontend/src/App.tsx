import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Laba1 } from "./pages/Laba1/Laba1";
import { Login } from "./pages/Laba1/Login";
import { Registration } from "./pages/Laba1/Registration";
import { Laba10 } from "./pages/Laba10/Laba10";
import { Route1 } from "./pages/Laba10/route1";
import { Route2 } from "./pages/Laba10/route2";
import { SessionInfo } from "./pages/Laba10/SessionInfo";
import { Laba11 } from "./pages/Laba11";
import { Laba12 } from "./pages/Laba12";
import { Laba2 } from "./pages/Laba2";
import { Laba3 } from "./pages/Laba3";
import { Laba4 } from "./pages/Laba4";
import { Laba5 } from "./pages/Laba5";
import { Laba6 } from "./pages/Laba6";
import { Laba7 } from "./pages/Laba7";
import { Laba8 } from "./pages/Laba8";
import { Laba9 } from "./pages/Laba9";
import { Nav } from "./pages/Nav";
import { IStoreState } from "./store";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
    const state = useSelector((state: IStoreState) => {
        return state.Laba10Reducer;
    });

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
                <Route path="/Laba2">
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
                <Route path="/Laba10">
                    <SessionInfo {...state} />
                    <Route path="/Laba10" exact>
                        <Laba10 />
                    </Route>
                    <Route path="/Laba10/route1">
                        <Route1 />
                    </Route>
                    <Route path="/Laba10/route2">
                        <Route2 />
                    </Route>
                </Route>
                <Route path="/Laba11">
                    <Laba11 />
                </Route>
                <Route path="/Laba12">
                    <Laba12 />
                </Route>
            </Switch>
        </Router>
    );
};
