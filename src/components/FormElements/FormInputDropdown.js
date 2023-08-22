import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
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
        <FormControl size={"small"} fullWidth sx={{marginTop: 2}} >
            <InputLabel>{label}</InputLabel>
            <Controller
                defaultValue={defaultValue}
                rules={ required ? { required: `${label} field is required` }: {}}
                render={({ 
                    field: { onChange, value },
                    fieldState: { error }, 
                }) => (
                    <>
                        <Select 
                            onChange={onChange} 
                            value={value} 
                            error={!!error} 
                        >
                            {generateOptions(listOfValues, formElemFormats.LIST)}
                        </Select>
                        <FormHelperText sx={{ color: 'error.main'}}>
                            {error ? error.message : null}
                        </FormHelperText>
                    </>
                )}
                control={control}
                name={name}
            />
        </FormControl>
    );

};

export default FormInputDropdown;