import { useEffect, useState } from 'react';
import { Marker, useMap, useMapEvents } from 'react-leaflet';

import { DiscriminatedItem } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import { iconsPerParent } from '../icons/icons';
import MarkerPopup from './MarkerPopup';

const ItemsMarkers = ({
  tags,
  itemId,
}: {
  tags: string[];
  itemId?: DiscriminatedItem['id'];
}): JSX.Element | JSX.Element[] | undefined => {
  const map = useMap();

  const [bounds, setBounds] = useState({
    lat1: 0,
    lat2: 10,
    lng1: 0,
    lng2: 10,
  });
  const { hooks } = useQueryClientContext();
  const { data: itemGeolocations } = hooks.useItemsInMap({
    ...bounds,
    keywords: tags,
    parentItemId: itemId,
  });

  const updateBounds = () => {
    const b = map.getBounds();
    setBounds({
      lat1: b.getSouthWest().lat,
      lat2: b.getNorthEast().lat,
      lng1: b.getSouthWest().lng,
      lng2: b.getNorthEast().lng,
    });
  };

  useMapEvents({
    zoomend: (_e) => {
      updateBounds();
    },
    dragend: (_e) => {
      updateBounds();
    },
  });

  useEffect(() => {
    updateBounds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return itemGeolocations?.map(({ lat, lng, item }) => (
    <Marker icon={iconsPerParent.MyItems} position={[lat, lng]}>
      <MarkerPopup lat={lat} lng={lng} item={item} />
    </Marker>
  ));
};

export default ItemsMarkers;
