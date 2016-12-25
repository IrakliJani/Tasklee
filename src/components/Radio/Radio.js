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
    const { onRadioClick } = this.props
    const src = images[this.props.type] || images.normal

    return (
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor='transparent'
        onPress={onRadioClick}
      >
        <Image source={src} />
      </TouchableHighlight>
    )
  }
}
