// @flow

import Task from 'records/task'

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
    index,
    payload: {
      text,
      isEdit: false
    }
  }
}

export function completeTask (index: number) {
  return {
    type: 'COMPLETE_TASK',
    index
  }
}

export function removeTask (index: number) {
  return {
    type: 'REMOVE_TASK',
    index
  }
}

export function removeTaskById (id: string) {
  return {
    type: 'REMOVE_TASK',
    id
  }
}

export function clearTasks () {
  return {
    type: 'CLEAR_TASKS'
  }
}
