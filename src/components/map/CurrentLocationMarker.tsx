import { useTranslation } from 'react-i18next';
import { Marker, Popup } from 'react-leaflet';

import { currentLocationMarker } from '../icons/icons';

const CurrentLocationMarker = ({
  position,
}: {
  position?: { lat: number; lng: number };
}): JSX.Element | null => {
  const { t } = useTranslation();

  if (!position) {
    return null;
  }

  return (
    <Marker icon={currentLocationMarker} position={position}>
      <Popup>{t('Current location')}</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;
