import React, { useState } from 'react';

import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';

import { ItemGeolocation, ItemType } from '@graasp/sdk';

import { mutations } from '../../config/queryClient';

type Props = {
  location: Pick<ItemGeolocation, 'lat' | 'lng'> &
    Partial<Pick<ItemGeolocation, 'country' | 'addressLabel'>>;
};
const AddItemModal = ({ location }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { mutateAsync: postItem } = mutations.usePostItem();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, description }: any = Object.fromEntries(formData);
    if (location && name && description) {
      await postItem({
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
      <Tooltip title="Add a new item with this address">
        <IconButton onClick={() => setOpen(true)}>
          <AddLocationAltIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open}>
        <DialogTitle>Add New Location</DialogTitle>
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
              label="Description"
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

export default AddItemModal;
