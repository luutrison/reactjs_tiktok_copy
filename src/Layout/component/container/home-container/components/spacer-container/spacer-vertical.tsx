import { Box } from '@mui/material'
import React, { Component } from 'react'
import scss from "./spacer-container.module.scss"
import  spacerVertical  from './spacer-vertical.theme'

export default class SpacerVertical extends Component<any> {
  render() {
    return (
      <Box sx={spacerVertical(this.props.size)}></Box>
    )
  }
}
