import React, { useState } from "react";
import { useAddTodo } from "../app/hooks/useAddTodo";
import supabase from "../../utils/supabase";

export const InputToDoForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const { fetchTodos } = useAddTodo();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim() === "") return;

        const { error } = await supabase
            .from('todos')
            .insert([{ title }]);

        if (error) {
            console.error("Error adding todo:", error);
        } else {
            setTitle("");
            await fetchTodos(); // Refresh the todo list
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};