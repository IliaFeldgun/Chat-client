import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Socket from '../../api/socket'

const useStyles = makeStyles((theme) => ({
    messageInput: {
        // order: 2
    }
}))

const MessageInput = () => {
    const [input, changeInput] = React.useState("")
    const classes = useStyles()
    const handleChange = (event) => {
        changeInput(event.target.value)
    }

    const sendMessage = (message) => {
        Socket.sendMessage(message)
        changeInput("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendMessage(input)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter')
            sendMessage(input)
    }
    
    return (
        <div className={classes.messageInput}> 
            <TextField variant="outlined" onChange={handleChange} onKeyPress={handleKeyPress}/>
            <Button onClick={handleSubmit}>
                {">"}
            </Button>
        </div>
    )
}

export default MessageInput