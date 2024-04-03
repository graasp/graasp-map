import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMap } from 'react-leaflet';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';

import GeolocationPicker, {
  GeolocationPickerProps,
} from '../GeolocationPicker/GeolocationPicker';
import { useQueryClientContext } from '../context/QueryClientContext';
import Search from './Search';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MobileTopBar = ({ onChange, tags }: any): JSX.Element => {
  const map = useMap();
  const { useSuggestionsForAddress, currentMember } = useQueryClientContext();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeOption: GeolocationPickerProps['onChangeOption'] = ({
    lat,
    lng,
  }) => {
    map.flyTo({ lat, lng }, 10);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="filters"
        onClick={handleClickOpen}
        sx={{ position: 'absolute', bottom: 20, right: 20 }}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          {currentMember && (
            <>
              <br />
              <GeolocationPicker
                useSuggestionsForAddress={useSuggestionsForAddress}
                onChangeOption={onChangeOption}
              />
              <br />
            </>
          )}
          <Search tags={tags} onChange={onChange} />
          <br />
          <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('Close')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default MobileTopBar;
