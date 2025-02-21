import React, { useState, useEffect} from "react";
import { useAddTodo } from "../app/hooks/useAddTodo";

interface Todo {
    id: number;
    title: string;
}

export const ToDoList: React.FC = () => {
    const { todos }: { todos: Todo[] } = useAddTodo()

    return (
        <>
            <div>todoリスト</div>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </>
    )
}