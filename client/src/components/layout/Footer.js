import React from "react";

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



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


const Footer = () => {


    const classes = useStyles();

    return (
        <div className={classes.appBarBgColor}>
            <AppBar position="static" style={{ backgroundColor: '#1c4f76' }}>
                <Toolbar>
                    <img src={require('../../img/logo_npu.png')} alt="Логотип НПУ"/>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Е-Портфоліо
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Footer;
