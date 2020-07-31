import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Messages from './Messages'
import MessageInput from './MessageInput'

import Socket from '../../api/socket'

const useStyles = makeStyles((theme) => ({
    container: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        paddingRight: '0',
        width: '80%'
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
        <Container component='span' className={classes.container}>
            <Messages messages={messages}  />
            <MessageInput />
        </Container>
    )
}

export default MessagesContainer