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
    const {control, handleSubmit} = formController

    const handleAddTodo = (data: FieldValues) => {
        addTodo(data.todo)
    };
    return (<Box>
            <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Button onClick={() => setOpenModal(true)} sx={{
                    color: "#fff",
                    height: "2.5rem", background: "#4d8af0", "&:hover": {
                        background: "#4d8af0",
                    }
                }}>Add</Button>
                <Box sx={{width: "30%"}}>
                    <SelectionInput name="test" control={control}/>

                </Box>
            </Box>
            <Dialog open={openModal} onClose={() => setOpenModal(false)}>

                <form onSubmit={handleSubmit(handleAddTodo)}><TextInput control={control} name="todo"/><Button
                    type="submit">sd</Button></form>
            </Dialog>

        </Box>

    );
};

export default AddTodo;