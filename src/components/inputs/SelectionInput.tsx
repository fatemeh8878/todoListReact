import React, {FC} from 'react';
import {Box, FormControl, FormLabel, MenuItem, TextField} from "@mui/material";
import {Control, FieldValues, useController} from "react-hook-form";

type PropsType = { control: Control<FieldValues, string>, name: string }

const SelectionInput: FC<PropsType> = ({control, name}) => {

    const {field} = useController({control, name, defaultValue: "All"})

    return (
        <FormControl sx={{width:"100%"}}><TextField value={field.value} onChange={field.onChange} select>
            <MenuItem
                value='All'
            >
                All
            </MenuItem>
            <MenuItem
                value='Done'
            >
                Done
            </MenuItem>
            <MenuItem
                value='Undone'
            >
                Undone
            </MenuItem>
        </TextField>
        </FormControl>

    );
};

export default SelectionInput;