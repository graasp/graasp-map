import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Tooltip } from '@mui/material';

import { DiscriminatedItem } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';

type Props = {
  item: DiscriminatedItem;
};

// eslint-disable-next-line arrow-body-style
const ViewButton = ({ item }: Props): JSX.Element => {
  const { viewItem } = useQueryClientContext();
  return (
    <Tooltip title="View item in Graasp Player">
      <IconButton onClick={() => viewItem(item)}>
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ViewButton;
