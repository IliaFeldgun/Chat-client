import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    message: {
        overflowWrap: 'break-word',
    },
    avatar: {
        alignSelf: 'flex-end'
    }
}))
const Message = ({userName, message, timestamp}) => {
    const classes = useStyles()

    return (
        <ListItem>
            <ListItemAvatar className={classes.avatar}>
                <Avatar 
                    alt={userName} 
                    src={`https://picsum.photos/seed/${userName}/100`}
                />
            </ListItemAvatar>
            <ListItemText 
                className={classes.message} 
                primary={message} 
                secondary={
                    `${userName} at ${(new Date(timestamp)).toLocaleString()}`
                } 
            />
        </ListItem>
    )
}

export default Message