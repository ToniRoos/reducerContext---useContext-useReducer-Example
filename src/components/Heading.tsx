import * as React from "react";
import { themeStore } from "../store/themeStore";

export const Heading = (props: any) => {

    const { state: themeState } = React.useContext(themeStore);

    return <h1 className={`${themeState.background} ${themeState.foreground}`}>{props.children}</h1>;
};