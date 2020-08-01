import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'

import Message from './Message'

const useStyles = makeStyles((theme) => ({
    messages: {
        overflowY: 'scroll',
        height: '80%'
    }
}))

const Messages = ({messages}) => {
    const classes = useStyles()
    const afterMessageRef = React.useRef(null)
    const scrollBottom = () => {
        afterMessageRef.current.scrollIntoView(false)
    }

    React.useEffect(() => {
        scrollBottom()
    }, [messages])

    messages.sort((a, b) => {
        return new Date(a.timestamp) - new Date(b.timestamp)
    })
    
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
export default Messages