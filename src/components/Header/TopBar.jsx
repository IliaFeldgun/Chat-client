import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'

import Login from './Login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
}));
const TopBar = () => {
    const classes = useStyles()

    const [state, setState] = React.useState({
        loginOpen: false
    })

    const toggleModal = (loginOpen) => {
        setState({ ...state, loginOpen })
    };
    const handleLoginClose = () => toggleModal(false)

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Chat
                </Typography>
                <Button color="inherit" onClick={() => toggleModal(true)}>
                    Login
                </Button>
            </Toolbar>
            <Login open={state.loginOpen} onClose={handleLoginClose} />
        </AppBar>
        </div>
    );
}


export default TopBar