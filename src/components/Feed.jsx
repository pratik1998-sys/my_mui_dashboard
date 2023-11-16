import Cards from './Cards'
import React from 'react'
import { Box } from '@mui/material'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Box>
  )
}

export default Feed
