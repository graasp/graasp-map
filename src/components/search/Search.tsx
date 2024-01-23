import { ChangeEvent, MouseEvent, useState } from 'react';

import { TextField } from '@mui/material';

import CustomSearch from './CustomSearchMenu';

const Search = (): JSX.Element => {
  const [anchor, setAnchor] = useState<HTMLInputElement | null>(null);
  const [markerSearch, setMarkerSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
    setAnchor(e.currentTarget);
  };

  const handleDialogClose = () => {};

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMarkerSearch(e.target.value);
  };

  return (
    <form className="custom-search-input">
      <TextField
        placeholder="Search About an Item"
        variant="outlined"
        onClick={handleInputClick}
        value={markerSearch}
        onChange={handleInputChange}
        sx={{ background: 'white' }}
      />
      {open && (
        <CustomSearch
          isItemSearchDialogOpen={open}
          itemsList={[]}
          setSelectedItem={() => {}}
          closeMenu={handleDialogClose}
          selectedTags={[]}
          //   isChecked={true}
          setIsChecked={() => {}}
          setSelectedTags={() => []}
          anchorEl={anchor}
        />
      )}
    </form>
  );
};

export default Search;
