import { success } from '@pnotify/core'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
// import * as Confirm from '@pnotify/confirm'
import '@pnotify/confirm/dist/PNotifyConfirm.css'

export default function createNotice(): void {
  success({
    title: 'All done!',
    text: 'Apartment submit successfully!',
    delay: 500,
    styling: 'brighttheme',
    shadow: true,
    mode: 'light',
  })
}
