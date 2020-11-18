import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba3Props {}

export const Laba3: React.FC<ILaba3Props> = () => {
    const [currentType, setcurrentType] = useState("number");
    const [sendType, setsendType] = useState("number");
    const [value, setvalue] = useState<any>("");
    const [response, setresponse] = useState({
        typeBefore: "",
        typeAfter: "",
        newValue: "",
    });

    const submit = async () => {
        switch (currentType) {
            case "number":
                setvalue(+value);
                break;
            case "string":
                setvalue(value + "");
                break;
            case "boolean":
                setvalue(Boolean(value));
                break;
            default:
                break;
        }
        try {
            const r = await API.post("laba3", {
                currentType,
                sendType,
                value,
            });
            setresponse(r.data);
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">На главную</Link>
            <h3>Лаба 3</h3>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <select onChange={(e) => setcurrentType(e.target.value)}>
                    <option defaultValue="number">Выберите тип</option>
                    <option value="number">integer</option>
                    <option value="string">string</option>
                    <option value="boolean">boolean</option>
                </select>
                <input
                    type="text"
                    placeholder="Отправляемое значение"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                />
                <h5>Привести к типу</h5>
                <select onChange={(e) => setsendType(e.target.value)}>
                    <option defaultValue="number">Выберите тип</option>
                    <option value="number">integer</option>
                    <option value="string">string</option>
                    <option value="boolean">boolean</option>
                </select>
                <button type="submit">Отправить</button>
            </form>
            <p>Тип до {response.typeBefore}</p>
            <p>Тип после {response.typeAfter}</p>
            <p>Новое значение {response.newValue + ""}</p>
        </div>
    );
};
