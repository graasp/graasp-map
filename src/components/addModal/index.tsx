import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

import './style.css';

type Props = {
  handleSubmit: any;
  closeModal: () => void;
  clickedPoint: any;
  open: boolean;
};
const AddItemModal = ({
  open,
  handleSubmit,
  closeModal,
  clickedPoint,
}: Props): JSX.Element => (
  <Dialog open={open} onClose={closeModal}>
    <DialogTitle>Add New Location</DialogTitle>
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          fullWidth
          name="title"
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
          Point: X: {clickedPoint[0]}, Y:{clickedPoint[1]}
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

export default AddItemModal;
