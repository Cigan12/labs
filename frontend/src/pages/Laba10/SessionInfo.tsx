import React from "react";

export interface ISessionInfoProps {
    login: string;
    dateOfLogin: Date | null;
    visitedPages: Array<string>;
    visitedPagesDetail: Array<{
        name: string;
        dateOfVisit: Date;
        previosPageAddres: string;
    }>;
}

export const SessionInfo: React.FC<ISessionInfoProps> = ({
    login,
    dateOfLogin,
    visitedPages,
    visitedPagesDetail,
}) => {
    return (
        <div>
            <p>Date of login: {dateOfLogin}</p>
            <p>Login: {login}</p>
            <p>Visited pages: </p>
            <ol>
                {!visitedPages ||
                    visitedPages.map((item, index) => (
                        <li key={index}>
                            {" "}
                            {process.env.NODE_ENV === "development"
                                ? "http://localhost:3000" + item
                                : "https://olya-get-well.ru" + item}
                        </li>
                    ))}
            </ol>
            <h5>visited pages detail:</h5>
            <ol>
                {!visitedPagesDetail ||
                    visitedPagesDetail.map((item, index) => (
                        <li key={index}>
                            <p>
                                Name of page:{" "}
                                {process.env.NODE_ENV === "development"
                                    ? "http://localhost:3000" + item.name
                                    : "https://olya-get-well.ru" +
                                      item.name}{" "}
                            </p>
                            <p>Date of first visit: {item.dateOfVisit}</p>
                            <p>
                                Address of previous page:{" "}
                                {process.env.NODE_ENV === "development"
                                    ? "http://localhost:3000" +
                                      item.previosPageAddres
                                    : "https://olya-get-well.ru" +
                                      item.previosPageAddres}
                            </p>
                        </li>
                    ))}
            </ol>
        </div>
    );
};
