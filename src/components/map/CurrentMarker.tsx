import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

import { Skeleton } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';

import { LatLng } from 'leaflet';

import { useQueryClientContext } from '../context/QueryClientContext';
import { greenIcon } from '../icons/icons';
import AddItemButton from './AddItemButton';

const CurrentMarker = (): JSX.Element | null => {
  // click on pint at the map
  const [clickedPoint, setClickedPoint] =
    useState<Pick<ItemGeolocation, 'lat' | 'lng'>>();
  const { useAddressFromGeolocation, currentMember } = useQueryClientContext();

  const { data: address, isLoading } = useAddressFromGeolocation(clickedPoint, {
    enabled: Boolean(currentMember),
  });

  const handleClick = (e: { latlng: LatLng }) => {
    const { lat, lng } = e.latlng;
    console.error(e);
    setClickedPoint({ lat, lng });
  };

  useMapEvents({
    click: handleClick,
  });

  if (!clickedPoint) {
    return null;
  }

  const renderAddress = () => {
    if (address?.addressLabel) {
      return address?.addressLabel;
    }

    if (isLoading) {
      return <Skeleton />;
    }

    return 'This location does not match a specific address.';
  };

  return (
    <Marker icon={greenIcon} position={[clickedPoint.lat, clickedPoint.lng]}>
      {currentMember && (
        <Popup>
          <>
            {renderAddress()}
            <br />
            <AddItemButton
              location={{
                ...clickedPoint,
                addressLabel: address?.addressLabel,
                country: address?.country,
              }}
            />
          </>
        </Popup>
      )}
    </Marker>
  );
};

export default CurrentMarker;
