import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

const generateRadioOptions = (listOfValues) => {
    return listOfValues.map((singleOption, key) => (
        <FormControlLabel
            key={key}
            value={key.toString()}
            label={singleOption.label}
            control={<Radio />}
        />
    ));
};

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
                        {generateRadioOptions(listOfValues)}
                    </RadioGroup>
                )}
            />
        </FormControl>
    );
};

export default FormInputRadio;