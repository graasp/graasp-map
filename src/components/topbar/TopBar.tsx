import { useMap } from 'react-leaflet';

import { Box, Divider, Stack } from '@mui/material';

import GeolocationPicker, {
  GeolocationPickerProps,
} from '../GeolocationPicker/GeolocationPicker';
import { useQueryClientContext } from '../context/QueryClientContext';
import Search from './Search';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TopBar = ({ onChange }: any): JSX.Element => {
  const map = useMap();
  const { useSuggestionsForAddress } = useQueryClientContext();

  const onChangeOption: GeolocationPickerProps['onChangeOption'] = ({
    lat,
    lng,
  }) => {
    map.flyTo({ lat, lng }, 10);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 20,
        left: 0,
        width: '100%',
        zIndex: 450,
      }}
    >
      <Stack justifyContent="center" alignItems="center" py={2}>
        <Stack
          sx={{
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 3px 15px rgba(0,0,0,0.5)',
          }}
          direction="row"
          gap={2}
          p={2}
        >
          <Stack>
            <GeolocationPicker
              useSuggestionsForAddress={useSuggestionsForAddress}
              onChangeOption={onChangeOption}
              invisible
            />
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack>
            <Search onChange={onChange} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default TopBar;
