import React, { useState } from "react";
import { ThemeContext, themes } from "../ThemeContext";
import { View } from "react-native";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<View
				style={{
					backgroundColor: theme === themes.light ? "#fff" : "#20232A",
				}}
			>
				{children}
			</View>
		</ThemeContext.Provider>
	);
};
