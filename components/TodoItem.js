import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const TodoItem = ({ item, pressHandler }) => {
	return (
		<Pressable
			onPress={() => pressHandler(item.key)}
			style={({ pressed }) => [
				{
					backgroundColor: pressed ? "#bbb" : "transparent",
				},
				styles.item,
			]}
		>
			<Text>{item.text}</Text>
		</Pressable>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: "#bbb",
		borderWidth: 1,
		borderStyle: "dashed",
		borderRadius: 10,
	},
});
