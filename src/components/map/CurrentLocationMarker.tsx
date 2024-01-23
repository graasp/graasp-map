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

  const success = (pos) => {
    const crd = pos.coords;
    setPosition([crd.latitude, crd.longitude]);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

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
