import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = ({ message, duration, open, setOpen, severity }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={duration ? duration : 6000}
        anchorOrigin={{vertical:'bottom', horizontal: 'right' }}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity ? severity : 'success'} sx={{ width: '100%' }}>
          {message ? message : 'No message provided'}
        </Alert>
      </Snackbar>
    </Stack>
  );
}


export default CustomizedSnackbar;