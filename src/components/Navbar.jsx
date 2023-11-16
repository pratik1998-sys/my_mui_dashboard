import { Mail, NotificationAdd, Pets } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import React, { useState } from 'react'

const MyToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const SearchBar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0 15px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const Userbox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0 10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <AppBar position='sticky'>
      <MyToolBar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Pratik Singh
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchBar>
          <InputBase placeholder='Search..' />
        </SearchBar>
        <Icons>
          <Badge badgeContent={2} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationAdd />
          </Badge>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            onClick={(e) => setOpen(!open)}
          />
        </Icons>
        <Userbox>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            onClick={(e) => setOpen(!open)}
          />
          <Typography variant='h6'>Pratik Singh</Typography>
        </Userbox>
      </MyToolBar>
      <Menu
        id='basic-menu'
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
