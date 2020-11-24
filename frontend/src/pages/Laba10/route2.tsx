import React from "react";
import { Link } from "react-router-dom";

export interface Iroute2Props {}

export const Route2: React.FC<Iroute2Props> = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Laba10">back to main</Link>
            <h4>ROUTE 2</h4>
        </div>
    );
};
