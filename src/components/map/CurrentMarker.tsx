import { Marker, Popup } from 'react-leaflet';

import { Skeleton } from '@mui/material';

import { ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import { greenIcon } from '../icons/icons';
import AddItemButton from './AddItemButton';

type Props = {
  point: Pick<ItemGeolocation, 'lat' | 'lng'>;
};

const CurrentMarker = ({ point }: Props): JSX.Element | null => {
  const { useAddressFromGeolocation, geolocationKey } = useQueryClientContext();
  const { data: address, isLoading } = useAddressFromGeolocation({
    ...point,
    key: geolocationKey,
  });

  if (!point) {
    return null;
  }

  const location = address?.results?.[0];

  const renderAddress = () => {
    if (location?.formatted) {
      return location?.formatted;
    }

    if (isLoading) {
      return <Skeleton />;
    }

    return 'This location does not match a specific address.';
  };

  return (
    <Marker icon={greenIcon} position={[point.lat, point.lng]}>
      <Popup>
        <>
          {renderAddress()}
          <br />
          <AddItemButton
            location={{
              ...point,
              addressLabel: location?.formatted,
              country: location?.country_code,
            }}
          />
        </>
      </Popup>
    </Marker>
  );
};

export default CurrentMarker;
