import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, Tooltip } from '@mui/material';

import { DiscriminatedItem } from '@graasp/sdk';

import { useQueryClientContext } from '../context/QueryClientContext';

type Props = {
  item: DiscriminatedItem;
};

const ViewButton = ({ item }: Props): JSX.Element => {
  const { viewItem, isMobileApp } = useQueryClientContext();

  const onClick = () => {
    if (!isMobileApp) {
      viewItem(item);
    } else {
      // todo: replace with universal/deep link? not sure it works inside iframe..
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ itemId: item.id, action: 'open-player' }),
        '*',
      );
    }
  };

  return (
    <Tooltip title="View item in Graasp Player">
      <IconButton onClick={onClick}>
        <VisibilityIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ViewButton;
