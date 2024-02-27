import { Box, Stack } from '@mui/material';

import GeographicSearch from './GeographicSearch';
import Search from './Search';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TopBar = ({ onChange }: any): JSX.Element => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 450,
    }}
  >
    <Stack justifyContent="center" alignItems="center" py={2}>
      <Stack
        sx={{
          background: 'white',
        }}
        direction="row"
        gap={2}
        p={2}
      >
        <Stack>
          <GeographicSearch />
        </Stack>
        <Stack>|</Stack>
        <Stack>
          <Search onChange={onChange} />
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
export default TopBar;
