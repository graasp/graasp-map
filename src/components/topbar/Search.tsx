import { Autocomplete, TextField } from '@mui/material';

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
            label="Filters"
            sx={{ width: 300 }}
          />
        )}
        onChange={onChangeTags}
      />
    </form>
  );
};
export default Search;
