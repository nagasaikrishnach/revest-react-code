import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const generateSingleOptions = (listOfValues) => {
    return listOfValues.map((option, key) => {
        return (
            <MenuItem key={key} value={key.toString()}>
                {option.label}
            </MenuItem>
        );
    });
};

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
                        {generateSingleOptions(listOfValues)}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </FormControl>
    );

};

export default FormInputDropdown;