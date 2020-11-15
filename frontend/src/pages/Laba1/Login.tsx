import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../utils/api";

export interface ILoginProps {}

export const Login: React.FC<ILoginProps> = () => {
    const [login, setlogin] = useState("");

    const submit = async () => {
        if (login) {
            try {
                const token = localStorage.getItem("token");
                const r = await API.post("laba1/login", {
                    login,
                    token,
                });
                if (r.data === "success") alert("success");
                else {
                    alert("Пройдите регистрацию");
                }
            } catch (error) {
                console.log("Cigan-log: submit -> error", error);
            }
        } else {
            alert("Login is empty");
        }
    };

    return (
        <div>
            <div className="links">
                <Link to="/">На главную</Link>
                <Link to="/Laba1">Назад</Link>
            </div>
            <h4>Login</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <input
                    type="text"
                    placeholder="login"
                    value={login}
                    onChange={(e) => setlogin(e.target.value)}
                />
                <button type="submit">login</button>
            </form>
        </div>
    );
};
