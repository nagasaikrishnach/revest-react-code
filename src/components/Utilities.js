import { MenuItem, FormControlLabel, Radio } from "@mui/material";

export const tuneListOfValues = (listOfValues=[]) => {
    return listOfValues?.map((li, key) => ({
        label: li,
        value: key.toString()
    }))
};

export const formElemFormats = {
    TEXT: "TEXT",
    LIST: "LIST",
    RADIO: "RADIO"
};


export const generateOptions = (listOfValues, type) => {
    switch(type){
        case formElemFormats.LIST:{
            return listOfValues.map((option, key) => {
                return (
                    <MenuItem key={key} value={key.toString()}>
                        {option.label}
                    </MenuItem>
                );
            });
        }
        case formElemFormats.RADIO: {
            return listOfValues.map((singleOption, key) => (
                <FormControlLabel
                    key={key}
                    value={key.toString()}
                    label={singleOption.label}
                    control={<Radio />}
                />
            ));
        }
        default: return []
    }
};