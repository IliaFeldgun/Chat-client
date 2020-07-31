import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'

import Login from './Login'
import Socket from '../../api/socket'
import SessionStorage from '../../engine/SessionStorage'

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

    const [buttonText, setButtonText] = React.useState("Login")
    const toggleModal = (loginOpen) => {
        setState({ ...state, loginOpen })
    }
    const handleLoginClose = () => {
        toggleModal(false)
    }
    
    const handleLoggedIn = (user) => {
        SessionStorage.setUserName(user.userName)
        
        initUserName()
    }
    Socket.registerToLogin(handleLoggedIn)

    const initUserName = () => {
        const userName = SessionStorage.getUserName()
        if (userName) {
            setButtonText(userName)
        }
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Chat
                </Typography>
                <Button color="inherit" onClick={() => toggleModal(true)}>
                    {buttonText}
                </Button>
            </Toolbar>
            <Login open={state.loginOpen} onClose={handleLoginClose} />
        </AppBar>
        </div>
    );
}


export default TopBar