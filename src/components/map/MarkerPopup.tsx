import { Popup } from 'react-leaflet';

import { Stack, Typography } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';

import DeleteItemButton from './DeleteItemButton';
import DeleteLocationButton from './DeleteLocationButton';
import ViewButton from './ViewButton';

const NAME_MAX_LENGTH = 20;

const MarkerPopup = ({
  geolocation,
}: {
  geolocation: ItemGeolocation;
}): JSX.Element => {
  const { item } = geolocation;

  return (
    <Popup>
      <Typography variant="h5">
        {item.name.slice(0, NAME_MAX_LENGTH)}
      </Typography>
      {/* TODO: slice and show html  */}
      <Typography variant="subtitle1">{item.description}</Typography>
      <Typography variant="caption">{geolocation.addressLabel}</Typography>
      <Stack direction="row">
        <ViewButton item={item} />
        <DeleteLocationButton item={item} />
        <DeleteItemButton item={item} />
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
