import React, {FC} from 'react';
import {Box, FormControl, FormLabel, TextField} from "@mui/material";
import {Control, FieldValues, useController} from "react-hook-form";
type PropsType={control:Control<FieldValues, string>,name:string}
const TextInput:FC<PropsType>=({control,name})=> {
    const {field}=useController({control,name,defaultValue:""})
    return (
        <FormControl><FormLabel>todo</FormLabel><TextField value={field.value} onChange={field.onChange} /></FormControl>
    );
}

export default TextInput;