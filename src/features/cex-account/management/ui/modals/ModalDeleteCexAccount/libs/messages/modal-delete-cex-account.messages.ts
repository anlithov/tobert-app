import { defineMessagesExtended } from '../../../../../../../../zolp/shared/lib/helpers/define-messages-extended.ts';

export const modalDeleteCexAccountMessages = defineMessagesExtended(
  'modal.DeleteCexAccount',
)({
  successTitle: 'Success',
  successDescription: 'CEX account has been deleted successfully',
  loadingTitle: 'Processing...',
  loadingDescription: 'Wait. We are handling your request.',
});
