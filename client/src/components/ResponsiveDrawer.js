import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TopNavigation from './TopNavigation';
import HookDemonstrations from './HookDemonstrations';
import '../styles/components/Sidenav.scss';
import { basicHooks } from '../hooks/BasicHooks';
import { advancedHooks } from '../hooks/AdvancedHooks';

const drawerWidth = '30%';

export default function PermanentDrawerRight() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <TopNavigation />
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 5 }}
      >
        <Toolbar />
        <HookDemonstrations />
      </Box>
      <Drawer
        sx={{
          zIndex: '0',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className="drawer"
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <List>
          {basicHooks.map((text, index) => (
            <a href={'#' + text.to} key={index}>
              <ListItem button>
                <ListItemText primary={text.title} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {advancedHooks.map((text, index) => (
            <a href={'#' + text.to} key={index}>
              <ListItem button>
                <ListItemText primary={text.title} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {['Custom Hooks'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Toolbar />
        <Toolbar />
      </Drawer>
    </Box>
  );
}
