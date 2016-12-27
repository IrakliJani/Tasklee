// @flow

import Settings from 'Tasklee/src/records/settings'

type ActionType = {
  id: number,
  type: string,
  which: 'morning' | 'evening',
  value: string | number
}

export default function (
  state: Settings = new Settings(),
  action: ActionType
) {
  switch (action.type) {
    case 'SET_TASK_LIMIT':
      return state.set('taskLimit', action.value)

    case 'SET_NOTIFICATION':
      return state.set(`${action.which}Notification`, action.value)

    default:
      return state
  }
}
