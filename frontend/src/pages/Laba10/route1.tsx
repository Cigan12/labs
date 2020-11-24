import React from "react";
import { Link } from "react-router-dom";

export interface Iroute1Props {}

export const Route1: React.FC<Iroute1Props> = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Laba10">back to main</Link>
        </div>
    );
};
