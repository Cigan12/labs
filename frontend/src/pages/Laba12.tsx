import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba12Props {}

export const Laba12: React.FC<ILaba12Props> = () => {
    const [signUpform, setSignUpform] = useState({
        login: "",
        password: "",
    });

    const [signInForm, setSignInForm] = useState({
        login: "",
        password: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    React.useEffect(() => {
        if (localStorage.getItem("token")) setIsLoggedIn(true);
    }, []);

    const signUp = async () => {
        try {
            const r = await API.post("laba12/signup", signUpform);
            if (r) {
                alert("success");
            }
        } catch (error) {
            console.log("Cigan-log: signUp -> error", error);
        }
    };

    const signIn = async () => {
        try {
            const r = await API.post("laba12/signin", signInForm);
            if (r.data.result) {
                localStorage.setItem("token", r.data.token);
                localStorage.setItem("login", signInForm.login);
                alert("Success");
                setIsLoggedIn(true);
            } else {
                alert("something went wrong");
            }
        } catch (error) {
            console.log("Cigan-log: signUp -> error", error);
        }
    };

    const logout = () => {
        localStorage.setItem("token", "");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <h4>Sign UP</h4>
            {!isLoggedIn || <p>Hello, {localStorage.getItem("login")}</p>}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    signUp();
                }}
            >
                <input
                    type="text"
                    placeholder="login"
                    value={signUpform.login}
                    onChange={(e) =>
                        setSignUpform({ ...signUpform, login: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="passwrod"
                    value={signUpform.password}
                    onChange={(e) =>
                        setSignUpform({
                            ...signUpform,
                            password: e.target.value,
                        })
                    }
                />
                <button type="submit">signUp</button>
            </form>

            <h4>Sign In</h4>

            {isLoggedIn || (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        signIn();
                    }}
                >
                    <input
                        type="text"
                        placeholder="login"
                        value={signInForm.login}
                        onChange={(e) =>
                            setSignInForm({
                                ...signInForm,
                                login: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="password"
                        value={signInForm.password}
                        onChange={(e) =>
                            setSignInForm({
                                ...signInForm,
                                password: e.target.value,
                            })
                        }
                    />
                    <button type="submit">signIn</button>
                </form>
            )}
            {!isLoggedIn || <button onClick={() => logout()}>logout</button>}
        </div>
    );
};
