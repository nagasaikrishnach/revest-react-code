import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const FormInputText = ({ name, control, label, defaultValue, minLength, maxLength, required }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={ required ? { required: `${label} field is required` }: {}}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <TextField
                    sx={{marginTop: 2}}
                    helperText={error ? error.message : null}
                    size="small"
                    minLength={minLength}
                    maxLength={maxLength}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"/>
            )}
        />
    );
};

export default FormInputText;