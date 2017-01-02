import { PushNotificationIOS as Notification } from 'react-native'
import moment from 'moment'

Notification.addEventListener('register', () =>
  console.info('>> register'))

Notification.addEventListener('registrationError', () =>
  console.error('<< regerror'))

async function setup (onMorning = true, onEvening = true) {
  await Notification.requestPermissions()

  Notification.cancelAllLocalNotifications()

  const tomorrow = moment().add(1, 'day')
  const morning = tomorrow.hour(10).minute(0).second(0).toISOString()
  const evening = tomorrow.hour(18).minute(0).second(0).toISOString()

  if (onMorning) {
    Notification.scheduleLocalNotification({
      fireDate: morning,
      alertBody: 'Start your day by prioritizing your daily tasks',
      repeatInterval: 'day'
    })
  }

  if (onEvening) {
    Notification.scheduleLocalNotification({
      fireDate: evening,
      alertBody: 'Review your day',
      repeatInterval: 'day'
    })
  }

  Notification.getScheduledLocalNotifications(data =>
    console.info('scheduled notifications: ', data))
}

export { setup }
