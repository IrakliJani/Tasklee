// @flow

import { Map } from 'immutable'

type ActionType = { id: number; type: string; payload: ?{} }

export default function (state: Map<number, {}> = Map(), action: ActionType) {
  switch (action.type) {
    case 'ADD_TASK':
      return state.set(action.id, Map(action.payload))

    case 'EDIT_TASK':
      return state.update(action.id, task =>
        task.merge(Map(action.payload)))

    case 'COMPLETE_TASK':
      return state.update(action.id, task =>
        task.set('isCompleted', true))

    default:
      return state
  }
}
