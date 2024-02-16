import { useState } from 'react';

import { DialogActions, DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { DiscriminatedItem } from '@graasp/sdk';
import { COMMON } from '@graasp/translations';
import { Button, DeleteButton } from '@graasp/ui';

import { useCommonTranslation, useMapTranslation } from '../../config/i18n';
import { mutations } from '../../config/queryClient';
import { MAP } from '../../langs/constants';

type Props = {
  item: DiscriminatedItem;
};

const DeleteItemButton = ({ item }: Props): JSX.Element => {
  const { t } = useMapTranslation();
  const { t: translateCommon } = useCommonTranslation();
  const { mutate: recycleItems } = mutations.useRecycleItems();
  const [open, setOpen] = useState(false);

  const { name, id } = item;

  const onDelete = () => {
    recycleItems([id]);
  };
  const onClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // onClose(selectedValue);
    setOpen(false);
    // setSelectedValue(selectedValue);
  };

  return (
    <>
      <DeleteButton text={t(MAP.DELETE_ITEM_TITLE)} onClick={onClick} />
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{t(MAP.DELETE_ITEM_TITLE)}</DialogTitle>
        <DialogContent>
          {t(MAP.DELETE_ITEM_EXPLANATION, { name })}
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setOpen(false)}>
            {translateCommon(COMMON.CANCEL_BUTTON)}
          </Button>
          <Button color="error" onClick={onDelete}>
            {t(MAP.DELETE_ITEM_BUTTON)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteItemButton;
