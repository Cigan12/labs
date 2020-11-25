import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface Ilaba7Props {}

interface good {
    article: string;
    name: string;
}

interface member {
    id: string;
    name: string;
}

export const Laba7: React.FC<Ilaba7Props> = () => {
    const [goodsList, setGoodsList] = useState<Array<good> | []>([]);

    const [groupList, setGroupList] = useState<Array<member> | []>([]);

    const [goodName, setGoodName] = useState("");

    const [memberName, setMemberName] = useState("");

    const addGood = async () => {
        try {
            const r = await API.post("laba7/addGood", { name: goodName });
            if (r) setGoodsList((prev) => [...prev, r.data]);
        } catch (error) {
            console.log("Cigan-log: addGood -> error", error);
        }
    };

    const addMember = async () => {
        try {
            if (memberName) {
                const r = await API.post("laba7/addMember", {
                    name: memberName,
                });
                if (r) {
                    const replArr = [...groupList, r.data];
                    replArr.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    });
                    setGroupList(replArr);
                }
            } else {
                alert("do not use empty strings");
            }
        } catch (error) {
            console.log("Cigan-log: addGood -> error", error);
        }
    };

    const removeItem = async (type: "good" | "member", id: string) => {
        try {
            const r = await API.delete(`laba7/delete/${type}/${id}`);
            if (r) {
                if (type === "good") {
                    const index = goodsList.findIndex(
                        (item) => item.article === id
                    );
                    const arrRepl = goodsList;
                    arrRepl.splice(index, 1);

                    setGoodsList([...arrRepl]);
                }
                if (type === "member") {
                    const index = groupList.findIndex((item) => item.id === id);
                    const arrRepl = [...groupList];
                    arrRepl.splice(index, 1);

                    setGroupList(arrRepl);
                }
            }
        } catch (error) {
            console.log("Cigan-log: removeItem -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h4>laba 7</h4>
            <h5>goods list</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="Name of good"
                    value={goodName}
                    onChange={(e) => setGoodName(e.target.value)}
                />
                <button type="submit" onClick={() => addGood()}>
                    add good
                </button>
            </form>
            <ul>
                {!goodsList ||
                    (goodsList as Array<good>).map((item) => (
                        <li key={item.article}>
                            <h4>{item.name}</h4>
                            <button
                                onClick={() => removeItem("good", item.article)}
                            >
                                delete good
                            </button>
                        </li>
                    ))}
            </ul>
            <h5>Group list</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="name"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                />
                <button type="submit" onClick={() => addMember()}>
                    Add group member
                </button>
            </form>
            <ul>
                {!groupList ||
                    (groupList as Array<member>).map((item) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <button
                                onClick={() => removeItem("member", item.id)}
                            >
                                delete member
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
