import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMap } from 'react-leaflet';

import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Stack, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';

import { useMobileView } from '@graasp/ui';

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
  const { isMobile } = useMobileView();

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

  //   return (
  //     <Box
  //       sx={{
  //         position: 'absolute',
  //         top: 20,
  //         left: '10%',
  //         width: '80%',
  //         zIndex: 450,
  //       }}
  //     >
  //       <Stack justifyContent="center" alignItems="center" py={2}>
  //         <Stack
  //           sx={{
  //             background: 'white',
  //             borderRadius: '10px',
  //             boxShadow: '0 3px 15px rgba(0,0,0,0.5)',
  //           }}
  //           direction="row"
  //           gap={2}
  //           p={2}
  //         >
  //           {currentMember && (
  //             <>
  //               <Stack>
  //                 <GeolocationPicker
  //                   useSuggestionsForAddress={useSuggestionsForAddress}
  //                   onChangeOption={onChangeOption}
  //                   invisible
  //                 />
  //               </Stack>
  //               <Divider orientation="vertical" flexItem />
  //             </>
  //           )}
  //           <Stack>
  //             <Search tags={tags} onChange={onChange} />
  //           </Stack>
  //         </Stack>
  //       </Stack>
  //     </Box>
  //   );
};
export default MobileTopBar;
