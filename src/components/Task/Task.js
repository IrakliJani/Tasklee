// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import Radio from 'Tasklee/src/components/Radio'

const TaskItem = styled.View`
  background-color: white;
  height: 60;
  flex-direction: row;
  align-items: center;
  padding-left: 15;
  padding-right: 15;
`

const Text = styled.Text`
  font-size: 17;
  color: #030303;
  text-decoration-line: ${props => props.isCompleted ? 'line-through' : 'none'};
  text-decoration-style: solid;
  text-decoration-color: #DB2B39;
`

export default class Task extends Component {
  componentDidMount () {
    if (this.refs.input) {
      this.refs.input.focus()
    }
  }

  render () {
    const {
      text, isEdit, isCompleted,
      onSubmitEditing, onRadioClick,
      state
    } = this.props

    return (
      <TaskItem>
        <Radio type={state} onRadioClick={onRadioClick} />

        { isEdit
          ?
            <TextInput
              style={{flex: 1}}
              ref='input'
              defaultValue={text}
              placeholder='Type in your priority task'
              returnKeyType='done'
              onSubmitEditing={({ nativeEvent: e }) => onSubmitEditing(e.text)}
            />
          :
            <Text isCompleted={isCompleted}>{text}</Text>
        }
      </TaskItem>
    )
  }
}
