import FormInputText from "./../FormInputText";
import FormInputDropdown from "./../FormInputDropdown";
import FormInputRadio from "./../FormInputRadio";
import { tuneListOfValues, formElemFormats } from './../../Utilities';

const GetFormElement = ({formElement, control}) => {

    const { name } = formElement;

    switch(formElement.fieldType){
        case formElemFormats.RADIO: {
            const { listOfValues=[], defaultValue, required } = formElement;
            return (
                <FormInputRadio
                    name={name}
                    label={name}
                    control={control}
                    required={required}
                    defaultValue={defaultValue}
                    listOfValues={tuneListOfValues(listOfValues)}
                />
            )
        }
        case formElemFormats.LIST:{
            const { listOfValues=[], defaultValue, required } = formElement;
            return (
                <FormInputDropdown
                    name={name}
                    label={name}
                    control={control}
                    required={required}
                    defaultValue={defaultValue}
                    listOfValues={tuneListOfValues(listOfValues)}
                />
            )
        }
        case formElemFormats.TEXT: 
        default: {
            const { minLength, maxLength, required, defaultValue } = formElement;
            return ( 
                <FormInputText
                    name={name}
                    label={name}
                    minLength={minLength} 
                    maxLength={maxLength}
                    required={required}
                    defaultValue={defaultValue}
                    control={control}
                />
            )
        }
    }
};

export default GetFormElement;