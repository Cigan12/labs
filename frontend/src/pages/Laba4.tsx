import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba4Props {}

export const Laba4: React.FC<ILaba4Props> = () => {
    const [coordinates, setcoordinates] = useState({
        x: "",
        y: "",
    });

    const [brickData, setbrickData] = useState({
        hole: {
            x: "",
            y: "",
        },
        brick: {
            x: "",
            y: "",
            z: "",
        },
    });

    const [day, setday] = useState("");

    const [params, setparams] = useState({
        a: "",
        b: "",
        c: "",
    });

    const [choosenNumber, setchoosenNumber] = useState("");

    const [arrayOfNums, setarrayOfNums] = useState("");

    const [responses, setresponses] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
    });

    const submit = async () => {
        try {
            const r = await API.post("laba4/1", coordinates);
            setresponses({ ...responses, 1: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    const submit2 = async () => {
        try {
            const r = await API.post("laba4/2", brickData);
            setresponses({ ...responses, 2: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    const submit3 = async () => {
        try {
            const r = await API.post("laba4/3", { day: day });
            setresponses({ ...responses, 3: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    const submit4 = async () => {
        try {
            const r = await API.post("laba4/4", params);
            setresponses({ ...responses, 4: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    const submit5 = async () => {
        try {
            const r = await API.post("laba4/5", { num: choosenNumber });
            setresponses({ ...responses, 5: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    const submit6 = async () => {
        try {
            const r = await API.post("laba4/6", { arr: arrayOfNums });
            setresponses({ ...responses, 6: r.data });
        } catch (error) {
            console.log("Cigan-log: submit -> error", error);
        }
    };
    return (
        <div>
            <Link to="/">На главную</Link>
            <h4>Laba 4</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <input
                    type="text"
                    placeholder="X"
                    value={coordinates.x}
                    onChange={(e) =>
                        setcoordinates({ ...coordinates, x: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Y"
                    value={coordinates.y}
                    onChange={(e) =>
                        setcoordinates({ ...coordinates, y: e.target.value })
                    }
                />
                <button type="submit">Отправить</button>
            </form>
            <p>Четверть: {responses[1]}</p>
            <h5>Отверстие и кирпич</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit2();
                }}
            >
                <h6>Отверстие </h6>
                <input
                    type="text"
                    placeholder="Высота"
                    value={brickData.hole.x}
                    onChange={(e) =>
                        setbrickData({
                            ...brickData,
                            hole: { x: e.target.value, y: brickData.hole.y },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Длина"
                    value={brickData.hole.y}
                    onChange={(e) =>
                        setbrickData({
                            ...brickData,
                            hole: { x: brickData.hole.x, y: e.target.value },
                        })
                    }
                />

                <h6>Кирпич</h6>
                <input
                    type="text"
                    placeholder="Высота"
                    value={brickData.brick.y}
                    onChange={(e) =>
                        setbrickData({
                            ...brickData,
                            brick: {
                                x: brickData.brick.x,
                                y: e.target.value,
                                z: brickData.brick.z,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Длина"
                    value={brickData.brick.x}
                    onChange={(e) =>
                        setbrickData({
                            ...brickData,
                            brick: {
                                x: e.target.value,
                                y: brickData.brick.y,
                                z: brickData.brick.z,
                            },
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Толщина"
                    value={brickData.brick.z}
                    onChange={(e) =>
                        setbrickData({
                            ...brickData,
                            brick: {
                                x: brickData.brick.x,
                                y: brickData.brick.y,
                                z: e.target.value,
                            },
                        })
                    }
                />
                <button type="submit">Отправить</button>
            </form>
            <h5>Пройдет?: {responses[2]}</h5>
            <h5>День недели</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit3();
                }}
            >
                <input
                    type="text"
                    placeholder="День недели"
                    value={day}
                    onChange={(e) => setday(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <h5>Какой это день: {responses[3]}</h5>
            <h5>Уравнение y=ax2+bx+c</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit4();
                }}
            >
                <input
                    type="text"
                    placeholder="a"
                    value={params.a}
                    onChange={(e) =>
                        setparams({ ...params, a: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="b"
                    value={params.b}
                    onChange={(e) =>
                        setparams({ ...params, b: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="c"
                    value={params.c}
                    onChange={(e) =>
                        setparams({ ...params, c: e.target.value })
                    }
                />
                <button type="submit">Отправить</button>
            </form>
            <h5>Ответ: {responses[4]}</h5>
            <h5>
                Сумма чисел нацело делящихся на 5 и находящихся в диапазоне от 0
                до заданного.
            </h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit5();
                }}
            >
                {" "}
                <input
                    type="text"
                    placeholder="Заданное число"
                    value={choosenNumber}
                    onChange={(e) => setchoosenNumber(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <h5>Сумма чисел: {responses[5]}</h5>
            <h5>Сортировка ряда пузырьковым методом</h5>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submit6();
                }}
            >
                <input
                    type="text"
                    placeholder="Введите числа через запятую 2,3,4,5"
                    value={arrayOfNums}
                    onChange={(e) => setarrayOfNums(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <h5>Результат: {responses[6]}</h5>
        </div>
    );
};
