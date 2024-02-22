import { Marker, Popup } from 'react-leaflet';

import { ItemGeolocation } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';
import { greenIcon } from '../icons/icons';
import AddItemButton from './AddItemButton';

type Props = {
  point: Pick<ItemGeolocation, 'lat' | 'lng'>;
};

const CurrentMarker = ({ point }: Props): JSX.Element | null => {
  const { useAddressFromGeolocation } = useQueryClientContext();
  const { data: address } = useAddressFromGeolocation(point);

  if (!point) {
    return null;
  }

  return (
    <Marker icon={greenIcon} position={[point.lat, point.lng]}>
      <Popup>
        <>
          {address?.display_name ??
            'This location does not match a specific address.'}
          <br />
          <AddItemButton
            location={{
              ...point,
              addressLabel: address?.display_name,
              country: address?.country_code,
            }}
          />
        </>
      </Popup>
    </Marker>
  );
};

export default CurrentMarker;
