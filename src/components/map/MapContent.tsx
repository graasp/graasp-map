import { useState } from 'react';

import { useQueryClientContext } from '../context/QueryClientContext';
import TopBar from '../topbar/TopBar';
import CurrentLocationMarker from './CurrentLocationMarker';
import CurrentMarker from './CurrentMarker';
import ItemsMarkers from './ItemsMarkers';
import MapEvents from './MapEvents';

const MapContent = (): JSX.Element => {
  const { itemId } = useQueryClientContext();
  const [bounds, setBounds] = useState<{
    lat1: number;
    lat2: number;
    lng1: number;
    lng2: number;
  }>();
  const [tags, setTags] = useState<string[]>([]);

  const onChangeTags = (newTags: any) => {
    setTags(newTags);
  };

  return (
    <>
      <MapEvents setBounds={setBounds} />

      <TopBar tags={tags} onChange={onChangeTags} />
      <CurrentLocationMarker />
      <ItemsMarkers tags={tags} itemId={itemId} bounds={bounds} />

      <CurrentMarker />
    </>
  );
};

export default MapContent;
