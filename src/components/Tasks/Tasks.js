// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
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
  render () {
    const { tasks, editTask, completeTask } = this.props

    return (
      <MainContainer>
        <Greeting>Here is your priority task list for today</Greeting>

        {tasks.entrySeq().map(([id, task], index) =>
          <Task
            key={id}
            autoFocus={index === 0}
            onRadioClick={() => completeTask(id)}
            onSubmitEditing={value => editTask(id, value)}
            {...task.toJS()}
          />
        )}
      </MainContainer>
    )
  }
}

export default enhancer(Tasks)
