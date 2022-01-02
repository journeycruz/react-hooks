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
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#20232A',
    },
  },
});

const drawerWidth = '30%';

export default function PermanentDrawerRight() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            mr: `${drawerWidth}px`,
            boxShadow: 0,
          }}
        >
          <TopNavigation />
        </AppBar>
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: { xs: 3, md: 5, lg: 10 }, maxWidth: '100%' }}
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
              background: '#F7F7F7'
            },
            '& ::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          className='drawer'
          variant='permanent'
          anchor='right'
        >
          <Toolbar />
          <List className='list'>
            <a className='list-title' href='#basic-hooks'>
              <ListItem>
                <ListItemText primary='Basic Hooks' />
              </ListItem>
            </a>
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
            <a className='list-title' href='#advanced-hooks'>
              <ListItem>
                <ListItemText primary='Advanced Hooks' />
              </ListItem>
            </a>
            {advancedHooks.map((text, index) => (
              <a href={'#' + text.to} key={index}>
                <ListItem button>
                  <ListItemText className='list-item-text' primary={text.title} />
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
          <List>
            <a className='list-title' href='#custom-hooks'>
              <ListItem>
                <ListItemText primary='Custom Hooks' />
              </ListItem>
            </a>
          </List>
          <Toolbar />
          <Toolbar />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
