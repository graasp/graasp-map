import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { iconPerson } from '../icons/icons';

const CurrentLocationMarker = (): JSX.Element | null => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos: {
    coords: { latitude: number; longitude: number };
  }) => {
    const crd = pos.coords;
    setPosition([crd.latitude, crd.longitude]);
  };

  navigator.geolocation.getCurrentPosition(
    success,
    (err: { code: number; message: string }) => {
      // eslint-disable-next-line no-console
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    options,
  );

  if (!position) {
    return null;
  }

  return (
    <Marker icon={iconPerson} position={position}>
      <Popup>Current location</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;
