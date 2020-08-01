import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    AppBar, Toolbar, Typography, Button, IconButton
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import Login from '../General/Login'
import Session from '../../engine/Session'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
      marginRight: theme.spacing(2)
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
        if (userName === ""){
            const newUserName = Session.tryReLogin()
        
            if (newUserName) {
                setUserName(newUserName)
            }
        }
        Session.registerToLogin((newUserName) => setUserName(newUserName))
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
                <IconButton 
                    className={classes.menuButton} 
                    edge="start" color="inherit" aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
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