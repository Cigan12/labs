import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba11Props {}

interface IGood {
    id: number;
    title: string;
    price: string;
}

export const Laba11: React.FC<ILaba11Props> = () => {
    const [goodForm, setGoodForm] = useState({
        name: "",
        price: "",
    });

    const [goods, setGoods] = useState<Array<IGood>>([]);

    const [idForFind, setidForFind] = useState("");

    const [goodItem, setGoodItem] = useState<IGood>({
        id: 0,
        title: "",
        price: "",
    });

    React.useEffect(() => {
        (async () => {
            try {
                const r = await API.get("laba11/goods");
                if (r) setGoods(r.data);
            } catch (error) {
                console.log("Cigan-log: error", error);
            }
        })();
    }, []);

    const addGood = async () => {
        try {
            const r = await API.post("laba11/addGood", goodForm);
            if (r) setGoods([...goods, r.data]);
        } catch (error) {
            console.log("Cigan-log: addGood -> error", error);
        }
    };

    const removeGood = async (id: number) => {
        try {
            const r = await API.delete(`laba11/deleteGood/${id}`);

            if (r.data.affected > 0) {
                const repl = [...goods];

                repl.splice(
                    repl.findIndex((item) => item.id === id),
                    1
                );
                setGoods(repl);
            }
        } catch (error) {
            console.log("Cigan-log: removeGood -> error", error);
        }
    };

    const findById = async () => {
        try {
            const r = await API.get(`laba11/byId/${idForFind}`);
            if (r) setGoodItem(r.data);
        } catch (error) {
            console.log("Cigan-log: findById -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h4>Laba 11</h4>
            <h5>add good: </h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addGood();
                }}
            >
                <input
                    type="text"
                    placeholder="name"
                    value={goodForm.name}
                    onChange={(e) =>
                        setGoodForm({ ...goodForm, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="price"
                    value={goodForm.price}
                    onChange={(e) =>
                        setGoodForm({ ...goodForm, price: e.target.value })
                    }
                />
                <button type="submit">add</button>
            </form>
            <ul>
                {!goods ||
                    goods.map((item) => (
                        <li key={item.id}>
                            <p>id: {item.id}</p>
                            <p>title: {item.title}</p>
                            <p>price: {item.price}</p>
                            <button onClick={() => removeGood(item.id)}>
                                delete
                            </button>
                        </li>
                    ))}
            </ul>
            <input
                type="number"
                value={idForFind}
                onChange={(e) => setidForFind(e.target.value)}
            />
            <button onClick={() => findById()}>get by id</button>
            <div>
                <h5>good item</h5>
                <p>title: {goodItem.title}</p>
                <p>price: {goodItem.price}</p>
            </div>
        </div>
    );
};
