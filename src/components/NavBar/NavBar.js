// @flow

import React, { Component } from 'react'
import Tasks from 'Tasklee/src/components/Tasks'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import * as taskActions from 'Tasklee/src/actions/tasks'

const Navigator = styled.NavigatorIOS`
  flex: 1;
`

const enhancer = connect(null, taskActions)

class NavBar extends Component {
  render () {
    const { addTask } = this.props

    return (
      <Navigator
        translucent={false}
        initialRoute={{
          component: Tasks,
          title: 'Tasklee',
          tintColor: 'white',
          barTintColor: '#DB2B39',
          titleTextColor: 'white',
          rightButtonIcon: require('../../../resources/images/add.png'),
          onRightButtonPress: addTask
        }}
      />
    )
  }
}

export default enhancer(NavBar)
