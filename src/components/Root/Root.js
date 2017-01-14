// @flow

import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import store from 'store'
import { NavBar } from 'components'

const View = styled.View`
  background-color: #FDF4F5;
  flex: 1;
`

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <View>
          <StatusBar barStyle='light-content' />
          <NavBar />
        </View>
      </Provider>
    )
  }
}
