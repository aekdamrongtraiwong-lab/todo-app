import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypeTodolist } from "./todomodel";

export const fetchTodo = async () => {
    try {
        const value = await AsyncStorage.getItem('todo');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const saveTodotolocal = async (todo: TypeTodolist[]) => {
    try {
        await AsyncStorage.setItem('todo', JSON.stringify(todo));
    } catch (e) {
        console.error(e);
    }
};