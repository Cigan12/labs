import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../utils/api";

export interface IRegistrationProps {}

export const Registration: React.FC<IRegistrationProps> = () => {
    const [login, setlogin] = useState("");

    const submit = async () => {
        if (login) {
            try {
                const r = await API.post("laba1/register", {
                    login,
                });
                if (r.data === "exist") alert("user already exist");
                else {
                    localStorage.setItem("token", r.data);
                    alert("success");
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
            <h4>Registration</h4>
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
                <button type="submit">register</button>
            </form>
        </div>
    );
};
