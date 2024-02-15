import { useState } from 'react';

import { DialogActions, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { DiscriminatedItem } from '@graasp/sdk';
import { Button, DeleteButton } from '@graasp/ui';

import { mutations } from '../../config/queryClient';

type Props = {
  item: DiscriminatedItem;
};

const DeleteItemButton = ({ item }: Props): JSX.Element => {
  const { mutate: recycleItems } = mutations.useRecycleItems();
  const [open, setOpen] = useState(false);

  const { name, id } = item;

  const onDelete = () => {
    recycleItems([id]);
  };
  const onClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // onClose(selectedValue);
    setOpen(false);
    // setSelectedValue(selectedValue);
  };

  return (
    <>
      <DeleteButton text="Trash Item" onClick={onClick} />
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Trash Item</DialogTitle>
        <DialogContent>{`The item ${name} will be put in your trash. Do you want to proceed?`}</DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={onDelete}>
            Trash
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteItemButton;
