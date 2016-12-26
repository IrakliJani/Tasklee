// @flow

export function addTask () {
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)

  return {
    type: 'ADD_TASK',
    id: id,
    payload: {
      id,
      text: '',
      isCompleted: false,
      isEdit: true
    }
  }
}

export function editTask (id: string, text: string) {
  return {
    type: 'EDIT_TASK',
    id: id,
    payload: {
      text,
      isEdit: false
    }
  }
}

export function completeTask (id: string) {
  return {
    type: 'COMPLETE_TASK',
    id: id
  }
}
