// @flow

import { Map } from 'immutable'

type ActionType = {
  id: number,
  type: string,
  which: 'morning' | 'evening',
  value: string | number
}

const defaultState = Map({
  taskLimit: 5,
  morningNotification: true,
  eveningNotification: true
})

export default function (state: Map<string, any> = defaultState, action: ActionType) {
  switch (action.type) {
    case 'SET_TASK_LIMIT':
      return state.set('taskLimit', action.value)

    case 'SET_NOTIFICATION':
      return state.set(`${action.which}Notification`, action.value)

    default:
      return state
  }
}
