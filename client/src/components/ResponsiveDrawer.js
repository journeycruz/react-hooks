import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
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

export default function ResponsiveDrawer() {
  const [bhOpen, setBHOpen] = React.useState(true);
  const [ahOpen, setAHOpen] = React.useState(true);
  const [chOpen, setCHOpen] = React.useState(true);

  const showMoreBasicHooks = () => {
    setBHOpen(!bhOpen);
  };

  const showMoreAdvHooks = () => {
    setAHOpen(!ahOpen);

  const showMoreCustomHooks = () => {
    setCHOpen(!chOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            mr: `${drawerWidth}px`,
            boxShadow: 0,
          }}
        >
          <TopNavigation />
        </AppBar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: { xs: 3, md: 5, lg: 10 },
            maxWidth: '100%',
          }}
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
              background: '#F7F7F7',
              borderLeft: '1px solid #ECECEC'
            },
            '& ::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          className="drawer"
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Toolbar />
          <List sx={{ pl: 5, alignItems: 'start' }} className="list">
            <ListItemButton
              onClick={showMoreBasicHooks}
              alignItems="flex-start"
              sx={{
                margin: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
                  '& .MuiListItemIcon-root': {
                    color: 'black',
                  },
                }
              }}
            >
              <ListItemText
                className="list-title"
                sx={{ maxWidth: 'fit-content' }}
                primary="Basic Hooks"
              />
              {bhOpen ? (
                <ExpandLess sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              ) : (
                <ExpandMore sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              )}
            </ListItemButton>
            <Collapse in={bhOpen} timeout="auto" unmountOnExit>
              <List>
                {basicHooks.map((text, index) => (
                  <a href={'#' + text.to} key={index}>
                    <ListItem button>
                      <ListItemText primary={text.title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Collapse>
          </List>
          <List sx={{ pl: 5, alignItems: 'start' }} className="list">
            <ListItemButton
              onClick={showMoreAdvHooks}
              alignItems="flex-start"
              sx={{
                margin: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
                  '& .MuiListItemIcon-root': {
                    color: 'black',
                  },
                },
              }}
            >
              <ListItemText
                className="list-title"
                sx={{ maxWidth: 'fit-content' }}
                primary="Advanced Hooks"
              />
              {ahOpen ? (
                <ExpandLess sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              ) : (
                <ExpandMore sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              )}
            </ListItemButton>
            <Collapse in={ahOpen} timeout="auto" unmountOnExit>
              <List>
                {advancedHooks.map((text, index) => (
                  <a href={'#' + text.to} key={index}>
                    <ListItem button>
                      <ListItemText primary={text.title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Collapse>
          </List>
          <List sx={{ pl: 5, alignItems: 'start' }} className="list">
            <ListItemButton
              onClick={showMoreCustomHooks}
              alignItems="flex-start"
              sx={{
                margin: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
                  '& .MuiListItemIcon-root': {
                    color: 'black',
                  },
                },
              }}
            >
              <ListItemText
                className="list-title"
                sx={{ maxWidth: 'fit-content' }}
                primary="Custom Hooks"
              />
              {chOpen ? (
                <ExpandLess sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              ) : (
                <ExpandMore sx={{ height: '1.25rem', marginTop: '.25rem' }} />
              )}
            </ListItemButton>
            <Collapse in={chOpen} timeout="auto" unmountOnExit>
              <List>
                {advancedHooks.map((text, index) => (
                  <a href={'#' + text.to} key={index}>
                    <ListItem button>
                      <ListItemText primary={text.title} />
                    </ListItem>
                  </a>
                ))}
              </List>
            </Collapse>
          </List>
          <Toolbar />
          <Toolbar />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
