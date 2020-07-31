import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Message from './Message'

const useStyles = makeStyles((theme) => ({
    messages: {
        //order: 1
    }
}))

const Messages = ({messages}) => {
    const classes = useStyles()

    return (
        <div className={classes.messages}>
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
        </div>
    )
}
export default Messages