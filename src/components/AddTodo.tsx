import React, {useState} from 'react';
import TextInput from "./inputs/TextInput";
import {Box, Button, Dialog} from "@mui/material";
import {FieldValues, useForm} from "react-hook-form";
import {useTodoStore} from "../hooks/useTodos";
import SelectionInput from "./inputs/SelectionInput";

const AddTodo = () => {
    const formController = useForm();
    const addTodo = useTodoStore(state => state.addTodo)
    const [openModal, setOpenModal] = useState(false)
    const {control, handleSubmit, reset} = formController
    const setFilter = useTodoStore(state => state.setFilter);
    const filter = useTodoStore(state => state.filter);

    const handleAddTodo = (data: FieldValues) => {
        setOpenModal(prev => !prev);
        reset()
        addTodo({text: data.todo, status: data.status})
    };

    return (
        <Box>
            <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Button onClick={() => setOpenModal(true)} sx={{
                    color: "#fff",
                    height: "2.5rem", background: "#4d8af0", "&:hover": {
                        background: "#4d8af0",
                    }
                }}>Add</Button>
                <Box>
                    <SelectionInput onChange={(value) => setFilter(value as unknown as "All" | "Done" | "Undone")}
                                    value={filter}/>

                </Box>
            </Box>
            <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                <Box component="form"
                     sx={{
                         boxSizing: "border-box",
                         padding: "2rem",
                         display: "flex",
                         flexDirection: "column",
                         gap: "1rem"
                     }} onSubmit={handleSubmit(handleAddTodo)}>

                    <TextInput control={control} name="todo"/>
                    <Button
                        sx={{color:"#fff",background:"#00bfff","&:hover":{
                                background:"#ADD8E6"
                            }}}
                        type="submit">ADD</Button>
                </Box>

            </Dialog>

        </Box>

    );
};

export default AddTodo;