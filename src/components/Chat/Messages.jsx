import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'

import Message from './Message'

const useStyles = makeStyles((theme) => ({
    messages: {
        //order: 1
    }
}))

const Messages = ({messages}) => {
    const classes = useStyles()

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
        </List>
    )
}
export default Messages