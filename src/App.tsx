import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {useTodoStore} from "./hooks/useTodos";
import SelectionInput from "./components/inputs/SelectionInput";
import {useForm} from "react-hook-form";
import AddTodo from "./components/AddTodo";


const App = () => {
    const todos = useTodoStore(state => state.todos);
    const removeTodo = useTodoStore(state => state.removeTodo);
    return (<Box
        sx={{
            background: "#f0f4f8",
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem"
        }}>
        <Typography color="#505050" sx={{fontWeight: "bold", fontSize: "2rem"}}>TODO LIST</Typography>
<Box sx={{width:"40%"}}>
    <AddTodo/>

</Box>
        <Box sx={{
            background: "#dce6fe",
            width: "40%",
            boxSizing: "border-box",
            padding: "1rem",
            borderRadius: "10px",
        }}>sada</Box>
    </Box>);
};

export default App;