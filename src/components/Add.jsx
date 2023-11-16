import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const Add = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.default',
    color: 'text.primary',
    borderRadius: '10px',
    boxShadow: 24,
    p: '2rem 1rem',
  }

  return (
    <>
      <Tooltip
        title='Add Post'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
        onClick={(e) => {
          setOpen(true)
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            textAlign='center'
          >
            Create Post
          </Typography>
          <Stack direction='row' gap={2}>
            <Avatar
              sx={{ width: '30px', height: '30px' }}
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
              onClick={(e) => setOpen(!open)}
            />
            <Typography variant='h6'>Pratik Singh</Typography>
          </Stack>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            label={`What's on your mind?`}
            multiline
            rows={5}
            variant='standard'
          />
          <Stack direction='row' gap={1} sx={{ margin: '10px 0' }}>
            <TagFacesIcon color='primary' />
            <InsertPhotoIcon color='secondary' />
            <VideoCameraBackIcon color='success' />
            <PersonAddIcon color='error' />
          </Stack>
          <Stack direction={'row'} sx={{ width: '100%' }}>
            <Button
              variant='contained'
              color='primary'
              sx={{ width: '80%', borderRadius: '10px 0 0 10px' }}
            >
              Post
            </Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ width: '20%', borderRadius: '0 10px 10px 0' }}
            >
              <CalendarMonthIcon />
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  )
}

export default Add
