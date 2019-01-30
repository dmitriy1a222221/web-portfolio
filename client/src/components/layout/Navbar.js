import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import '../../styles/layout/styleNavbar.sass'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
});


const Navbar = () => {


  const classes = useStyles();
  const [ auth ] = React.useState(true);
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
      <div className={classes.root} >
        <AppBar position="static"  style={{ backgroundColor: '#1c4f76' }}>
          <Toolbar>
            <img src={require('../../img/logo_npu.png')} alt="Логотип НПУ"/>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Е-Портфоліо
            </Typography>
            {auth && (
                <div>
                  <IconButton
                      aria-owns={open ? 'menu-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                  >
                    <Link to='/login'>
                      <MenuItem onClick={handleClose}>Увійти</MenuItem>
                    </Link>
                    <Link to='register'>
                      <MenuItem onClick={handleClose}>Зареєструватися</MenuItem>
                    </Link>
                  </Menu>
                </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
  );

}

export default Navbar;
