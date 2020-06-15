import * as React from "react";
import { themeStore } from "../store/themeStore";

export const ThemeButton = (props: React.Props<any>) => {

    const { state: themeState, dispatch } = React.useContext(themeStore);

    return <button type="button" className={`btn ${themeState.background} ${themeState.foreground}`}
        onClick={() => dispatch({ type: 'SWITCH_THEME' })}>
        {props.children}
    </button>
};
