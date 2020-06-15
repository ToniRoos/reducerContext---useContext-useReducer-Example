import * as React from "react";
import { counterStore } from "../store/counterStore";
import { themeStore } from "../store/themeStore";

export const IncreaseButton = (props: React.Props<any>) => {

    const { dispatch } = React.useContext(counterStore);
    const { state: themeState } = React.useContext(themeStore);

    return <button type="button" className={`btn m-1 ${themeState.background} ${themeState.foreground}`}
        onClick={() => dispatch({ type: 'INCREASE' })}>
        {props.children}
    </button>
};
