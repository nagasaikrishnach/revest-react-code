import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormInputText from "./FormInputText";
import FormInputDropdown from "./FormInputDropdown";
import FormInputRadio from "./FormInputRadio";
import { tuneListOfValues, formElemFormats } from './../Utilities';

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

const SignUpForm = ({formElements=[]}) => {
    const { register, handleSubmit, reset, control, setValue } = useForm();
    
    return (
        <Card sx={{ minWidth: 300, maxWidth: 600, border: '1px solid black', boxShadow: '10px 10px #212725' }} >
            <CardHeader title="Sign Up"/>
            <CardContent>
                <form>
                    {
                        formElements?.map((FE, key) => <GetFormElement key={key} formElement={FE} control={control} />)
                    }
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </CardContent>
        </Card> 
    );
}

export default SignUpForm;