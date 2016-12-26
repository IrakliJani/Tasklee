// @flow

import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Task from 'Tasklee/src/components/Task'
import * as taskActions from 'Tasklee/src/actions/tasks'

const MainContainer = styled.View`
  background-color: #FDF4F5;
  flex: 1;
`

const Greeting = styled.Text`
  margin-top: 20;
  margin-bottom: 20;
  text-align: center;
  color: #8F8E94;
  font-size: 13;
`

const enhancer = connect(state => ({ tasks: state.tasks }), taskActions)

class Tasks extends Component {
  completeTask (state, task) {
    const { completeTask } = this.props
    console.log('>>>>>>>>>>>>>> task: ', task)

    if (state === 'disabled') {
      Alert.alert(
        'You can\'t complete this Task',
        `In order to mark this Task as completed,
you should first complete all previous Tasks`,
        [
          { text: 'OK' }
        ]
      )
    } else {
      completeTask(task.get('id'))
    }
  }

  render () {
    const { editTask } = this.props
    const tasks = this.props.tasks.toList()

    return (
      <MainContainer>
        <Greeting>Here is your priority task list for today</Greeting>

        {tasks.map((task, index) => {
          const id = task.get('id')
          const prevIndex = index - 1
          const prev = prevIndex >= 0 ? tasks.get(prevIndex) : null

          var state = 'disabled'

          if (task.get('isCompleted')) {
            state = 'selected'
          } else if (!prev || (prev && prev.get('isCompleted'))) {
            state = 'normal'
          }

          return <Task
            key={id}
            state={state}
            autoFocus={index === 0}
            onRadioClick={this.completeTask.bind(this, state, task)}
            onSubmitEditing={value => editTask(id, value)}
            {...task.toJS()}
          />
        })}
      </MainContainer>
    )
  }
}

export default enhancer(Tasks)
