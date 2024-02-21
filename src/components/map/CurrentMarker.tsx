import { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import AddItemButton from './AddItemButton';

type Props = {
  point: Pick<ItemGeolocation, 'lat' | 'lng'>;
};

type AddressResult = {
  display_name?: string;
  address?: { country_code?: string };
};

const CurrentMarker = ({ point }: Props): JSX.Element | null => {
  const [address, setAddress] = useState<AddressResult | null>(null);
  const { axios } = useQueryClientContext();

  useEffect(() => {
    if (point) {
      axios
        .get<AddressResult>(
          `https://nominatim.openstreetmap.org/reverse?lat=${point.lat}&lon=${point.lng}&format=jsonv2`,
          {
            responseType: 'json',
          },
        )
        .then(({ data }) => setAddress(data));
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
