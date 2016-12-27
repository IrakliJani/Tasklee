// @flow

import { List } from 'immutable'
import Task from 'Tasklee/src/records/task'

type ActionType = {
  type: string,
  id: ?string,
  task: ?Task,
  payload: ?{}
}

export default function (
  state: List<Task> = List(),
  action: ActionType
) {
  switch (action.type) {
    case 'ADD_TASK':
      return state.push(action.task)

    case 'EDIT_TASK':
      return state.map(task =>
        task.id === action.id
          ? task.merge(action.payload)
          : task
        )

    case 'COMPLETE_TASK':
      return state.map(task =>
        task.id === action.id
          ? task.set('isCompleted', true)
          : task
      )

    case 'CLEAR_TASKS':
      return List()

    default:
      return state
  }
}
