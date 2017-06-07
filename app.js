import React from 'react'
import Wrapper from './components/Wrapper'
import Text from './components/Text'
import Header from './components/Header'
import Input from './containers/Input'

import { createComponent } from 'react-fela'
import { combineRules } from 'fela'
import { mapProps } from 'recompose'

const enhancer = mapProps(props => props)

const rules = props => ({
  lineHeight: '17px'
})

const SmallText = createComponent(combineRules(props => ({
  background: 'cyan'
}), rules), Text)

const SmallEnhancedText = createComponent(combineRules(props => ({
  background: 'red'
}), rules), enhancer(Text))

export default () => (
  <Wrapper>
    <Header title="Welcome to Fela." />
    <SmallText>
      This is the basic example with React.
    </SmallText>
    <SmallEnhancedText>
      This is the basic example with React.
    </SmallEnhancedText>
    <Input />
  </Wrapper>
)
