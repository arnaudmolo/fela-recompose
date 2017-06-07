import React from 'react'
import { createComponent } from 'react-fela'

const Header = ({ title, className }) => (
  <div className={className}>
    {title}
  </div>
)

const rule = () => ({
  color: 'rgb(50, 50, 50)',
  fontSize: 100,
  padding: 50,
  ':hover': { animationDuration: '500ms' },
  '@media (max-width: 800px)': { fontSize: '40px' },
  animationDuration: '2s',
  animationIterationCount: 'infinite'
})

export default createComponent(rule, Header, ['title'])
