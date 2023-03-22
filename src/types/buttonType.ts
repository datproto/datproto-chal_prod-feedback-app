import React from 'react'

export interface IButton {
  children?: React.ReactNode
  customClass?: string
  color?: any
  type?: JSX.IntrinsicElements['button']['type']
}
