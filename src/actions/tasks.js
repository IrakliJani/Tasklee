// @flow

import Task from 'Tasklee/src/records/task'

export function addTask () {
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

  return {
    type: 'ADD_TASK',
    task: new Task({ id })
  }
}

export function editTask (index: number, text: string) {
  return {
    type: 'EDIT_TASK',
    index: index,
    payload: {
      text,
      isEdit: false
    }
  }
}

export function completeTask (index: number) {
  return {
    type: 'COMPLETE_TASK',
    index: index
  }
}

export function clearTasks () {
  return {
    type: 'CLEAR_TASKS'
  }
}
