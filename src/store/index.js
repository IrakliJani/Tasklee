// @flow

import { createStore, combineReducers } from 'redux'

import tasksReducer from 'Tasklee/src/reducers/tasks'
import settingsReducer from 'Tasklee/src/reducers/settings'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  settings: settingsReducer
})

const store = createStore(rootReducer)

export default store
