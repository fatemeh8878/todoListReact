import React, {FC} from 'react';
import {Box, FormControl, FormLabel, TextField} from "@mui/material";
import {Control, FieldValues, useController} from "react-hook-form";

type PropsType = { control: Control<FieldValues, string>, name: string }
const TextInput: FC<PropsType> = ({control, name}) => {
    const {field, formState,fieldState} = useController({
        control,
        name,
        defaultValue: "",
        rules: {required: {message: "Required", value: true}}
    });
    return (
        <FormControl><TextField error={!!fieldState.error} value={field.value} placeholder="Add Todo" onChange={field.onChange} helperText={fieldState?.error?.message}/></FormControl>
    );
}

export default TextInput;