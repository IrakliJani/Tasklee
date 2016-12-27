// @flow

import React, { Component } from 'react'
import { Alert, ListView, Button } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Task from 'Tasklee/src/components/Task'
import TaskRecord from 'Tasklee/src/records/task'
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

const Separator = styled.View`
  height: 1;
  background-color: #330A0E;
  margin: 0 10;
  opacity: 0.1
`

const enhancer = connect(state => ({ tasks: state.tasks }), taskActions)

class Tasks extends Component {
  state: { [key: string]: any }

  constructor (props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) =>
        !TaskRecord(oldRow).equals(TaskRecord(newRow))
    })

    this.state = { dataSource }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.tasks && !nextProps.tasks.equals(this.props.tasks)) {
      const data = nextProps.tasks.toJS()

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
    }
  }

  completeTask (state, id) {
    const { completeTask } = this.props

    if (state === 'disabled') {
      Alert.alert(
        'You can\'t complete this Task',
        `In order to mark this Task completed, \
you must complete all previous Tasks`,
        [{ text: 'OK' }]
      )
    } else {
      completeTask(id)
    }
  }

  renderRow ({ id }, _, rowId) {
    const { editTask, tasks } = this.props
    const task = tasks.find(t => t.id === id)
    const prevIndex = rowId - 1
    const prev = prevIndex >= 0 ? tasks.get(prevIndex) : null
    var state = 'disabled'

    if (task.isCompleted) {
      state = 'selected'
    } else if (!prev || (prev && prev.isCompleted)) {
      state = 'normal'
    }

    return <Task
      key={id}
      state={state}
      autoFocus={rowId === 0}
      onRadioClick={this.completeTask.bind(this, state, id)}
      onSubmitEditing={value => editTask(id, value)}
      {...task.toJS()}
    />
  }

  render () {
    const { clearTasks, tasks } = this.props

    return (
      <MainContainer>
        <Greeting>
          Here is your priority task list for today
        </Greeting>

        <Button
          title='clean'
          color='red'
          style={{ marginBottom: 40 }}
          onPress={clearTasks}
        />

        { tasks.size > 0 && <Separator /> }

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(s, r) => <Separator key={`${s}-${r}`} />}
        />
      </MainContainer>
    )
  }
}

export default enhancer(Tasks)
