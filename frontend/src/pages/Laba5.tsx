import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba5Props {}

export const Laba5: React.FC<ILaba5Props> = () => {
    const [strings, setstrings] = useState({
        first: "",
        second: "",
    });

    const [max, setmax] = useState("");

    const [response, setresponse] = useState({
        strings: "",
        max: "",
    });

    const [currentMax, setCurrentMax] = useState(0);

    const submitStrings = async () => {
        try {
            const r = await API.post("/laba5/strings", strings);
            if (r) setresponse((prev) => ({ ...prev, strings: r.data }));
        } catch (error) {
            console.log("Cigan-log: submitStrings -> error", error);
        }
    };

    const submitMax = async () => {
        try {
            const r = await API.post("/laba5/max", {
                max: max,
                maxValue: currentMax,
            });
            if (r) {
                setresponse((prev) => ({ ...prev, max: r.data.result + "" }));
                setCurrentMax(r.data.maxValue);
            }
        } catch (error) {
            console.log("Cigan-log: submitMax -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">на главную</Link>
            <h4>Лаба 5</h4>
            <h5>Конкатенация строк</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitStrings();
                }}
            >
                <input
                    type="text"
                    placeholder="1-я строка"
                    value={strings.first}
                    onChange={(e) =>
                        setstrings((prev) => ({
                            ...prev,
                            first: e.target.value,
                        }))
                    }
                />
                <input
                    type="text"
                    placeholder="2-я строка"
                    value={strings.second}
                    onChange={(e) =>
                        setstrings((prev) => ({
                            ...prev,
                            second: e.target.value,
                        }))
                    }
                />
                <button type="submit">Отправить</button>
                <p>{response.strings}</p>
            </form>
            <h5>Set max value</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitMax();
                }}
            >
                <h5>write numbers separated by comma</h5>
                <input
                    type="text"
                    placeholder="Max value"
                    value={max}
                    onChange={(e) => setmax(e.target.value)}
                />
                <button type="submit">Submit</button>
                <p>{response.max}</p>
            </form>
        </div>
    );
};
