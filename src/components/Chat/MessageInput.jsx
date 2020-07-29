import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
        // Send to server, useEffect
    }
    const handleSubmit = (event) => {
        sendMessage(input)
    }
    return (
        <div className={classes.messageInput}> 
            <TextField variant="outlined" onChange={handleChange} onSubmit={handleSubmit}/>
            <Button onClick={handleSubmit}>
                {">"}
            </Button>
        </div>
    )
}

export default MessageInput