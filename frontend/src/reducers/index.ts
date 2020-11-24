import { ISessionInfoProps } from "./../pages/Laba10/SessionInfo";
const initialAppState: ISessionInfoProps = {
    login: "",
    dateOfLogin: null,
    visitedPages: [],
    visitedPagesDetail: [],
};

export const Laba10Reducer = (state = initialAppState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "DATA-CHANGED":
            return { ...payload };

        default:
            return state;
    }
};
