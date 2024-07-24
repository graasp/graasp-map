import { Marker } from 'react-leaflet';

import { ItemGeolocation, ThumbnailSize } from '@graasp/sdk';

import L from 'leaflet';

import { useQueryClientContext } from '../context/QueryClientContext';
import { marker } from '../icons/icons';
import MarkerPopup from './MarkerPopup';

const ItemMarker = ({
  geolocation,
}: {
  geolocation: ItemGeolocation;
}): JSX.Element => {
  const { useItemThumbnailUrl } = useQueryClientContext();
  const { data: thumbnailUrl } = useItemThumbnailUrl({
    item: geolocation.item,
    size: ThumbnailSize.Small,
  });

  return (
    <Marker
      icon={
        thumbnailUrl
          ? L.icon({
              iconUrl: thumbnailUrl,
              iconSize: [30, 30],
            })
          : marker
      }
      position={[geolocation.lat, geolocation.lng]}
    >
      <MarkerPopup geolocation={geolocation} />
    </Marker>
  );
};

export default ItemMarker;
