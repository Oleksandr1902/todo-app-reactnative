import { createContext } from "react";

export const themes = {
	light: {
		backgroundColor: "coral",
		color: "#000000",
	},
	dark: {
		backgroundColor: "#767676",
		color: "#FFFFFF",
	},
};

export const ThemeContext = createContext(themes.light);
