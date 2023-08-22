import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import GetFormElement from './FormUtilityComp/GetFormElement';
import SignUpSubmitDialog from './FormUtilityComp/SignUpSubmitDialog';

const SignUpForm = ({formElements=[]}) => {

    const [open, setOpen] = useState(false);
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
        setOpen(true);
    }

    return (
        <Card sx={{ minWidth: 300, maxWidth: 600, border: '1px solid black', boxShadow: '10px 10px #212725' }} >
            <CardHeader title="Sign Up"/>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        formElements?.map((FE, key) => <GetFormElement key={key} formElement={FE} control={control} />)
                    }
                    <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-evenly' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button type="submit" variant="contained" color="error" onClick={reset}>
                            Reset
                        </Button>
                    </Box>
                </form>
            </CardContent>
            <SignUpSubmitDialog open={open} setOpen={setOpen}/>
        </Card> 
    );
}

export default SignUpForm;