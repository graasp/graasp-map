import { useRef } from 'react';
import { FeatureGroup, Marker } from 'react-leaflet';

import { DiscriminatedItem } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import { marker } from '../icons/icons';
import MarkerPopup from './MarkerPopup';

const ItemsMarkers = ({
  tags,
  bounds,
}: {
  tags: string[];
  itemId?: DiscriminatedItem['id'];
  bounds?: {
    lat1: number;
    lat2: number;
    lng1: number;
    lng2: number;
  };
}): JSX.Element | JSX.Element[] | undefined => {
  const groupRef = useRef<any>(null);
  const { useItemsInMap, itemId } = useQueryClientContext();
  const { data: itemGeolocations } = useItemsInMap({
    ...bounds,
    parentItemId: itemId,
    keywords: tags,
  });

  return (
    <FeatureGroup ref={groupRef}>
      {itemGeolocations?.map((geoloc) => (
        <Marker
          key={geoloc.id}
          icon={marker}
          position={[geoloc.lat, geoloc.lng]}
        >
          <MarkerPopup geolocation={geoloc} />
        </Marker>
      ))}
    </FeatureGroup>
  );
};

export default ItemsMarkers;
