import React from "react";
import { useAddTodo } from "../app/hooks/useAddTodo";

interface Todo {
    id: number;
    title: string;
}

export const ToDoList: React.FC = () => {
    const { todos, loading }: { todos: Todo[], loading: boolean } = useAddTodo();

    return (
        <>
            <div>todoリスト</div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            )}
        </>
    );
};