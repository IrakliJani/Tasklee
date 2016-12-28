// @flow

import { AsyncStorage } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { persistStore, autoRehydrate, createTransform } from 'redux-persist'
import { fromJS } from 'immutable'

import tasksReducer from 'Tasklee/src/reducers/tasks'
import settingsReducer from 'Tasklee/src/reducers/settings'

const rootReducer = combineReducers({
  tasks: tasksReducer,
  settings: settingsReducer
})

const store = createStore(rootReducer, undefined, autoRehydrate())

const immutableTransformer = createTransform(
  (inbound) => inbound.toJS(),
  (outbound) => fromJS(outbound)
)

persistStore(store, {
  storage: AsyncStorage,
  transforms: [immutableTransformer]
}).purge()

export default store
