import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from "react-hook-form";
import {formElemFormats, generateOptions } from './../Utilities';

const FormInputRadio= ({
    name,
    control,
    label,
    defaultValue,
    required,
    listOfValues=[]
}) => {
    
    return (
        <FormControl component="fieldset" sx={{marginTop: 2}} fullWidth>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={ required ? { required: `${label} field is required` }: {}}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <>
                        <RadioGroup value={value} onChange={onChange} row>
                            {generateOptions(listOfValues, formElemFormats.RADIO)}
                        </RadioGroup>
                            <FormHelperText sx={{ color: 'error.main'}}>
                            {error ? error.message : null}
                        </FormHelperText>
                    </>
                )}
            />
        </FormControl>
    );
};

export default FormInputRadio;