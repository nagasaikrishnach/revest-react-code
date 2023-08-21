import { FormControl, FormLabel, RadioGroup } from "@mui/material";
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
        <FormControl component="fieldset" sx={{marginTop: 2}} required={required} fullWidth>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState,
                }) => (
                    <RadioGroup value={value} onChange={onChange} defaultValue={defaultValue} row>
                        {generateOptions(listOfValues, formElemFormats.RADIO)}
                    </RadioGroup>
                )}
            />
        </FormControl>
    );
};

export default FormInputRadio;