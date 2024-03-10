import React, { useState } from "react";
import { ThemeContext, themes } from "../ThemeContext";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};