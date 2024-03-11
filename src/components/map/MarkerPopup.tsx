import { Popup } from 'react-leaflet';

import { Box, Chip, Stack, Typography } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';

import DeleteItemButton from './DeleteItemButton';
import DeleteLocationButton from './DeleteLocationButton';
import ViewButton from './ViewButton';

const MarkerPopup = ({
  geolocation,
}: {
  geolocation: ItemGeolocation;
}): JSX.Element => {
  const { item } = geolocation;

  return (
    <Popup>
      <Typography variant="h5">{item.name}</Typography>
      {/* TODO: slice and show html  */}
      <Typography variant="subtitle1">{item.description}</Typography>
      <Typography variant="caption">{geolocation.addressLabel}</Typography>
      <Box>
        {item.settings.tags?.map((t: string, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Chip key={idx} label={t} />
        ))}
      </Box>
      <Stack direction="row">
        <ViewButton item={item} />
        <DeleteLocationButton item={item} />
        <DeleteItemButton item={item} />
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
