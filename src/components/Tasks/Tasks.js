// @flow

import React, { Component } from 'react'
import { Alert, ListView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import Task from 'Tasklee/src/components/Task'
import TaskRecord from 'Tasklee/src/records/task'
import * as taskActions from 'Tasklee/src/actions/tasks'
import Swipeout from 'react-native-swipeout'

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
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) })
    }
  }

  completeTask (index, state) {
    const { completeTask } = this.props

    if (state === 'disabled') {
      Alert.alert(
        'You can\'t complete this Task',
        `In order to mark this Task completed, \
you must complete all previous Tasks`,
        [{ text: 'OK' }]
      )
    } else {
      completeTask(index)
    }
  }

  renderRow ({ id }, _, rowId) {
    const index = Number(rowId)
    const task = this.props.tasks.get(index)

    const swipeoutButtons = [
      {
        text: 'Delete',
        backgroundColor: '#DB2B39',
        underlayColor: '#DC0012',
        onPress: this.props.removeTask.bind(this, index)
      }
    ]

    return (
      <Swipeout
        key={id}
        right={swipeoutButtons}
        backgroundColor='white'
      >
        <Task
          state={task.state}
          autoFocus={index === 0}
          onRadioClick={this.completeTask.bind(this, index, task.state)}
          onSubmitEditing={value => this.props.editTask(index, value)}
          {...task.toJS()}
        />
      </Swipeout>
    )
  }

  render () {
    const { tasks } = this.props

    return (
      <MainContainer>
        <Greeting>
          Here is your priority task list for today
        </Greeting>

        {/* <Button
          title='clean'
          color='red'
          style={{ marginBottom: 40 }}
          onPress={clearTasks}
        /> */}

        { tasks.size > 0 && <Separator /> }

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(s, r) => <Separator key={`${s}-${r}`} />}
          enableEmptySections
        />
      </MainContainer>
    )
  }
}

export default enhancer(Tasks)
