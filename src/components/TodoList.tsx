import React, {useMemo} from 'react';
import {useTodoStore} from "../hooks/useTodos";
import {Box, Checkbox, IconButton, List, ListItem, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = () => {
    const todos = useTodoStore(state => state.todos);
    const removeTodo = useTodoStore(state => state.removeTodo);
    const toggleDone = useTodoStore(state => state.toggleDone);
    const filter = useTodoStore(state => state.filter);

    const filterTodos=useMemo(()=>todos.filter(todo=>{
        if(filter==="Done") return todo.done;
        if(filter==="Undone") return !todo.done;
        return true
    }),[filter,todos])
    return (
        <Box>
            {filterTodos.length ?
                <List sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>{filterTodos.map(item => <ListItem
                    key={item.id}
                    sx={{
                        background: "#fff",
                        borderRadius: "10px",
                        p: "0.5rem",
                        display: "flex",
                        justifyContent: "space-between"
                    }}><Box sx={{display: "flex", gap: "0.5rem", alignItems: "center"}}>
                    <Checkbox checked={item.done} onChange={() => toggleDone(item.id)}
                              sx={{alignSelf: "self-start"}}/><Typography sx={{wordBreak: "break-all"}}>
                    {item.text}
                </Typography>
                </Box>
                    <IconButton onClick={() => removeTodo(item.id)}>
                        <DeleteIcon/>
                    </IconButton> </ListItem>)}</List>
                : <Typography color="#909090" sx={{display: "flex", justifyContent: "center"}}>NOT TODO</Typography>}

        </Box>
    );
};

export default TodoList;