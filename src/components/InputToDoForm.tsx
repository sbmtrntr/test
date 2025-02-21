import React, { useState } from "react";
import { useAddTodo } from "../app/hooks/useAddTodo";
import supabase from "../../utils/supabase";

export const InputToDoForm : React.FC = () => {
    const [title, setTitle] = useState("");
    const { fetchTodos } = useAddTodo();

    const pushTodo = async (e: any) => {
        e.preventDefault();
        await supabase.from("todos").insert([{ title }]);
        fetchTodos();
        setTitle("");
    }

    return (
        <form onSubmit={pushTodo}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">追加</button>
        </form>
    )
}