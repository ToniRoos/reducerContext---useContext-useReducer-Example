import { createStore } from "../utils/reducerStore";
import { counterReducer, CounterState } from "../reducer/countReducer";

const initialState: CounterState = { count: 0 };

const { Provider: CounterProvider, store: counterStore } = createStore({
    initialState: initialState,
    reducer: counterReducer
});

export { CounterProvider, counterStore };