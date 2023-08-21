import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export const FormInputText = ({ name, control, label, defaultValue, minLength, maxLength, required }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    sx={{marginTop: 2}}
                    helperText={error ? error.message : null}
                    size="small"
                    minLength={minLength}
                    maxLength={maxLength}
                    required={required}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    defaultValue={defaultValue}
                    variant="outlined"/>
            )}
        />
    );
};

export default FormInputText;