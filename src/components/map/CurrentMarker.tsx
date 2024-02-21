import { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import AddItemButton from './AddItemButton';

type Props = {
  point: Pick<ItemGeolocation, 'lat' | 'lng'>;
};

export type AddressResult = {
  display_name?: string;
  address?: { country_code?: string };
};

const CurrentMarker = ({ point }: Props): JSX.Element | null => {
  const [address, setAddress] = useState<AddressResult | null>(null);
  const { getAddressFromLatLng } = useQueryClientContext();

  useEffect(() => {
    if (point) {
      getAddressFromLatLng(point)
        .then(({ data }) => setAddress(data))
        .catch((e) => {
          console.error(e);
        });
    }
  }, [point]);

  if (!point) {
    return null;
  }

  return (
    <Marker position={[point.lat, point.lng]}>
      <Popup>
        <>
          {address?.display_name ??
            'This location does not match a specific address.'}
          <br />
          <AddItemButton
            location={{
              ...point,
              addressLabel: address?.display_name,
              country: address?.address?.country_code,
            }}
          />
        </>
      </Popup>
    </Marker>
  );
};

export default CurrentMarker;
