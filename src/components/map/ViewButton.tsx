import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Tooltip } from '@mui/material';

import { DiscriminatedItem, PLAYER_ITEMS_PREFIX } from '@graasp/sdk';

import { GRAASP_PLAYER_HOST } from '../../config/env';

type Props = {
  item: DiscriminatedItem;
};

const ViewButton = ({ item }: Props): JSX.Element => {
  const link = new URL(
    `${GRAASP_PLAYER_HOST}${PLAYER_ITEMS_PREFIX}/${item.id}`,
  );

  return (
    <Link to={link.href}>
      <Tooltip title="View item in Graasp Player">
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default ViewButton;
