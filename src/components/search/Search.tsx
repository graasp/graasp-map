import { Autocomplete, Box, Stack, TextField } from '@mui/material';

const Search = ({
  onChange,
}: {
  onChange: (newTags: string[]) => void;
}): JSX.Element => {
  // const [anchor, setAnchor] = useState<HTMLInputElement | null>(null);
  // const [markerSearch, setMarkerSearch] = useState('');
  // const [open, setOpen] = useState(false);

  // const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {
  //   setAnchor(e.currentTarget);
  // };

  // const handleDialogClose = () => {};

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setMarkerSearch(e.target.value);
  // };

  const onChangeTags = (_e: unknown, newValue: string[]) => {
    onChange(newValue);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={2}
      >
        <Stack
          sx={{
            background: 'white',
          }}
          p={2}
        >
          <form>
            <Autocomplete
              multiple
              options={[]}
              // getOptionLabel={(option) => option.title}
              freeSolo
              renderInput={(params) => (
                <TextField
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...params}
                  placeholder="Search here..."
                  variant="outlined"
                  label="Search"
                  sx={{ width: 400 }}
                />
              )}
              onChange={onChangeTags}
            />
            {/* <TextField
        placeholder="Search About an Item"
        variant="outlined"
        onClick={handleInputClick}
        value={markerSearch}
        onChange={handleInputChange}
        sx={{ background: 'white' }}
        />
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
      /> */}
          </form>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Search;
