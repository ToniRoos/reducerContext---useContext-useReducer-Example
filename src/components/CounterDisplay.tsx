import * as React from "react";
import { counterStore } from "../store/counterStore";
import { themeStore } from "../store/themeStore";

export const CounterDisplay = () => {

    const { state } = React.useContext(counterStore);
    const { state: themeState } = React.useContext(themeStore);

    return <p className={`p-1 m-1 ${themeState.background} ${themeState.foreground}`}>
        Counter: <span className="badge badge-info">{state.count}</span>
    </p>;
};