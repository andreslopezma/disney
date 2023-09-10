import * as React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { LocalMoviesOutlined, PersonPin } from '@mui/icons-material';
// styles 
import { AppBar, Drawer, DrawerHeader } from './assets/NavStyles';

// routes 
import { Link, Route, Routes } from "react-router-dom";

// components
import Home from './components/Home';
import Personajes from './components/Personajes';
import Peliculas from './components/Peliculas';
import FormularioPeliculas from './components/FormularioPeliculas';
import FormularioPersonajes from './components/FormularioPersonajes';

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link style={{ 'textDecoration': 'none', 'color': 'white' }} to={'/'}> Disney</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Personajes', 'Peliculas/Series'].map((text, index) => (
              <Link style={{ 'textDecoration': 'none', 'color': 'black' }} to={`${text.toLocaleLowerCase()}`} key={index}>
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {index % 2 === 0 ? <PersonPin /> : <LocalMoviesOutlined />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/peliculas/series" element={<Peliculas />} />
            <Route path="/formulario/peliculas/series" element={<FormularioPeliculas />} />
            <Route path="/formulario/personajes" element={<FormularioPersonajes />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
