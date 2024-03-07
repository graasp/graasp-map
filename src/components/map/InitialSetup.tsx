import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

import { useQueryClientContext } from '../context/QueryClientContext';

const InitialSetup = ({
  initialCenter,
}: {
  initialCenter?: { lat: number; lng: number };
}): null => {
  const { useItemsInMap, itemId } = useQueryClientContext();
  const [isInitial, setIsInitial] = useState(true);
  const map = useMap();

  // central point
  const { data: itemGeolocations } = useItemsInMap({
    parentItemId: itemId,
  });

  useEffect(() => {
    if (initialCenter || !isInitial) {
      return;
    }

    if (itemGeolocations && isInitial) {
      const c = itemGeolocations.map((g) => [g.lat, g.lng]);
      map.fitBounds(c);

      setIsInitial(false);
    }
  }, [itemGeolocations]);

  return null;
};

export default InitialSetup;
