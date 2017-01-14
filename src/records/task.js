import { Record } from 'immutable'

const Task = Record({
  id: null,
  date: new Date(),
  text: '',
  isCompleted: false,
  state: 'disabled',
  isEdit: true
})

export default Task
