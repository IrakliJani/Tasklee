// @flow

import { createStore, combineReducers } from 'redux'
import tasksReducer from 'Tasklee/src/reducers/tasks'

const rootReducer = combineReducers({
  tasks: tasksReducer
})

const store = createStore(rootReducer)

export default store
