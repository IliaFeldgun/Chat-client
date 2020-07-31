import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Messages from './Messages'
import MessageInput from './MessageInput'

import Socket from '../../api/socket'

const useStyles = makeStyles((theme) => ({
    messages: {
        backgroundColor: "whitesmoke",
        flex: "70%",
        position: "relative",
        height: "100%",
    }
}));

const MessagesContainer = () => {
    const classes = useStyles()
    const [messages, setMessages] = React.useState([])
    
    React.useEffect(() => {
        Socket.registerToMessage((message) => {
            setMessages([...messages, message])
        })
        Socket.registerToBulkMessage((bulkMessages) => {
            setMessages([...messages, ...bulkMessages])
        })
    })

    return (
        <Container component="span" className={classes.messages}>
            <Messages messages={messages}  />
            <MessageInput />
        </Container>
    )
}

export default MessagesContainer