import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'

const Message = ({userName, message, timestamp}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={userName} src={`https://picsum.photos/seed/${userName}/100`}/>
            </ListItemAvatar>
            <ListItemText primary={userName} secondary={message} />
            {(new Date(timestamp)).toLocaleString()}
        </ListItem>
    )
}

export default Message