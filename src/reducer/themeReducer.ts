import { Action } from "../utils/reducerStore";

export interface ThemeState {
    foreground: string;
    background: string;
}

export interface ThemeAction extends Action {
    type: "SWITCH_THEME";
}

export const themes = {
    light: {
        foreground: "text-dark",
        background: "bg-light"
    },
    dark: {
        foreground: "text-light",
        background: "bg-dark"
    }
};

export const themeReducer = (prevState: ThemeState, action: ThemeAction) => {
    switch (action.type) {
        case 'SWITCH_THEME':
            const isDark = prevState === themes.dark;
            const newState = isDark
                ? themes.light
                : themes.dark
            return newState;
        default:
            return themes.light;
    };
};
