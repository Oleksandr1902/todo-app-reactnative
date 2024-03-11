import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { ThemeContext, themes } from "../ThemeContext";

const TodoItem = ({ item, pressHandler }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<Pressable
			onPress={() => pressHandler(item.key)}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? "#bbb" : "transparent",
					borderColor: theme === themes.light ? "#bbb" : "#fff",
				},
				styles.item,
			]}
		>
			<Text style={{ color: theme === themes.light ? "initial" : "#fff" }}>
				{item.text}
			</Text>
		</Pressable>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderWidth: 2,
		borderStyle: "dashed",
		borderRadius: 10,
	},
});
