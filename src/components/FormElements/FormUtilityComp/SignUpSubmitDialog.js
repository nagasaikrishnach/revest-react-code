import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

const SignUpSubmitDialog = ({setOpen, open}) => {
    return (
        <Dialog open={open}>
            <DialogTitle>Form Submitted Successfully</DialogTitle>
            <Button variant="contained" color="error" onClick={()=>setOpen(false)}>Close</Button>
        </Dialog>
    )
}

export default SignUpSubmitDialog;