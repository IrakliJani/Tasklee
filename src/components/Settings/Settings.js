// @flow

import React, { Component } from 'react'
import { Slider, Switch } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import * as settingsActions from 'Tasklee/src/actions/settings'

const Label = styled.Text`
  margin-top: 20;
  margin-bottom: 10;
  color: #8F8E94;
  font-size: 14;
`

const MainContainer = styled.View`
  background-color: #FDF4F5;
  flex: 1;
  padding: 20;
`

const enhancer = connect(
  state => ({ settings: state.settings }),
  settingsActions
)

class Settings extends Component {
  render () {
    const { setTaskLimit, setNotification, settings } = this.props

    return (
      <MainContainer>
        <Label>
          Daily task limit: {settings.get('taskLimit')}
        </Label>

        <Slider
          onValueChange={(value) => setTaskLimit(value)}
          value={settings.get('taskLimit')}
          minimumValue={1}
          maximumValue={10}
          step={1}
          minimumTrackTintColor='#DB2B39'
        />

        <Label>
          Notify in the morning
        </Label>

        <Switch
          value={settings.get('morningNotification')}
          onValueChange={(value) => setNotification('morning', value)}
          onTintColor='#27D772'
        />

        <Label>
          Notify in the evening
        </Label>

        <Switch
          value={settings.get('eveningNotification')}
          onValueChange={(value) => setNotification('evening', value)}
          onTintColor='#27D772'
        />
      </MainContainer>
    )
  }
}

export default enhancer(Settings)
