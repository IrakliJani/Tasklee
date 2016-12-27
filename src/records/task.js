import { Record } from 'immutable'

const Task = Record({
  id: null,
  text: '',
  isCompleted: false,
  state: 'disabled',
  isEdit: true
})

export default Task
