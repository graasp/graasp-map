import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Tooltip } from '@mui/material';

import { DiscriminatedItem, buildItemLinkForBuilder } from '@graasp/sdk';

import { GRAASP_BUILDER_HOST } from '../../config/env';

type Props = {
  item: DiscriminatedItem;
};

const ViewButton = ({ item }: Props): JSX.Element => {
  const link = buildItemLinkForBuilder({
    origin: GRAASP_BUILDER_HOST,
    itemId: item.id,
  });
  return (
    <Link to={link}>
      <Tooltip title="View item in Graasp Builder">
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default ViewButton;
