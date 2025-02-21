"use client";

import React from "react";
import { InputToDoForm } from "../components/InputToDoForm";
import { ToDoList } from "../components/ToDoList";

const Home: React.FC = () => {
    return (
        <>
            <InputToDoForm />
            <ToDoList />
        </>
    );
};

export default Home;