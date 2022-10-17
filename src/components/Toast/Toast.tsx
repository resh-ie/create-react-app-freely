import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import * as React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

interface ToastProps {
  isOpen: boolean;
  message: string;
  severity: 'error' | 'success' | 'info' | 'warning';
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({ severity, isOpen, message, setIsOpen }: ToastProps) => {
  // const [open, setOpen] = React.useState(isOpen);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <>{console.log('open', open)}</>
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Toast;
