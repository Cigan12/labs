import React from "react";
import { Link } from "react-router-dom";

export interface ILaba10Props {}

export const Laba10: React.FC<ILaba10Props> = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <h4>laba 10</h4>
        </div>
    );
};
