import { Record } from 'immutable'

const Task = Record({
  id: null,
  text: '',
  isCompleted: false,
  isEdit: true
})

export default Task
