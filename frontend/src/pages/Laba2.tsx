import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IResponse } from "../types";
import { API } from "../utils/api";

export interface ILaba2Props {}

export const Laba2: React.FC<ILaba2Props> = () => {
    const [number, setnumber] = useState(0);
    const [response, setresponse] = useState("");

    const submit = async () => {
        try {
            const r: IResponse<string> = await API.post("laba2/getTableDvide", {
                number,
            });
            setresponse(r.data);
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">На главную</Link>
            <h3>Лаба 2</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <input
                    type="number"
                    placeholder="Введите число"
                    value={number}
                    onChange={(e) => setnumber(+e.target.value)}
                />

                <button type="submit">отправить</button>
            </form>

            <h3>Ответ:</h3>

            <p>{response}</p>
        </div>
    );
};
