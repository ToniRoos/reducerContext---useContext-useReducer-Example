import * as React from "react";

import { Heading } from "./Heading";
import { ThemeButton } from "./ThemeButton";

import { ThemeProvider } from "../store/themeStore";
import { CounterProvider } from "../store/counterStore";
import { CounterDisplay } from "./CounterDIsplay";
import { IncreaseButton } from "./IncreaseButton";
import { DecreaseButton } from "./DecreaseButton";

export const App = (props: any) => {

    return <div className={`container`}>
        <ThemeProvider>
            <div className="row">
                <Heading>
                    {`React useContext & useReducer example`}
                </Heading>
            </div>

            <CounterProvider>
                <div className="row">

                    <ThemeButton>
                        Switch Theme
                    </ThemeButton>
                </div>
                <div className="row">
                    <IncreaseButton>+</IncreaseButton>
                    <DecreaseButton>-</DecreaseButton>
                    <CounterDisplay />
                </div>
            </CounterProvider>

        </ThemeProvider>
    </div >
};