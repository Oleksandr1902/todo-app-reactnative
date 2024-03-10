import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "../ThemeContext";

const ThemeSwitcher = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState);
		toggleTheme();
	};
	return (
		<View style={styles.container}>
			{theme === themes.light ? (
				<Text style={{ marginRight: 5 }}>light</Text>
			) : (
				<Text style={{ marginRight: 5, color: "#fff" }}>dark</Text>
			)}

			<Switch
				trackColor={{ false: "#767577", true: "#81b0ff" }}
				thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

export default ThemeSwitcher;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		position: "absolute",
		right: 10,
		bottom: 10,
		flexDirection: "row",
	},
});
