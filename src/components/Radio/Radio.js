// @flow

import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'

const images = {
  normal: require('Tasklee/resources/images/radio.png'),
  selected: require('Tasklee/resources/images/radio-selected.png'),
  disabled: require('Tasklee/resources/images/radio-disabled.png')
}

const TouchableHighlight = styled.TouchableHighlight`
  margin-right: 15;
`

export default class Radio extends Component {
  render () {
    const { onRadioClick, type } = this.props
    const src = images[type] || images.normal

    return (
      <TouchableHighlight
        activeOpacity={type === 'normal' ? 0.3 : 1}
        underlayColor='transparent'
        onPress={onRadioClick}
      >
        <Image source={src} />
      </TouchableHighlight>
    )
  }
}
