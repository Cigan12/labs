import React from "react";
import { Link } from "react-router-dom";

export interface Iroute2Props {}

export const Route2: React.FC<Iroute2Props> = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Laba10">back to main</Link>
        </div>
    );
};
