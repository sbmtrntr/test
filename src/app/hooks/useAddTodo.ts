import { useState, useEffect } from "react";
import supabase from "../../../utils/supabase";

interface Todo {
    id: number;
    title: string;
}

export const useAddTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchTodos = async () => {
        const { data, error } = await supabase
            .from('todos')
            .select('*');

        if (error) {
            console.error("Error fetching todos:", error);
        } else {
            setTodos(data);
        }
        setLoading(false);
    };

    fetchTodos();

    return { todos, loading, fetchTodos };
};