import { useEffect, useState } from 'react';
import { Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

import { hooks } from '../../config/queryClient';
import { iconsPerParent } from '../icons/icons';

const ItemsMarkers = ({
  tags,
}: {
  tags: string[];
}): JSX.Element | JSX.Element[] | undefined => {
  const map = useMap();

  const [bounds, setBounds] = useState({
    lat1: 0,
    lat2: 10,
    lng1: 0,
    lng2: 10,
  });
  const { data: itemGeolocations } = hooks.useItemsInMap({
    ...bounds,
    search: tags,
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

  return itemGeolocations?.map(({ lat, lng, item: { name, description } }) => (
    <Marker icon={iconsPerParent.MyItems} position={[lat, lng]}>
      <Popup>
        {name} <br /> {description}
      </Popup>
    </Marker>
  ));
};

export default ItemsMarkers;
