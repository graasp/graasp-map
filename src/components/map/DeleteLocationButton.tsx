import * as React from 'react';

import WrongLocationIcon from '@mui/icons-material/WrongLocation';
import {
  DialogActions,
  DialogContent,
  IconButton,
  Tooltip,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { DiscriminatedItem } from '@graasp/sdk';
import { Button } from '@graasp/ui';

import { mutations } from '../../config/queryClient';

export interface Props {
  item: DiscriminatedItem;
}

const DeleteLocationButton = ({ item }: Props): JSX.Element => {
  const { mutate: deleteLocation } = mutations.useDeleteItemGeolocation();
  const [open, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(true);
  };

  const onDelete = () => {
    deleteLocation({ itemId: item.id });
    setOpen(false);
  };

  const handleClose = () => {
    // onClose(selectedValue);
    // setOpen(false);
    // setSelectedValue(selectedValue);
  };

  return (
    <>
      <Tooltip title="Delete Item Location">
        <IconButton onClick={onClick}>
          <WrongLocationIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Delete Item Location</DialogTitle>
        <DialogContent>{`The location of ${item.name} will be removed from the map, but the item will still be accessible through Graasp Builder.`}</DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={onDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DeleteLocationButton;
