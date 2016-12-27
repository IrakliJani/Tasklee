import { Record } from 'immutable'

const Settings = Record({
  taskLimit: 5,
  morningNotification: true,
  eveningNotification: true
})

export default Settings
