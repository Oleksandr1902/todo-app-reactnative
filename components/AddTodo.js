import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "../ThemeContext";

const AddTodo = ({ submitHandler }) => {
	const [text, setText] = useState("");
	const { theme } = useContext(ThemeContext);

	const changeHandler = (val) => {
		setText(val);
	};
	const validateSubmit = () => {
		if (text !== "") submitHandler(text);
	};
	return (
		<View>
			{theme === themes.light ? (
				<TextInput
					style={styles.input}
					placeholder="new todo..."
					onChangeText={changeHandler}
				/>
			) : (
				<TextInput
					style={[{ color: "#fff", borderColor: "#fff" }, styles.input]}
					placeholder="new todo..."
					onChangeText={changeHandler}
				/>
			)}

			<Pressable
				style={({ pressed }) => [
					{
						backgroundColor: pressed ? "#bbb" : "coral",
					},
					theme,
					styles.button,
				]}
				onPress={validateSubmit}
			>
				<Text style={styles.buttonText}>Add todo</Text>
			</Pressable>
		</View>
	);
};

export default AddTodo;

const styles = StyleSheet.create({
	input: {
		borderColor: "#bbb",
		borderWidth: 2,
		marginBottom: 16,
		padding: 16,
		borderRadius: 10,
	},
	button: {
		padding: 16,
		borderRadius: 10,
	},
	buttonText: {
		textAlign: "center",
		fontWeight: "bold",
		color: "#fff",
	},
});
