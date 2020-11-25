import React from "react";
import { Link } from "react-router-dom";

export interface INavProps {}

export const Nav: React.FC<INavProps> = () => {
    return (
        <ul>
            <li>
                <Link to="/Laba1">Laba 1</Link>
            </li>
            <li>
                <Link to="/Laba2">Laba 2</Link>
            </li>
            <li>
                <Link to="/Laba3">Laba 3</Link>
            </li>
            <li>
                <Link to="/Laba4">Laba 4</Link>
            </li>
            <li>
                <Link to="/Laba5">Laba 5</Link>
            </li>
            <li>
                <Link to="/Laba6">Laba 6</Link>
            </li>
            <li>
                <Link to="/Laba7">Laba 7</Link>
            </li>
            <li>
                <Link to="/Laba8">Laba 8</Link>
            </li>
            <li>
                <Link to="/Laba9">Laba 9</Link>
            </li>
            <li>
                <Link to="/Laba10">Laba 10</Link>
            </li>
            <li>
                <Link to="/Laba11">Laba 11</Link>
            </li>
            <li>
                <Link to="/Laba12">Laba 12</Link>
            </li>
            {/* <li>
                <Link to="/Laba13">Laba 13</Link>
            </li>
            <li>
                <Link to="/Laba14">Laba 14</Link>
            </li>
            <li>
                <Link to="/Laba15">Laba 15</Link>
            </li>
            <li>
                <Link to="/Laba16">Laba 16</Link>
            </li>
            <li>
                <Link to="/Laba17">Laba 17</Link>
            </li>
            <li>
                <Link to="/Laba18">Laba 18</Link>
            </li>
            <li>
                <Link to="/Laba19">Laba 19</Link>
            </li>
            <li>
                <Link to="/Laba20">Laba 20</Link>
            </li>
            <li>
                <Link to="/Laba21">Laba 21</Link>
            </li> */}
        </ul>
    );
};
