import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

import { ItemType } from '@graasp/sdk';

import { mutations } from '../../config/queryClient';
import { Point } from '../../types';

type Props = {
  closeModal: () => void;
  location: Point;
  open: boolean;
};
const AddItemModal = ({
  open,

  closeModal,
  location,
}: Props): JSX.Element => {
  const { mutateAsync: postItem } = mutations.usePostItem();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, description }: any = Object.fromEntries(formData);
    if (location.length && name && description) {
      await postItem({
        name,
        description,
        type: ItemType.FOLDER,
        geolocation: { lat: location[0], lng: location[1] },
      });
    }
    closeModal();
  };

  return (
    <Dialog open={open} onClose={closeModal}>
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

          <p>
            X: {location[0]}, Y:{location[1]}
          </p>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddItemModal;
