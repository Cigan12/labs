import { ISessionInfoProps } from "./pages/Laba10/SessionInfo";
import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./reducers/index";

export interface IStoreState {
    Laba10Reducer: ISessionInfoProps;
}

export const store = configureStore({
    reducer: { ...reducers },
    devTools: process.env.NODE_ENV !== "production",
});
