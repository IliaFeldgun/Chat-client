import React from 'react'
import { 
    List, ListItem, Chip, ListItemAvatar, Avatar 
} from '@material-ui/core'

const Users = ({users}) => {
    return (
        <List>
            {
                users.map((user) => {
                    return (
                        <ListItem key={user}>
                            <Chip 
                                label={user} 
                                variant="outlined" 
                                size="small" 
                                avatar={<Avatar>{user[0]}</Avatar>} 
                            />
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default Users