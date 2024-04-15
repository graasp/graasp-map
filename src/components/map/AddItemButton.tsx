import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { CssBaseline, IconButton, Tooltip } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';

type Props = {
  location: Pick<ItemGeolocation, 'lat' | 'lng'> &
    Partial<Pick<ItemGeolocation, 'country' | 'addressLabel'>>;
};
const AddItemButton = ({ location }: Props): JSX.Element | null => {
  const { handleAddOnClick } = useQueryClientContext();

  // no handler does not show the add button
  if (!handleAddOnClick) {
    // eslint-disable-next-line no-console
    console.debug('no add handler is defined');
    return null;
  }

  return (
    <>
      <CssBaseline />
      <Tooltip title="Add a new item with this address">
        <IconButton onClick={() => handleAddOnClick({ location })}>
          <AddLocationAltIcon />
        </IconButton>
      </Tooltip>
      {/* <Dialog open={open}>
        <DialogTitle>Add New Folder at Location</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              name="name"
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description (optional)"
              fullWidth
              name="description"
              variant="standard"
            />

            <p>{location.addressLabel}</p>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Confirm</Button>
          </DialogActions>
        </form>
      </Dialog> */}
    </>
  );
};

export default AddItemButton;
