import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'
import ArticleIcon from '@mui/icons-material/Article'
import GroupIcon from '@mui/icons-material/Group'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import LightModeIcon from '@mui/icons-material/LightMode'

const listItems = [
  { label: 'Homepage', icon: <MailIcon /> },
  { label: 'Pages', icon: <ArticleIcon /> },
  { label: 'Groups', icon: <GroupIcon /> },
  { label: 'Marketplace', icon: <StorefrontIcon /> },
  { label: 'Friends', icon: <PersonIcon /> },
  { label: 'Setting', icon: <SettingsIcon /> },
  { label: 'profile', icon: <AccountCircleIcon /> },
]

const Sidebar = ({ myMode, setmyMode }) => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ position: 'fixed' }}>
        <List>
          {listItems.map((item, i) => {
            return (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item?.icon}</ListItemIcon>
                  <ListItemText primary={item?.label} />
                </ListItemButton>
              </ListItem>
            )
          })}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {myMode === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
              </ListItemIcon>
              <Switch
                onChange={(e) => {
                  setmyMode(myMode === 'light' ? 'dark' : 'light')
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
