import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IStoreState } from "../../store";
import { API } from "../../utils/api";

export interface ILaba10Props {}

export const Laba10: React.FC<ILaba10Props> = () => {
    const state = useSelector((state: IStoreState) => state.Laba10Reducer);
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const loginSubmit = async () => {
        try {
            if (login) {
                const r = await API.post("laba10/login", { login });
                if (r) {
                    dispatch({ type: "DATA-CHANGED", payload: r.data });
                }
            } else {
                alert("login should not be empty");
            }
        } catch (error) {
            console.log("Cigan-log: login -> error", error);
        }
    };

    const addToVisited = async (name: string, previousPage: string) => {
        console.log("Cigan-log: addToVisited -> previousPage", previousPage);
        try {
            const r = await API.post("laba10/visit", {
                state,
                name,
                previousPage,
            });
            if (r) {
                dispatch({ type: "DATA-CHANGED", payload: r.data });
            }
        } catch (error) {
            console.log("Cigan-log: addToVisited -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            {!state.login || (
                <div>
                    <Link
                        to="/Laba10/route1"
                        onClick={() =>
                            addToVisited("/Laba10/route1", "/Laba10")
                        }
                    >
                        Route 1
                    </Link>
                    <br />
                    <Link
                        to="/Laba10/route2"
                        onClick={() =>
                            addToVisited("/Laba10/route2", "/Laba10")
                        }
                    >
                        Route 2
                    </Link>
                </div>
            )}
            <h4>laba 10</h4>
            {!!state.login || (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        loginSubmit();
                    }}
                >
                    <input
                        type="text"
                        placeholder="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <button type="submit">login</button>
                </form>
            )}
        </div>
    );
};
