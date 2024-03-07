import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Marker, useMap, useMapEvents } from 'react-leaflet';

import { DiscriminatedItem } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import { iconsPerParent } from '../icons/icons';
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
  const groupRef = useRef(null);
  const map = useMap();
  const { useItemsInMap, itemId } = useQueryClientContext();
  const { data: itemGeolocations } = useItemsInMap({
    ...bounds,
    parentItemId: itemId,
    keywords: tags,
  });

  useEffect(() => {
    if (itemId && itemGeolocations && groupRef) {
      const group = groupRef.current; // get native featureGroup instance
      if (group.getBounds().getNorthEast()) {
        map.fitBounds(group.getBounds());
      }
    }
  }, []);

  return (
    <FeatureGroup ref={groupRef}>
      {itemGeolocations?.map((geoloc) => (
        <Marker
          key={geoloc.id}
          icon={iconsPerParent.MyItems}
          position={[geoloc.lat, geoloc.lng]}
        >
          <MarkerPopup geolocation={geoloc} />
        </Marker>
      ))}
    </FeatureGroup>
  );
};

export default ItemsMarkers;
