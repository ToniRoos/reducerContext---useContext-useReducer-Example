# ReducerContext - how to combine useReducer & useContext

Just a simple example for a generic store that combines React hook, useReducer and React context.

## The magic happens here

reducerStore.tsx
```tsx
import React, { createContext, useReducer } from 'react';

export interface Action {
    type: string;
    payload?: any;
}

export interface GenericReducer<T, U extends Action> extends React.Props<any> {
    reducer: (state: T, action: U) => T;
    initialState: T;
}

function createStore<TState, TAction extends Action>(reducerData: GenericReducer<TState, TAction>) {

    const initialStore = {
        state: reducerData.initialState,
        dispatch: (action: TAction) => { }
    };

    const store = createContext(initialStore);
    const Provider = (props: React.Props<any>) => {

        const [state, dispatch] = useReducer(reducerData.reducer, reducerData.initialState);
        const { Provider } = store;
        return <Provider value={{ state, dispatch }}> {props.children} </Provider>;
    };

    return {
        Provider,
        store
    };
}

export { createStore };
```

## Create a custom store from generic reducerStore.tsx

themeStore.ts
```ts
import { createStore } from "../utils/reducerStore";
import { themes, themeReducer } from "../reducer/themeReducer";

const initialState = themes.light;

const { Provider: ThemeProvider, store: themeStore } = createStore({
    initialState: initialState,
    reducer: themeReducer
});

export { ThemeProvider, themeStore };
```

## Initialize your custom store above all sub tree components, that need the data from context
App.tsx
```tsx
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
                {...}
            </CounterProvider>

        </ThemeProvider>
    </div >
};
```
## Getting data from store or using dispatch to change data of store
ThemeButton.tsx
```tsx
const { state: themeState, dispatch } = React.useContext(themeStore);

<button type="button" className={`btn ${themeState.background} ${themeState.foreground}`}
        onClick={() => dispatch({ type: 'SWITCH_THEME' })}>
```
