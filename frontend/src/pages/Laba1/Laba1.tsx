import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IResponse } from "../../types";
import { API } from "../../utils/api";
import "./Laba1.scss";

export interface ILaba1Props {}

interface ILaba1Response {
    name: string;
    sex: "" | "male" | "female";
    age: string;
    postIndex: string;
    city: string;
    street: string;
    apartment: string;
    room: string;
    categories: Array<string>;
}

export const Laba1: React.FC<ILaba1Props> = () => {
    const [name, setname] = useState("");
    const [sex, setsex] = useState("");
    const [age, setage] = useState("");
    const [postIndex, setpostIndex] = useState("");
    const [city, setcity] = useState("");
    const [street, setStreet] = useState("");
    const [apartment, setApartment] = useState("");
    const [room, setRoom] = useState("");
    const [categories, setCategories] = useState<Array<String>>([]);
    const [response, setresponse] = useState<ILaba1Response>({
        name: "",
        age: "",
        sex: "",
        postIndex: "",
        city: "",
        street: "",
        apartment: "",
        categories: [""],
        room: "",
    });

    const [fileInner, setfileInner] = useState("");

    const [file, setfile] = useState("");

    const submitForm = async () => {
        try {
            const r: IResponse<ILaba1Response> = await API.post("laba1", {
                name,
                sex,
                age,
                postIndex,
                city,
                street,
                apartment,
                room,
                categories,
            });
            setresponse(r.data);
        } catch (error) {
            console.log("Cigan-log: submitForm -> error", error);
        }
    };

    const writeInFile = async () => {
        try {
            const r: IResponse<string> = await API.post("laba1/writeInFile", {
                fileInner,
            });

            setfile(r.data);
        } catch (error) {
            console.log("Cigan-log: writeInFile -> error", error);
        }
    };

    return (
        <div>
            <div className="links">
                <Link to="/">На главную</Link>
                <Link to="/Laba1/register">Регистрация</Link>
                <Link to="/Laba1/login">Логин</Link>
            </div>
            <h4>Laba 1</h4>

            <form
                className="laba1-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    submitForm();
                }}
            >
                <input
                    type="text"
                    placeholder="ФИО"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <select value={sex} onChange={(e) => setsex(e.target.value)}>
                    <option defaultValue="male">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
                <input
                    type="text"
                    placeholder="Возраст"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Индекс"
                    value={postIndex}
                    onChange={(e) => setpostIndex(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Город"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Улица"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Дом"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Квартира"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />

                <div className="checkbox-block">
                    <input
                        id="good1"
                        type="checkbox"
                        name="goods"
                        value="Одежда"
                        onChange={(e) => {
                            if (categories.includes(e.target.value as never)) {
                                setCategories(
                                    categories.filter(
                                        (item) => item !== e.target.value
                                    )
                                );
                            } else {
                                setCategories([
                                    ...categories,
                                    e.target.value.toString(),
                                ]);
                            }
                        }}
                    />
                    <label htmlFor="good1">Одежда</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good2"
                        type="checkbox"
                        name="goods"
                        value="Косметика"
                        onChange={(e) => {
                            if (categories.includes(e.target.value as never)) {
                                setCategories(
                                    categories.filter(
                                        (item) => item !== e.target.value
                                    )
                                );
                            } else {
                                setCategories([
                                    ...categories,
                                    e.target.value.toString(),
                                ]);
                            }
                        }}
                    />
                    <label htmlFor="good2">Косметика</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good3"
                        type="checkbox"
                        name="goods"
                        value="Бытовая техника"
                        onChange={(e) => {
                            if (categories.includes(e.target.value as never)) {
                                setCategories(
                                    categories.filter(
                                        (item) => item !== e.target.value
                                    )
                                );
                            } else {
                                setCategories([
                                    ...categories,
                                    e.target.value.toString(),
                                ]);
                            }
                        }}
                    />
                    <label htmlFor="good3">Бытовая техника</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good4"
                        type="checkbox"
                        name="goods"
                        value="Сертификаты"
                        onChange={(e) => {
                            if (categories.includes(e.target.value as never)) {
                                setCategories(
                                    categories.filter(
                                        (item) => item !== e.target.value
                                    )
                                );
                            } else {
                                setCategories([
                                    ...categories,
                                    e.target.value.toString(),
                                ]);
                            }
                        }}
                    />
                    <label htmlFor="good4">Сертификаты</label>
                </div>
                <button type="submit">Отправить</button>
            </form>
            <div className="response">
                <p>{response.name}</p>
                <p>{response.sex}</p>
                <p>{response.age}</p>
                <p>{response.postIndex}</p>
                <p>{response.city}</p>
                <p>{response.street}</p>
                <p>{response.apartment}</p>
                <p>{response.room}</p>
                {response.categories.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })}
            </div>

            <h5>Запись в файл</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    writeInFile();
                }}
            >
                <input
                    type="text"
                    placeholder="что записать в файл"
                    value={fileInner}
                    onChange={(e) => setfileInner(e.target.value)}
                />
                <button type="submit">Записать</button>
            </form>

            <h6>
                Содержимое файла{" "}
                <a href="http://localhost:3001/testfile">
                    http://localhost:3001/testfile
                </a>
            </h6>
            <div>{file}</div>
        </div>
    );
};
