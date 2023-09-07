import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Updates', 'Photos', 'Add Units'];
const settings = ['Profile',  'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  let navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function update() {
    // Navigate to the '/updates' route
    navigate('/updates');
  }
  
  function photo() {
    // Navigate to the '/photos' route
    navigate('/photo');
  }
  
  function units() {
    // Navigate to the '/add-units' route
    navigate('/add-units');
  }


interface FunctionMap {
  [key: string]: () => void;
}

const functions = {
  Updates: update,
  Photos: photo,
  'Add Units': units,
};

function handleClick(choice: string) {
  if ((functions as FunctionMap).hasOwnProperty(choice)) {
    (functions as FunctionMap)[choice]();
  } else {
    console.log(`No function defined for page: ${choice}`);
  }
}


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="User Logo" src="/path/to/user-logo.png" onClick={handleOpenUserMenu} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }} color="yellow">
            Room 1
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => (
              <Button key={page} color="inherit" >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-controls="nav-menu"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Menu
        id="nav-menu"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={()=>handleClick(page)}>
            {page}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        id="user-menu"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            {setting}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default ResponsiveAppBar;
