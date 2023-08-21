import { FormControl, InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import {formElemFormats, generateOptions } from './../Utilities';

const FormInputDropdown = ({
    name,
    control,
    label,
    defaultValue,
    required,
    listOfValues=[]
}) => {
    return (
        <FormControl size={"small"} fullWidth sx={{marginTop: 2}} required={required}>
            <InputLabel>{label}</InputLabel>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <Select onChange={onChange} value={value} defaultValue={defaultValue}>
                        {generateOptions(listOfValues, formElemFormats.LIST)}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </FormControl>
    );

};

export default FormInputDropdown;