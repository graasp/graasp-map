import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

import { LatLng } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

type Props = {
  lat: number;
  lng: number;
  onClick: (e: { latlng: LatLng }) => void;
};

const GeographicSearch = ({ lat, lng, onClick }: Props): null => {
  const map = useMap();
  const provider = new OpenStreetMapProvider();

  useMapEvents({
    click: onClick,
  });

  const searchControl = new GeoSearchControl({
    provider,
  });

  useEffect(() => {
    map.addControl(searchControl);
    return () => {
      map.removeControl(searchControl);
    };
  }, []);

  useEffect(() => {
    map.flyTo({ lat, lng }, 10);
  }, [lat, lng, map]);

  return null;
};

export default GeographicSearch;
