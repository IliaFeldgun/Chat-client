import React from 'react'
import { Button, TextField, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Socket from '../../api/socket'
import Session from '../../engine/Session'


const useStyles = makeStyles((theme) => ({
    messageInput: {
        width: '80%',
        flex: '1'
    },
    button: {
        float: 'right'
    },
    container: {
        display: 'flex'
    }
}))

const MessageInput = () => {
    const [input, changeInput] = React.useState("")
    const [disabled, setDisabled] = React.useState(false)
    const classes = useStyles()
    const handleChange = (event) => {
        changeInput(event.target.value)
    }

    const sendMessage = (message) => {
        if (message !== "") {
            Socket.sendMessage(message)
            changeInput("")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendMessage(input)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter')
            sendMessage(input)
    }
    React.useEffect(() => {
        const userName = Session.getSession()
        if (!userName || userName === "") {
            setDisabled(true)

            Session.registerToLogin(() => {
                setDisabled(false)
            })
        }
    }, [disabled])
    return (
        <Box className={classes.container}> 
            <TextField autoFocus={true} disabled={disabled} rowsMax="2" className={classes.messageInput} variant="outlined" value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
            <Button disabled={disabled} onClick={handleSubmit}>
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    )
}

export default MessageInput