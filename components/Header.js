import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<View style={[theme, styles.header]}>
			<Text style={styles.title}>My todos</Text>
			<ThemeSwitcher />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		position: "relative",
		height: 80,
		paddingTop: 38,
		paddingBottom: 38,
	},
	title: {
		textAlign: "center",
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});
