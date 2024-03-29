import React, { useState } from 'react';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';

import { ItemGeolocation, ItemType } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';

type Props = {
  location: Pick<ItemGeolocation, 'lat' | 'lng'> &
    Partial<Pick<ItemGeolocation, 'country' | 'addressLabel'>>;
};
const AddItemButton = ({ location }: Props): JSX.Element => {
  const { usePostItem, itemId: parentId } = useQueryClientContext();
  const { mutate: postItem } = usePostItem();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, description }: any = Object.fromEntries(formData);
    if (location && name) {
      await postItem({
        parentId,
        name,
        description,
        type: ItemType.FOLDER,
        geolocation: location,
      });
    }
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Tooltip title="Add a new item with this address">
        <IconButton onClick={() => setOpen(true)}>
          <AddLocationAltIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open}>
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
      </Dialog>
    </>
  );
};

export default AddItemButton;
