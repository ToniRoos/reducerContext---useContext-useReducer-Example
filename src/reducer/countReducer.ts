import { Action } from "../utils/reducerStore";

export interface CounterState {
    count: number
}

export interface CounterAction extends Action {
    type: "INCREASE" | "DECREASE";
}

export const counterReducer = (prevState: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'INCREASE':
            return { count: prevState.count + 1 };
        case 'DECREASE':
            return { count: prevState.count - 1 };
        default:
            return prevState;
    };
};
