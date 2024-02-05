import { useEffect, useState } from 'react';
import { Popup } from 'react-leaflet';

import { Stack, Typography } from '@mui/material';

import { DiscriminatedItem, ItemGeolocation } from '@graasp/sdk';

import notifier from '../../config/notifier';
import { axios } from '../../config/queryClient';
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
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      await axios
        .get<{ display_name: string }>(
          'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=47.217954&lon=-1.552918',
          {
            responseType: 'json',
          },
        )
        .then(({ data }) => {
          setAddress(data.display_name);
        })
        .catch((e) => {
          notifier(e);
        });
    })();
  }, [lat, lng]);

  const { name, description } = item;

  return (
    <Popup>
      <Typography variant="h5">{name.slice(0, NAME_MAX_LENGTH)}</Typography>
      {/* TODO: slice and show html  */}
      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="subtitle1">{address}</Typography>
      <Stack direction="row">
        <ViewButton item={item} />
        <DeleteLocationButton item={item} />
        <DeleteItemButton item={item} />
      </Stack>
    </Popup>
  );
};

export default MarkerPopup;
