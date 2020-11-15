import React from "react";
import "./Laba1.scss";

export interface ILaba1Props {}

export const Laba1: React.FC<ILaba1Props> = () => {
    return (
        <div>
            <h4>Laba 1</h4>
            <form className="laba1-container">
                <input type="text" placeholder="ФИО" />
                <select>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
                <input type="text" placeholder="Возраст" />
                <input type="text" placeholder="Индекс" />
                <input type="text" placeholder="Город" />
                <input type="text" placeholder="Улица" />
                <input type="text" placeholder="Дом" />
                <input type="text" placeholder="Квартира" />
                <div className="checkbox-block">
                    <input
                        id="good1"
                        type="checkbox"
                        name="goods"
                        value="Одежда"
                    />
                    <label htmlFor="good1">Одежда</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good2"
                        type="checkbox"
                        name="goods"
                        value="Одежда"
                    />
                    <label htmlFor="good2">Косметика</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good3"
                        type="checkbox"
                        name="goods"
                        value="Одежда"
                    />
                    <label htmlFor="good3">Бытовая техника</label>
                </div>
                <div className="checkbox-block">
                    <input
                        id="good4"
                        type="checkbox"
                        name="goods"
                        value="Одежда"
                    />
                    <label htmlFor="good4">Сертификаты</label>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};
