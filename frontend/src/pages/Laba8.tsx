import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba8Props {}

interface good {
    id: string;
    name: string;
}

export const Laba8: React.FC<ILaba8Props> = () => {
    const [multilineText, setMultilineText] = useState("");
    const [password, setPassword] = useState("");
    const [goods, setgoods] = useState<Array<good>>([]);
    const [searchGood, setsearchGood] = useState("");

    const [textForReplace, setTextForReplace] = useState("");
    const [replacer, setReplacer] = useState("");
    const [whatReplace, setWhatReplace] = useState("");

    const [requestedGoods, setRequestedGoods] = useState<Array<good>>([]);
    const [requestString, setRequestString] = useState("");

    React.useEffect(() => {
        (async () => {
            try {
                const r = await API.get("/laba8/goods");
                setgoods(r.data);
            } catch (error) {
                console.log("Cigan-log: error", error);
            }
        })();
    }, []);

    const filteredGoods = () => {
        const re = new RegExp(searchGood);
        return goods.filter((item) => {
            return re.test(item.name);
        });
    };

    const replace = () => {
        const re = new RegExp(whatReplace);
        setTextForReplace(textForReplace.replace(re, replacer));
    };

    const request = () => {
        setRequestString(
            requestString.trim().replace(/((?![a-zA-Zа-яА-Я]|\s).)/gi, "")
        );

        const re = new RegExp(requestString, "i");

        setRequestedGoods(
            goods.filter((item) => {
                return re.test(item.name);
            })
        );
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <h4>laba 8</h4>
            <h5>sign up</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (password.length < 5) alert("Password is too short ");
                    else alert("Success");
                }}
            >
                <input type="text" placeholder="name" />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">sign up</button>
            </form>
            <h4>String in the name of good</h4>
            <input
                type="text"
                placeholder="search"
                value={searchGood}
                onChange={(e) => setsearchGood(e.target.value)}
            />
            <h5>Goods:</h5>
            <ol>
                {!filteredGoods() ||
                    filteredGoods().map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
            </ol>
            <h4>find and replace</h4>
            <textarea
                value={textForReplace}
                onChange={(e) => setTextForReplace(e.target.value)}
            />
            <p style={{ whiteSpace: "pre-line" }}>{textForReplace}</p>
            <input
                type="text"
                placeholder="what replace"
                value={whatReplace}
                onChange={(e) => setWhatReplace(e.target.value)}
            />
            <input
                type="text"
                placeholder="for what replace"
                value={replacer}
                onChange={(e) => setReplacer(e.target.value)}
            />
            <button onClick={() => replace()}>Replace</button>
            <h4>Multiline text</h4>
            <textarea
                value={multilineText}
                onChange={(e) => setMultilineText(e.target.value)}
            ></textarea>
            <h5>text:</h5>
            <p style={{ whiteSpace: "pre-line" }}>{multilineText}</p>

            <h4>request goods</h4>
            <input
                type="text"
                placeholder="query"
                value={requestString}
                onChange={(e) => setRequestString(e.target.value)}
            />
            <button onClick={() => request()}>request</button>

            <h5>Goods:</h5>
            <ol>
                {!requestedGoods ||
                    requestedGoods.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
            </ol>
        </div>
    );
};
