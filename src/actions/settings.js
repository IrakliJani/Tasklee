// @flow

export function setTaskLimit (value: number) {
  return {
    type: 'SET_TASK_LIMIT',
    value
  }
}

export function setNotification (which: 'morning' | 'evening', value: string) {
  return {
    type: 'SET_NOTIFICATION',
    which,
    value
  }
}
