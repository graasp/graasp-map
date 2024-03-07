import { useEffect, useState } from 'react';

import { Alert } from '@mui/material';

import { useQueryClientContext } from '../context/QueryClientContext';

const LoggedOutWarning = (): JSX.Element | null => {
  const [open, setOpen] = useState(false);
  const { currentMember } = useQueryClientContext();

  useEffect(() => {
    if (!currentMember) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (currentMember || !open) {
    return null;
  }

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Alert
      sx={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 500,
        margin: 'auto',
      }}
      severity="warning"
      onClose={onClose}
    >
      Some functionalities are disabled for logged out users.
    </Alert>
  );
};

export default LoggedOutWarning;
