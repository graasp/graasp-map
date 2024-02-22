import { useState } from 'react';

import { countries } from '../../data/data';
import { Country } from '../../types';
import AutoCompleteInput from '../autocomplete';

const CountryForm = (): JSX.Element => {
  // countries search if not able to geolocalize user
  // const [showCountryForm, setShowCountryForm] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  //   useEffect(() => {
  //     if (selectedCountry) {
  //       const { latitude, longitude } = selectedCountry;
  //       setCenter([latitude, longitude]);
  //     }
  //   }, [selectedCountry]);

  return (
    <div
      style={{
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        zIndex: 450,
        backgroundColor: 'white',
      }}
    >
      <AutoCompleteInput
        items={countries}
        label="Country"
        value={selectedCountry}
        setValue={setSelectedCountry}
      />
    </div>
  );
};

export default CountryForm;
