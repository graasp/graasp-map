import React, { useState } from 'react';
import { useMap } from 'react-leaflet';

import { useQueryClientContext } from '../context/QueryClientContext';
import TopBar from '../topbar/TopBar';
import CurrentLocationMarker from './CurrentLocationMarker';
import CurrentMarker from './CurrentMarker';
import InitialSetup from './InitialSetup';
import ItemsMarkers from './ItemsMarkers';
import MapEvents from './MapEvents';

const MapContent = ({ initialCenter }: any): JSX.Element => {
  const { itemId } = useQueryClientContext();
  const [bounds, setBounds] = useState();
  const [tags, setTags] = useState<string[]>([]);

  const onChangeTags = (newTags: any) => {
    setTags(newTags);
  };

  return (
    <>
      <InitialSetup initialCenter={initialCenter} />
      <MapEvents center={initialCenter} setBounds={setBounds} />

      <TopBar tags={tags} onChange={onChangeTags} />
      <CurrentLocationMarker />
      <ItemsMarkers tags={tags} itemId={itemId} bounds={bounds} />

      <CurrentMarker />
    </>
  );
};

export default MapContent;
