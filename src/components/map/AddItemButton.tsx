import { FormEvent, useState } from 'react';

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
import { COMMON } from '@graasp/translations';

import { useCommonTranslation, useMapTranslation } from '@/config/i18n';

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
  const { t: commonT } = useCommonTranslation();
  const { mutate: postItem } = usePostItem();
  const { t } = useMapTranslation();
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
      <Tooltip title={t('Add a new item at this location')}>
        <IconButton onClick={handleAddItem}>
          <AddLocationAltIcon />
        </IconButton>
      </Tooltip>
      {/* fallback form to add an item */}
      {!handleAddOnClick && (
        <Dialog open={open}>
          <DialogTitle>{t('Add a new item at this location')}</DialogTitle>
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
                required
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label={t('Description')}
                fullWidth
                name="description"
                variant="standard"
              />

              <p>{location.addressLabel}</p>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setOpen(false)}>
                {commonT(COMMON.CANCEL_BUTTON)}
              </Button>
              <Button type="submit" variant="contained">
                {commonT(COMMON.SAVE_BUTTON)}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  );
};

export default AddItemButton;
