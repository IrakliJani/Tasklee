// @flow

export function addTask () {
  return {
    type: 'ADD_TASK',
    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
    payload: {
      text: '',
      isEdit: true
    }
  }
}

export function editTask (id: number, text: string) {
  return {
    type: 'EDIT_TASK',
    id: id,
    payload: {
      text,
      isEdit: false
    }
  }
}

export function completeTask (id: number) {
  return {
    type: 'COMPLETE_TASK',
    id: id
  }
}
