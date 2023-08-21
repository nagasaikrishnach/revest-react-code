import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignUpForm from './../components/FormElements/SignUpForm';
import inputData from './input.json';

const SignUp = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
                        Revest Solutions Pvt Ltd
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
                <Toolbar />
                <Box align="center" mt={2}>
                    <SignUpForm formElements={inputData?.data}/>
                </Box>
            </Box>
        </Box>
    )
}

export default SignUp;