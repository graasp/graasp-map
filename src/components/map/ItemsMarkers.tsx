import { useEffect, useRef, useState } from 'react';
import { FeatureGroup, Marker, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { useQueryClientContext } from '../context/QueryClientContext';
import { marker } from '../icons/icons';
import MarkerPopup from './MarkerPopup';

const ItemsMarkers = ({
  tags,
  bounds,
}: {
  tags: string[];
  bounds?: {
    lat1: number;
    lat2: number;
    lng1: number;
    lng2: number;
  };
}): JSX.Element | JSX.Element[] | undefined => {
  const groupRef = useRef<any>(null);
  const map = useMap();
  const { useItemsInMap, item } = useQueryClientContext();
  const { data: itemGeolocations } = useItemsInMap({
    ...bounds,
    parentItemId: item?.id,
    keywords: tags,
  });
  const [prevState, setPrevState] = useState(itemGeolocations);

  useEffect(() => {
    if (JSON.stringify(itemGeolocations) !== JSON.stringify(prevState)) {
      // on positive search, focus on items
      if (itemGeolocations?.length !== prevState?.length && tags.length) {
        map.fitBounds(groupRef.current.getBounds());
      }

      setPrevState(itemGeolocations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags, itemGeolocations]);

  // color of clusters is defined by number of markers grouped together
  return (
    <FeatureGroup ref={groupRef}>
      <MarkerClusterGroup chunkedLoading showCoverageOnHover={false}>
        {itemGeolocations?.map((geoloc) => (
          <Marker
            key={geoloc.id}
            icon={marker}
            position={[geoloc.lat, geoloc.lng]}
          >
            <MarkerPopup geolocation={geoloc} />
          </Marker>
        ))}
      </MarkerClusterGroup>
    </FeatureGroup>
  );
};

export default ItemsMarkers;
