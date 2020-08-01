import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'

import Socket from '../../api/socket'
import Message from './Message'

const useStyles = makeStyles((theme) => ({
    messages: {
        overflowY: 'scroll',
        flexGrow: 1,
        flexBasis: '100%'
    }
}))

const Messages = () => {
    const classes = useStyles()
    const [messages, setMessages] = React.useState([])
    const afterMessageRef = React.useRef(null)
    const scrollBottom = () => {
        afterMessageRef.current.scrollIntoView(false)
    }

    React.useEffect(() => {
        scrollBottom()
    }, [messages])

    React.useEffect(() => {
        Socket.registerToMessage((message) => {
            setMessages(messages => sortMessages([...messages, message]))
        })
    }, [])

    React.useEffect(() => {
        Socket.registerToBulkMessage((bulkMessages) => {
            setMessages(messages => sortMessages([...messages, ...bulkMessages]))
        })
    }, [])
    
    return (
        <List className={classes.messages}>
            {
                messages.map((message) => {
                    return <Message 
                        key={message.timestamp + message.userName}
                        message={message.message}
                        userName={message.userName}
                        timestamp={message.timestamp}
                    />
                })
            }
            <div ref={afterMessageRef} />
        </List>
    )
}

const sortMessages = (messages) => {
    const newMessages = [...messages]
    newMessages.sort((a,b) => {
        return new Date(a.timestamp) - new Date(b.timestamp)
    })

    return newMessages

}
export default Messages