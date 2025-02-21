"use client";

import React, { useState, useEffect} from "react";
import supabase from "../../utils/supabase";
import { InputToDoForm } from "../components/InputToDoForm";
import { ToDoList } from "../components/ToDoList";

const Home : React.FC = () => {
    return (
        <>
            <InputToDoForm />
            <ToDoList />
        </>
    )
}

export default Home;