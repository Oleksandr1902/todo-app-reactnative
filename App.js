import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeContext, themes } from "./ThemeContext";

export default function App() {
	const { theme } = useContext(ThemeContext);
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: 1 },
		{ text: "create an app", key: 2 },
		{ text: "play on the switch", key: 3 },
	]);

	const pressHandler = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((item) => id != item.key);
		});
	};
	const submitHandler = (text) => {
		setTodos((prevTodos) => {
			const keys = todos.map((item) => item.key);
			const maxvalue = Math.max.apply(null, keys);
			return [{ text, key: maxvalue + 1 }, ...prevTodos];
		});
	};
	console.log(themes.light);
	console.log(theme);
	return (
		<ThemeProvider>
			<Header />
			{/* content */}
			<View style={styles.content}>
				<AddTodo submitHandler={submitHandler} />

				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<TodoItem item={item} pressHandler={pressHandler} />
					)}
				/>
			</View>

			<StatusBar style="auto" />
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	content: {
		marginTop: 64,
		paddingHorizontal: 32,
	},
});
