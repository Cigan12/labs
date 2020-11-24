import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba6Props {}

export const Laba6: React.FC<ILaba6Props> = () => {
    const [filesContains, setFilesContains] = useState({
        file1: "",
        file2: [],
    });

    const [inputs, setInputs] = useState({
        first: "",
        second: "",
    });

    useEffect(() => {
        (async () => {
            const r = await API.post("/laba6/read", { filename: "a.txt" });
            const r2 = await API.post("/laba6/read", { filename: "b.txt" });
            setFilesContains({
                file1: r.data.file,
                file2: r2.data.file.split("\n"),
            });
        })();
    }, []);

    const submit1 = async () => {
        try {
            const r = await API.post("/laba6/file1", { text: inputs.first });
            if (r)
                setFilesContains((prev) => ({ ...prev, file1: r.data.file }));
        } catch (error) {
            console.log("Cigan-log: error", error);
        }
    };

    const submit2 = async () => {
        try {
            const r = await API.post("/laba6/file2", { text: inputs.second });
            if (r)
                setFilesContains((prev) => ({
                    ...prev,
                    file2: r.data.file.split("\n"),
                }));
        } catch (error) {
            console.log("Cigan-log: error", error);
        }
    };

    return (
        <div>
            <Link to="/">To home</Link>
            <h4>Laba 6</h4>
            <h5>Write to file a.txt</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit1();
                }}
            >
                <input
                    type="text"
                    value={inputs.first}
                    onChange={(e) =>
                        setInputs((prev) => ({
                            ...prev,
                            first: e.target.value,
                        }))
                    }
                />
                <button type="submit">submit</button>
            </form>
            <h5>File a.txt contains: </h5>
            <p>{filesContains.file1}</p>
            <h5>Add to file b.txt</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit2();
                }}
            >
                <input
                    type="text"
                    value={inputs.second}
                    onChange={(e) =>
                        setInputs((prev) => ({
                            ...prev,
                            second: e.target.value,
                        }))
                    }
                />
                <button type="submit">submit</button>
            </form>
            <h5>file b.txt contains: </h5>
            <ol>
                {filesContains.file2.map((item, index) => (
                    <li key={item + index}>{item}</li>
                ))}
            </ol>
        </div>
    );
};
