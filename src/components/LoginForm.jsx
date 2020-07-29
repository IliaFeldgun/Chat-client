import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        verticalAlign: "bottom"
    }
  }));

const LoginForm = () => {
    const classes = useStyles()

    const [state, setState] = React.useState({
        name: ""
    })
    const handleChange = (event) => {
        setState({
            name: event.target.value
        })
    }
    const handleClick = (event) => {
        /// Send to server, effect hook
    }
    return (
        <React.Fragment>
            <TextField type="text" label="Name" onChange={handleChange} />
            <Button color="inherit" className={classes.button} onClick={handleClick}>
                Login
            </Button>
        </React.Fragment>
    )
}

export default LoginForm