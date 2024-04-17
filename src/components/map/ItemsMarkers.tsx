import { useRef } from 'react';
import { FeatureGroup, Marker } from 'react-leaflet';
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
  const { useItemsInMap, itemId } = useQueryClientContext();
  const { data: itemGeolocations } = useItemsInMap({
    ...bounds,
    parentItemId: itemId,
    keywords: tags,
  });

  // color of clusters is defined by number of markers grouped together
  return (
    <FeatureGroup ref={groupRef}>
      <MarkerClusterGroup
        chunkedLoading
        // hide polygon area
        spiderLegPolylineOptions={{ opacity: 0 }}
        icon
      >
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
