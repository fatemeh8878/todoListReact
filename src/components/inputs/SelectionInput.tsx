import React, {FC} from 'react';
import {Box, FormControl, FormLabel, MenuItem, TextField} from "@mui/material";
import {Control, FieldValues, useController} from "react-hook-form";

type PropsType = { onChange: (value:string) => void,value:"All"|"Done"|"Undone" }

const SelectionInput: FC<PropsType> = ({onChange,value}) => {


    return (
        <FormControl sx={{width: "100%"}}>
            <TextField value={value} onChange={(e) => onChange(e.target.value)} select>
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