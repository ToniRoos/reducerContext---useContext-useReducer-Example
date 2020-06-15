import { createStore } from "../utils/reducerStore";
import { themes, themeReducer } from "../reducer/themeReducer";

const initialState = themes.light;

const { Provider: ThemeProvider, store: themeStore } = createStore({
    initialState: initialState,
    reducer: themeReducer
});

export { ThemeProvider, themeStore };