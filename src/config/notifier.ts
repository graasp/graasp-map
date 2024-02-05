import { toast } from 'react-toastify';

import { Notifier, routines } from '@graasp/query-client';
import buildI18n, {
  FAILURE_MESSAGES,
  REQUEST_MESSAGES,
} from '@graasp/translations';

import axios from 'axios';

type ErrorPayload = Parameters<Notifier>[0]['payload'] & {
  failure?: unknown[];
};

type SuccessPayload = {
  message?: string;
};

type Payload = ErrorPayload & SuccessPayload;

const i18n = buildI18n();

const getErrorMessageFromPayload = (
  payload?: Parameters<Notifier>[0]['payload'],
) => {
  if (payload?.error && axios.isAxiosError(payload.error)) {
    return (
      payload.error.response?.data.message ?? FAILURE_MESSAGES.UNEXPECTED_ERROR
    );
  }

  return payload?.error?.message ?? FAILURE_MESSAGES.UNEXPECTED_ERROR;
};

const getSuccessMessageFromPayload = (payload?: SuccessPayload) =>
  i18n.t(payload?.message ?? 'The operation successfully proceeded');

const {
  createItemRoutine,
  deleteItemsRoutine,
  editItemRoutine,
  uploadFileRoutine,
  signOutRoutine,
  postItemFlagRoutine,
  recycleItemsRoutine,
  uploadItemThumbnailRoutine,
} = routines;

const notifier: Notifier = ({
  type,
  payload,
}: {
  type: string;
  payload?: Payload;
}) => {
  let message = null;
  switch (type) {
    // error messages
    case createItemRoutine.FAILURE:
    case deleteItemsRoutine.FAILURE:
    case editItemRoutine.FAILURE:
    case postItemFlagRoutine.FAILURE:
    case recycleItemsRoutine.FAILURE:
    case signOutRoutine.FAILURE:
    case uploadFileRoutine.FAILURE:
    case uploadItemThumbnailRoutine.FAILURE: {
      message = getErrorMessageFromPayload(payload);
      break;
    }
    // success messages
    case createItemRoutine.SUCCESS:
    case deleteItemsRoutine.SUCCESS:
    case editItemRoutine.SUCCESS:
    case postItemFlagRoutine.SUCCESS:
    case recycleItemsRoutine.SUCCESS:
    case signOutRoutine.SUCCESS:
    case uploadFileRoutine.SUCCESS:
    case uploadItemThumbnailRoutine.SUCCESS: {
      message = getSuccessMessageFromPayload(payload);
      break;
    }

    // progress messages
    // todo: this might be handled differently
    case uploadFileRoutine.REQUEST: {
      toast.info(i18n.t(REQUEST_MESSAGES.UPLOAD_FILES));
      break;
    }
    case uploadItemThumbnailRoutine.REQUEST: {
      toast.info(i18n.t(REQUEST_MESSAGES.UPLOAD_FILES));
      break;
    }
    default:
  }
  // error notification
  if (payload?.error && message) {
    toast.error(i18n.t(message));
  }
  // success notification
  else if (message) {
    // TODO: enable if not websockets
    // allow resend invitation
    toast.success(i18n.t(message));
  }
};
export default notifier;
