import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'

import Login from './Login'
import Session from '../../engine/Session'

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

    const [open, setOpen] = React.useState(false)
    const [userName, setUserName] = React.useState("")
    
    React.useEffect(() => {
        initUserName()
    })
    const initUserName = () => {
        const userName = Session.tryReLogin()
        if (userName) {
            setUserName(userName)
        }
        else {
            Session.registerToLogin((userName) => setUserName(userName))
        }
    }
    const toggleModal = (loginOpen) => {
        setOpen(loginOpen)
    }

    const handleLoginClose = () => {
        toggleModal(false)
    }

    const buttonText = userName !== "" ? userName : "Login"

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
            <Login open={open} onClose={handleLoginClose} />
        </AppBar>
        </div>
    );
}

export default TopBar