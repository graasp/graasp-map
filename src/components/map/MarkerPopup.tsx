import { Popup } from 'react-leaflet';

import { Stack, Typography } from '@mui/material';

import { DiscriminatedItem, ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import DeleteItemButton from './DeleteItemButton';
import DeleteLocationButton from './DeleteLocationButton';
import ViewButton from './ViewButton';

const NAME_MAX_LENGTH = 20;

const MarkerPopup = ({
  item,
  lat,
  lng,
}: {
  item: DiscriminatedItem;
  lat: ItemGeolocation['lat'];
  lng: ItemGeolocation['lng'];
}): JSX.Element => {
  const { useAddressFromGeolocation } = useQueryClientContext();
  const { data: address } = useAddressFromGeolocation({ lat, lng });
  const { name, description } = item;

  return (
    <Popup>
      <Typography variant="h5">{name.slice(0, NAME_MAX_LENGTH)}</Typography>
      {/* TODO: slice and show html  */}
      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="caption">{address?.display_name}</Typography>
      <Stack direction="row">
        <ViewButton item={item} />
        <DeleteLocationButton item={item} />
        <DeleteItemButton item={item} />
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
