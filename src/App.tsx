import React from 'react';
import {Box, Typography} from "@mui/material";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


const App = () => {
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
        <Box sx={{width: "40%"}}>
            <AddTodo/>

        </Box>
        <Box sx={{
            background: "#dce6fe",
            width: "40%",
            boxSizing: "border-box",
            padding: "1rem",
            borderRadius: "10px",
        }}><TodoList/></Box>
    </Box>);
};

export default App;