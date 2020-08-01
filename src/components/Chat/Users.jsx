import React from 'react'
import { 
    List, ListItem, Chip, Avatar 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'flex',
        overflowX: 'auto'
    },
    listItem: {
        flexBasis: '0'
    }
}));
const Users = ({users}) => {
    const classes = useStyles()

    return (
        <List className={classes.list}>
            {
                users.map((user) => {
                    return (
                        <ListItem className={classes.listItem} key={user}>
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