// @flow

import React, { Component } from 'react'
import { NavigatorIOS, Alert } from 'react-native'
import Tasks from 'Tasklee/src/components/Tasks'
import Settings from 'Tasklee/src/components/Settings'
import { connect } from 'react-redux'
import * as taskActions from 'Tasklee/src/actions/tasks'

const enhancer = connect(
  (state) => ({ tasks: state.tasks, settings: state.settings }),
  taskActions
)

class NavBar extends Component {
  goToSettings () {
    this.refs.nav.push({
      component: Settings,
      title: 'Settings',
      backButtonTitle: 'Tasks',
      tintColor: 'white',
      barTintColor: '#DB2B39',
      titleTextColor: 'white'
    })
  }

  addTask () {
    const { settings, tasks, addTask } = this.props
    const taskLimit = settings.get('taskLimit')

    if (tasks.size === taskLimit) {
      Alert.alert(
        'Task limit has been reached',
        `Maximum allowed number of tasks is ${taskLimit}.\
          You can change this in Settings`,
        [
          { text: 'OK' },
          { text: 'Settings', onPress: () => this.goToSettings() }
        ]
      )
    } else {
      addTask()
    }
  }

  render () {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        ref='nav'
        translucent={false}
        initialRoute={{
          component: Tasks,
          title: 'Tasklee',
          tintColor: 'white',
          barTintColor: '#DB2B39',
          titleTextColor: 'white',
          leftButtonIcon: require('../../../resources/images/add.png'),
          onLeftButtonPress: this.goToSettings.bind(this),
          rightButtonIcon: require('../../../resources/images/add.png'),
          onRightButtonPress: this.addTask.bind(this)
        }}
      />
    )
  }
}

export default enhancer(NavBar)
