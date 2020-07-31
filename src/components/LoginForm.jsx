import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'

import Session from '../engine/Session'

const useStyles = makeStyles((theme) => ({
    button: {
        verticalAlign: "bottom"
    }
  }));

const LoginForm = ({onLogin}) => {
    const classes = useStyles()

    const [name, setName] = React.useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleLogin = () => {
        Session.Login(name)
        onLogin()
    }
    const handleClick = (event) => {
        handleLogin()
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter')
            handleLogin()
    }
    
    return (
        <React.Fragment>
            <TextField type="text" label="Name" onChange={handleChange} onKeyPress={handleKeyPress} />
            <Button color="inherit" className={classes.button} onClick={handleClick}>
                Login
            </Button>
        </React.Fragment>
    )
}

export default LoginForm