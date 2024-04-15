import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
const AddItemButton = ({ location }: Props): JSX.Element | null => {
  const {
    handleAddOnClick,
    usePostItem,
    itemId: parentId,
  } = useQueryClientContext();
  const { mutate: postItem } = usePostItem();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
  const handleAddItem = () => {
    if (handleAddOnClick) {
      handleAddOnClick({ location });
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <CssBaseline />
      <Tooltip title={t('Add a new folder at this location')}>
        <IconButton onClick={handleAddItem}>
          <AddLocationAltIcon />
        </IconButton>
      </Tooltip>
      {/* fallback form to add an item */}
      {!handleAddOnClick && (
        <Dialog open={open}>
          <DialogTitle>{t('Add a new folder at this location')}</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label={t('Name')}
                fullWidth
                name="name"
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label={t('Description (optional)')}
                fullWidth
                name="description"
                variant="standard"
              />

              <p>{location.addressLabel}</p>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setOpen(false)}>
                {t('Cancel')}
              </Button>
              <Button type="submit">{t('Save')}</Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddItemButton;
