import { useEffect, useState } from "react";
import { TypeTodolist } from "../untils/todomodel";
import { fetchTodo, saveTodotolocal } from "../untils/fetchTodo";
import demoTodolistdata from "../untils/demoTodolitdata";
import { Keyboard } from "react-native";

export default function useTodo() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<TypeTodolist[]>([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetchTodo().then((data) => {
            if (data && data.length > 0) {
                setData(data);
            } else {
                setData(demoTodolistdata);
                saveTodotolocal(demoTodolistdata);
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
    }, []);


    const addTodo = (title: string) => {
        Keyboard.dismiss()
        if (title.trim() === '') {
            return;
        }
        setText('')
        const newTodo: TypeTodolist = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        const newData = [...data, newTodo];
        setData(newData);
        saveTodotolocal(newData);
    };

    const deleteTodo = (id: number) => {
        const newData = data.filter((todo) => todo.id !== id);
        setData(newData);
        saveTodotolocal(newData);
    };

    const toggleTodo = (id: number) => {
        const newData = data.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setData(newData);
        saveTodotolocal(newData);
    };

    return {
        data,
        loading,
        error,
        addTodo,
        deleteTodo,
        toggleTodo,
    };


}