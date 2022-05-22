import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'

export const util: {
  message?: MessageApiInjection
  dialog?: DialogApiInjection
} = {}
