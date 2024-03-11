import React, { useState } from "react";
import { ThemeContext, themes } from "../ThemeContext";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		setTheme(theme === themes.light ? themes.dark : themes.light);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View
					style={[
						{ backgroundColor: theme === themes.dark ? "#20232A" : "#fff" },
						styles.container,
					]}
				>
					{children}
				</View>
			</TouchableWithoutFeedback>
		</ThemeContext.Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
