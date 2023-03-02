import * as React from 'react';
import { Stack, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar = ({ message, duration, open, setOpen, severity, anchorOrigin, ...others }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }} {...others}>
      <Snackbar
        open={open}
        autoHideDuration={duration ? duration : 6000}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity ? severity : 'success'} sx={{ width: '100%' }}>
          {message ? message : 'No message provided'}
        </Alert>
      </Snackbar>
    </Stack>
  );
}


export default CustomizedSnackbar;