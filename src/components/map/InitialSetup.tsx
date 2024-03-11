import { Dispatch, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

import { useQueryClientContext } from '../context/QueryClientContext';

const InitialSetup = ({
  showMap,
  setShowMap,
}: {
  showMap: boolean;
  setShowMap: Dispatch<boolean>;
}): null => {
  const { useItemsInMap, itemId } = useQueryClientContext();
  const [isInitial, setIsInitial] = useState(true);
  const map = useMap();

  // central point
  const { data: itemGeolocations } = useItemsInMap({
    parentItemId: itemId,
  });

  useEffect(() => {
    if (showMap || !isInitial) {
      return;
    }

    if (itemGeolocations && isInitial) {
      const c = itemGeolocations.map((g) => [g.lat, g.lng]);
      if (c.length) {
        map.fitBounds(c as any);
        setShowMap(true);
        setIsInitial(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemGeolocations]);

  return null;
};

export default InitialSetup;
